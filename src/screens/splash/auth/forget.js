
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Image,  StatusBar,  ScrollView, TouchableOpacity} from 'react-native';


import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

import { 
  Wrapper, 
  Title, 
  Main,
  Label,

  Button,
  ButtonIcon,
  ButtonLabel,
  SplashImg,


  Spacing,

  Div,
  Subheadline,

  Input,
  InputLabel, 
  EyeBt,
  } from './styles';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from 'styled-components/native';

import { Row, Column} from '../../../theme/global'


export default function ForgetPassword({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const a = false;


  const [email, setEmail] = useState('joaodesousa101@gmail.com')
  


  async function proximo(){
    if(voltar == true){
      const jsonValue = JSON.stringify(novaData)
      await AsyncStorage.setItem('@preferences', jsonValue)
      navigation.navigate('TabNavigator', {params: {reload: true}, screen: "Home"})
    }else{
      navigation.navigate('Busca', {cidade: cidade})}
  }


return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
    <Image source={require('../../../assets/login_frame_1.png')} style={{
        width: "100%", height: 360, marginBottom: -20, alignSelf: 'center', resizeMode: 'contain',  marginTop: -50,}}/>



      <Column>
        <Title>Recuperar</Title>
        <Label style={{textAlign: 'left', marginLeft: 24, fontSize: 18,}}>Enviaremos um link para redefinir a senha no seu e-mail.</Label>
      </Column>
        
        <View style={{marginTop: 10, marginBottom: 0, paddingHorizontal: 24,}}>

          <Div/>

         <Spacing/>

          <InputLabel>E-mail</InputLabel>
          <Input 
            onChangeText={email => setEmail(email)} 
            value={email} 
          />
          
        <Spacing/>
         
        <Button color="#5B72F2" onPress={proximo} off={false}>
          <>
            <ButtonLabel off={false}>Redefinir</ButtonLabel>
            <ButtonIcon/>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
          </>
        </Button>
        
        <Spacing/>
        </View>
         

    
  </Wrapper>
  </Main>
  )
}