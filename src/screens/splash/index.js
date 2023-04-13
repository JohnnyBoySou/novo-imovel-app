
import React, { useState, useContext, useRef, useEffect } from 'react';
import { View,  Text, ImageBackground, Dimensions, Image, StatusBar } from 'react-native';
import { Ionicons, Fontisto , MaterialIcons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,

  Button,
  ButtonIcon,
  ButtonLabel,


  ImgBlock,
  Line,
  Destaque,
  ButtonOff
} from './styles';


import { ThemeContext } from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';


export default function Splash({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const { opacity } = useContext(ThemeContext)


  const largura = 0.7 * width;
  const altura = 0.6 * height;




return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>

    <View style={{flex: 1, marginTop: 20, justifyContent: 'center'}}/>
        <Image source={require('../../assets/splashimg_2.png')} style={{alignSelf: 'center', width: 0.76 * width, height: 0.50 * height }} />

        <View style={{paddingVertical: 0, paddingHorizontal: 24}}>
         <Image style={{width:100, height: 100, marginBottom: -10, alignSelf: 'center'}} source={require('../../assets/logo1.png')} />

         <View style={{flexDirection: 'row',}}>
          <Title>Encontre o imóvel dos seus sonhos!</Title>
        </View>
        
        <Label>Encontre os principais imóveis que estão para venda ou aluguel diretamente no App gratuitamente.</Label>

      <Button color="#5B72F2" onPress={() => navigation.navigate('Login')}>
        <>
          <ButtonLabel>Entrar</ButtonLabel>
          <ButtonIcon/>
          <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>

      <ButtonOff onPress={() => navigation.navigate('Mapa')}>
        <ButtonLabel style={{color: color.primary,}}>Continuar sem Login</ButtonLabel>
      </ButtonOff>
    
    </View>
    
  </Wrapper>
  </Main>
  )
}