
import React, { useState, useContext,  } from 'react';
import { View,  StatusBar, } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { 
  Wrapper, 
  Title, 
  Main,
  Label,
  ImgProfile
  } from './styles';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from 'styled-components/native';
import { ProgressBar } from 'react-native-paper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Animatable from 'react-native-animatable';

import { requestPreferences } from '../../../api/request/mobile';


export default function Confirmation({ navigation, route, ...props }) {

  const { color, font, opacity} = useContext(ThemeContext)
  const a = false;

  const user = route.params?.user
  const password = route.params?.password
  const path = route.params?.path
  const [preferences, setPreferences] = useState(false)
  const [loading, setLoading] = useState(100)
  
  async function next(){
    const userValue = {email: user.email, password: password, token: user.token, id: user.id, name: user.name}
    const jsonValue = JSON.stringify(userValue)
    await AsyncStorage.setItem('@user', jsonValue)  
    
      try {
        const jsonValue = await AsyncStorage.getItem('@preferences')
        if(jsonValue != null) {
          if(path === "account"){
            setTimeout(() => navigation.navigate('Account'), 500)  
          }else{
            setTimeout(() => navigation.navigate('TabNavigator'), 500)  
          }
        }else{
         navigation.navigate('Mapa')
        }
      } catch(e) {
        console.log(e)
      }
      
  }
  
return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
  <View style={{alignSelf: 'center', marginTop: 60, justifyContent: 'center'}}>
  <AnimatedCircularProgress
            size={200}
            width={10}
            fill={loading}
            tintColor={color.primary}
            onAnimationComplete={next}
            backgroundColor={opacity.dois}
            rotation={0}
            lineCap="round"
            duration={4000}
            children={() =>  <Animatable.Text duration={1000} delay={3000} animation="fadeInUpBig"><Ionicons name="checkmark" size={102} color={color.primary} /></Animatable.Text>}
            />
    <Title style={{marginTop: 30, marginLeft: -24, textAlign: 'center', }}>
      <Title style={{fontFamily: font.book,}}>Bem-vindo</Title>
      , {"\n"}{user.name}!</Title>
    </View>
        
    <View style={{paddingVertical: 40, paddingHorizontal: 24, justifyContent: 'center'}}>
      
      <Title style={{marginBottom:20, marginLeft: 0}}>Estamos trazendo seus dados</Title>
      <ProgressBar indeterminate color={color.primary} />
    </View>
  </Wrapper>
  </Main>
  )
}