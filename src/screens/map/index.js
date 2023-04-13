
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, FlatList} from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,
  Mark,
  MarkLabel,

  Modal,
  ModalImg,
  ModalText,

  Button, 
  ButtonIcon, 
  ButtonLabel,
  Quick,
  Back,

  Valor,
  Chip,
  Description,
  Address,
} from './styles';

import {Svg, Image as ImageSvg} from 'react-native-svg';
import { TouchableRipple, ProgressBar } from 'react-native-paper';

//import MapView,  { Marker, Callout, Circle } from 'react-native-maps';


import { ThemeContext } from 'styled-components/native';
import { Row, Column } from '../../theme/global';
import { Modalize } from 'react-native-modalize';
import { Select, SelectLabel } from '../feed/styles';
import RowFull from '../../new_components/lists/row_full';
import Imoveis from '../../api/imoveis.json'

export default function VerMapa({ navigation, route, ...props }) {

  const { color , opacity} = useContext(ThemeContext)

  const DATA_ITEM = Imoveis

  //const dados = route.params?.dados
 // const imobil = route.params?.imobil
 // const image = route.params?.dados.imagem1
  //const titulo = route.params?.dados.nome
 // const descricao = route.params?.dados.descricao

  //const latitude = parseFloat(dados.latitude)
  //const longitude = parseFloat(dados.longitude)



  const largura = 0.7 * width;
  const altura = 0.6 * height;


  const modalizeRef = useRef(null);
  const ListRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };


  const List = ({ item }) => (
    <><RowFull data={item} />
    <View style={{width: 10, height: 15,}}/></>

  )

  useEffect(() => {
    ListRef.current?.open();
  }, [])
  
 


return (
  <Main>
  
  <Wrapper>
    <View style={{paddingTop: 0, height: 1.1 * height, flex: 1, }}>
    <Row>
      <Select>
        <SelectLabel>Casa</SelectLabel>
      </Select>
      <Select>
        <SelectLabel>3 quartos</SelectLabel>
      </Select>
      <Select>
        <SelectLabel>Até R$ 2300</SelectLabel>
      </Select>

    </Row>
   
      </View>

    
  </Wrapper>

      <Modalize ref={modalizeRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "transparent",}} handlePosition="inside">
        <Modal>
          <ModalImg/>
          <ModalText>
            <Title>titulo</Title>
            <Label>descricao</Label>
            <Row>
              <Title>R$ 2.300,00</Title>
              <Label style={{marginLeft: 6, fontSize:18, color: color.title,}}>Por mês</Label>
            </Row>
          </ModalText>
        </Modal>


      

        <Button color="#5B72F2"  onPress={() => navigation.navigate('Finalizar', {residencia: dados, dados: imobil})}>
        <>
        <ButtonLabel>Alugar agora</ButtonLabel>
        <ButtonIcon/>
        <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>

      
    
      </Modalize>


      <Back onPress={() => navigation.goBack()}>
        <MaterialIcons style={{textAlign: 'center',}} name="keyboard-arrow-left" size={42} color="#fff" />
      </Back>


      <Quick onPress={onOpen}>
         <MaterialCommunityIcons name="map-marker-radius-outline"  style={{ textAlign: 'center'}}  size={36} color="#FFF" />
      </Quick>

      <Modalize ref={ListRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "transparent",}} handlePosition="inside">
        <Modal>
        <Column>
        <Title style={{marginBottom: 10,}}>Para você</Title>
        
        
        <FlatList  
        style={{ marginLeft: -24, marginRight: -24, marginTop: 10,}}
        data={DATA_ITEM} 
        keyExtractor={item => item.key} 
        showsHorizontalScrollIndicator={false}  
        horizontal 
        ListHeaderComponent={<View style={{width: 20}}/>}
        ListFooterComponent={<View style={{width: 20}}/>}
        decelerationRate={'normal'} 
        renderItem={List}/>
        </Column>

        </Modal>
      </Modalize>

  </Main>
  )
}