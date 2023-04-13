import React, { useState, useEffect, useRef } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableWithoutFeedback,
	Image,
	Modal,
	Animated,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { Video } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get('window');
const screenRatio = height / width;

import Imovel from '../../../api/imovel.json'
import { Column, Row } from '../../../theme/global';
import { Label, Title } from './styles';

export default function Watch({ navigation, route, ...props }) {
	
    const item = route.params?.data

	//const item = Imovel[0]
    const list = [ item?.imagem2, item?.imagem3, item?.imagem4, item?.imagem5, item?.imagem6, item?.imagem7, item?.imagem8, ]
	
    const [content, setContent] = useState([{img: item?.imagem1, finish: 0,}]);


    const handleImgs = () => {
        for (var i = 0; i < list.length; i++) {    
        if(list[i] != undefined){
            content.push({img: list[i], finish: 0,})
            console.log(list[i])
    }}
    }

    useEffect(() => {
     handleImgs()   
    }, [])
    
    

	// i use modal for opening the instagram stories
	const [modalVisible, setModalVisible] = useState(true);
	// for get the duration
	const [end, setEnd] = useState(0);
	// current is for get the current content is now playing
	const [current, setCurrent] = useState(0);
	// if load true then start the animation of the bars at the top
	const [load, setLoad] = useState(false);
	// progress is the animation value of the bars content playing the current state
	const progress = useRef(new Animated.Value(0)).current;

	

	// start() is for starting the animation bars at the top
	function start(n) {
			Animated.timing(progress, {
				toValue: 1,
				duration: 5000,
			}).start(({ finished }) => {
				if (finished) {
					next();
				}
			});
		
	}

	// handle playing the animation
	function play() {
		start(end);
	}

	// next() is for changing the content of the current content to +1
	function next() {
		// check if the next content is not empty
		if (current !== content.length - 1) {
			let data = [...content];
			data[current].finish = 1;
			setContent(data);
			setCurrent(current + 1);
			progress.setValue(0);
			setLoad(false);
		} else {
			// the next content is empty
			close();
		}
	}

	// previous() is for changing the content of the current content to -1
	function previous() {
		// checking if the previous content is not empty
		if (current - 1 >= 0) {
			let data = [...content];
			data[current].finish = 0;
			setContent(data);
			setCurrent(current - 1);
			progress.setValue(0);
			setLoad(false);
		} else {
			// the previous content is empty
			close();
		}
	}

	// closing the modal set the animation progress to 0
	function close() {
		progress.setValue(0);
		setLoad(false);
		//setModalVisible(false);
        navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<StatusBar backgroundColor="black" barStyle="light-content" />
			
		{content?.length >= 0 &&	<Modal animationType="fade" transparent={false} visible={modalVisible}>
				<View style={styles.containerModal}>
					<View style={styles.backgroundContainer}>
						
							<Image onLoadEnd={() => {progress.setValue(0); play();}}
								source={{uri: content[current]?.img,}}
								style={{ width: width, height: height, resizeMode: 'cover' }}
							/>
						
					</View>
					<Column>
						<LinearGradient
							colors={['rgba(0,0,0,1)', 'transparent']}
							style={{
								position: 'absolute',
								left: 0,
								right: 0,
								top: 0,
								height: 100,
							}}
						/>
						<Row style={{paddingTop: 10,paddingHorizontal: 10,}}>
							{content.map((index, key) => {
								return (
									<View
										key={key}
										style={{
											height: 4,
											flex: 1,
											flexDirection: 'row',
											backgroundColor: 'rgba(117, 117, 117, 0.5)',
											marginHorizontal: 2,
											borderRadius: 6,
										}}>
										<Animated.View
											style={{
												flex: current == key ? progress : content[key].finish,
												height: 2,
												backgroundColor: 'rgba(255, 255, 255, 1)',
											}}>
										</Animated.View>
									</View>
								);
							})}
						</Row>

						<View
							style={{
								height: 50,
								flexDirection: 'row',

								justifyContent: 'space-between',
								paddingHorizontal: 15,
							}}
						>
							{/* THE AVATAR AND USERNAME  */}
							<View style={{ flexDirection: 'row', alignItems: 'center' }}>
								<Image style={{ height: 30, width: 30, borderRadius: 25 }}
									source={require('../../../assets/logo1.png')}/>
								<Text
									style={{
										fontWeight: 'bold',
										color: 'white',
										paddingLeft: 10,}}>
									Novo Imóvel
								</Text>
							</View>
							

							<TouchableOpacity onPress={() => {close();}}>
								<View
									style={{
										alignItems: 'center',
										justifyContent: 'center',
										height: 50,
										paddingHorizontal: 15,
									}}>
									<Ionicons name="ios-close" size={28} color="white" />
								</View>
							</TouchableOpacity>


						</View>

						<Row>
							<TouchableWithoutFeedback onPress={() => previous()}>
								<View style={{ flex: 1 }}></View>
							</TouchableWithoutFeedback>
							<TouchableWithoutFeedback onPress={() => next()}>
								<View style={{ flex: 1 }}></View>
							</TouchableWithoutFeedback>
						</Row>

						

					</Column>
				</View>

				<LinearGradient
							colors={['transparent', 'rgba(0,0,0,1)']}
							style={{
								position: 'absolute',
								left: 0,
								right: 0,
								bottom: 0,
								height: 100,
							}}
						/>
				<Column style={{position: 'absolute', bottom: 20, alignSelf: 'center'}}>
							<Title>{item?.qtd1} quartos, {item?.qtd2} banheiros e {item?.area} m²</Title>
							<TouchableOpacity onPress={() => navigation.navigate('Details', { dados: item, })}><Label>VER MAIS</Label></TouchableOpacity>
						</Column>
					
			</Modal>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	containerModal: {
		flex: 1,
		backgroundColor: '#000',
	},
	backgroundContainer: {
		position: 'absolute',

		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
});