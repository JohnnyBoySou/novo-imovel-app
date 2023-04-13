
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, ImageBackground, Dimensions, Image, Pressable, StatusBar, TextInput , ScrollView} from 'react-native';


import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import Counter from '../../../components/counter/index';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,

  Button,
  ButtonIcon,
  ButtonLabel,
  AreaValor,
  LabelValor,
  SplashImg,


  Select,
  SelectLabel,
  Spacing,
  Spacing1,

  Div,
  Subheadline,

  Circle,
} from './styles';


import {
  Row,
  Column,
} from '../../../theme/global'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Bathroom({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  
  const voltar = route.params?.voltar
  const data = route.params?.data
  const a = false;

  const [bathroom, setBathroom] = useState(1)
  const [bedroom, setBedroom] = useState(2)

  const [bed0, setBed0] = useState(false)
  const [bed1, setBed1] = useState(false)
  const [bed2, setBed2] = useState(true)
  const [bed3, setBed3] = useState(false)
  const [bed4, setBed4] = useState(false)

  
  const [bat0, setBat0] = useState(false)
  const [bat1, setBat1] = useState(true)
  const [bat2, setBat2] = useState(false)
  const [bat3, setBat3] = useState(false)
  const [bat4, setBat4] = useState(false)


  const handleBedroom = ( value ) => {
    if(value == 0){
      setBed0(true)
      setBed1(false)
      setBed2(false)
      setBed3(false)
      setBed4(false)
      setBedroom(0)
    }else if(value == 1){
      setBed0(false)
      setBed1(true)
      setBed2(false)
      setBed3(false)
      setBed4(false)
      setBedroom(1)
    }else if(value == 2){
      setBed0(false)
      setBed1(false)
      setBed2(true)
      setBed3(false)
      setBed4(false)
      setBedroom(2)
    }else if(value == 3){
      setBed0(false)
      setBed1(false)
      setBed2(false)
      setBed3(true)
      setBed4(false)
      setBedroom(3)
    }else if(value == 4){
      setBed0(false)
      setBed1(false)
      setBed2(false)
      setBed3(false)
      setBed4(true)
      setBedroom(4)
    }
  }


 const handleBathroom = ( value ) => {
    if(value == 0){
      setBat0(true)
      setBat1(false)
      setBat2(false)
      setBat3(false)
      setBat4(false)
      setBathroom(0)
    }else if(value == 1){
      setBat0(false)
      setBat1(true)
      setBat2(false)
      setBat3(false)
      setBat4(false)
      setBathroom(1)
    }else if(value == 2){
      setBat0(false)
      setBat1(false)
      setBat2(true)
      setBat3(false)
      setBat4(false)
      setBathroom(2)
    }else if(value == 3){
      setBat0(false)
      setBat1(false)
      setBat2(false)
      setBat3(true)
      setBat4(false)
      setBathroom(3)
    }else if(value == 4){
      setBat0(false)
      setBat1(false)
      setBat2(false)
      setBat3(false)
      setBat4(true)
      setBathroom(4)
    }
  }
  
  const dados = {
    alugar: data?.alugar,
    comprar: data?.comprar,
    cidade: data?.cidade,
    item1: data?.item1,
    bathroom: bathroom,
    bedroom: bedroom,
  }


    const novaData = {
        alugar: data?.alugar,
        comprar: data?.comprar,
        valor_max: data?.valor_max,
        cidade: data?.cidade,
        item1: data?.item1,
        dias: data?.dias,
        bathroom: bathroom,
        bedroom: bedroom,
      }
  

  async function proximo(){
    if(voltar == true){
      const jsonValue = JSON.stringify(novaData)
      await AsyncStorage.setItem('@preferences', jsonValue)
      navigation.navigate('TabNavigator', {params: {reload: true}, screen: "Home"})
    }else{
      navigation.navigate('Visitar', {data: dados})}
  }




return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
        <ScrollView style={{paddingBottom: 40, }}>

         <SplashImg style={{marginTop: 50,}}>
              <Image source={require('../../../assets/bedroom.png')}  style={{width: 86, height: 86, marginTop: -20, alignSelf: 'center'}}/>
            </SplashImg>



          
          <Title>Quantidade de {"\n"}quartos ou banheiros</Title>

          <Subheadline>Selecione entre as opções abaixo</Subheadline>

          


        <View style={{marginTop: 20, marginBottom: 0, paddingHorizontal: 24,}}>

        <Div/>
        <Spacing/>
        <Spacing/>
        
       <Column> 
       <Label>Quantidade de quartos</Label>
        <Row style={{justifyContent: 'space-between'}}>
        
          <Circle>
            <Select activity={bed0}  disabled={bed0} onPress={() => handleBedroom(0)}>
              <SelectLabel activity={bed0}><AntDesign name="close" style={{marginTop: 10,}} size={20} /></SelectLabel>
            </Select>
          </Circle>
  
          <Circle>
            <Select activity={bed1}  disabled={bed1} onPress={() => handleBedroom(1)}>
              <SelectLabel activity={bed1}>1</SelectLabel>
            </Select>
          </Circle>
          
          <Circle>
            <Select activity={bed2} disabled={bed2} onPress={() => handleBedroom(2)}>
              <SelectLabel activity={bed2}>2</SelectLabel>
            </Select>
          </Circle>
          
          <Circle>
            <Select activity={bed3} disabled={bed3} onPress={() => handleBedroom(3)}>
              <SelectLabel activity={bed3}>3</SelectLabel>
            </Select>
          </Circle>

          <Circle>
            <Select activity={bed4} disabled={bed4} onPress={() => handleBedroom(4)}>
              <SelectLabel activity={bed4}>+4</SelectLabel>
            </Select>
          </Circle>
          
           
          </Row>
        </Column>


        <Spacing/>
        <Spacing/>
        <Div/>
        <Spacing/>
        <Spacing/>
        <Column> 
       <Label>Quantidade de banheiros</Label>
        <Row style={{justifyContent: 'space-between'}}>
        
          <Circle>
            <Select activity={bat0} disabled={bat0} onPress={() => handleBathroom(0)}>
              <SelectLabel activity={bat0}><AntDesign style={{marginTop: 10,}} name="close" size={20} /></SelectLabel>
            </Select>
          </Circle>
  
          <Circle>
            <Select activity={bat1} disabled={bat1} onPress={() => handleBathroom(1)}>
              <SelectLabel activity={bat1}>1</SelectLabel>
            </Select>
          </Circle>
          
          <Circle>
            <Select activity={bat2} disabled={bat2} onPress={() => handleBathroom(2)}>
              <SelectLabel activity={bat2}>2</SelectLabel>
            </Select>
          </Circle>
          
          <Circle>
            <Select activity={bat3} disabled={bat3} onPress={() => handleBathroom(3)}>
              <SelectLabel activity={bat3}>3</SelectLabel>
            </Select>
          </Circle>

          <Circle>
            <Select activity={bat4} disabled={bat4} onPress={() => handleBathroom(4)}>
              <SelectLabel activity={bat4}>+4</SelectLabel>
            </Select>
          </Circle>
           
          </Row>
        </Column>
       
        <Spacing/>
        <Div/>
        </View>
         

   
        <Button color="#5B72F2" disabled={false} onPress={proximo} off={false}>
          <>
            <ButtonLabel off={false}>Próximo</ButtonLabel>
          
               <ButtonIcon off={false}/>
              <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        
          </>
        </Button>
      




      </ScrollView>

    
  </Wrapper>
  </Main>
  )
}