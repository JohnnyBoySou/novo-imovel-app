
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

  Input,InputLabel, EyeBt,

  Select, SelectLabel,
  Step, StepLabel, StepImg,

  NextBt, NextLabel, BackBt, BackLabel,
  } from './styles';

import Header from '../../components/header/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from 'styled-components/native';

import Geocode from "react-geocode";
import { requestCEP } from '../../api/request/mobile'
import { Row, Column} from '../../theme/global'

export default function Location({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const a = false;
  const data = route.params?.imovel

  const [cep, setCep] = useState('')
  const [bairro, setBairro] = useState('Centro')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [city, setCity] = useState('Jaraguá do Sul')
  

  const params = {
    name: data?.name,
    valor_mensal: data?.valor_mensal,
    valor_unico: data?.valor_unico,
    categoria: data?.categoria,
    tipo: data?.tipo,
    area: data?.area,
    qtd1: data?.qtd1,
    qtd2: data?.qtd2, 
    infra: data?.infra,
    taxas: data?.taxas,
    cep: cep, 
    bairro: bairro,
    rua: street,
    numero: number,
    cidade: city,
    latitude: latitude,
    longitude: longitude,
  }


  
  function handleChangeSelect(){
    if(typeMonth){
      setTypeMonth(false)
      setTypeSingle(true)
    }
    else if(!typeMonth){
      setTypeMonth(true)
      setTypeSingle(false)
    }
  }


  const handleBack = () => {
    navigation.goBack()
  }

  
  const handleNext = () => {
    navigation.navigate('Media', {imovel: params,})
  }



  
  const [loadingCEP, setLoadingCEP] = useState(false)

  

  Geocode.setApiKey("AIzaSyBaT9Nia9XOvVt7BvFVRTtof0ujGMr56rE");
  Geocode.setLanguage("pt-br");
  Geocode.setRegion("br");
  Geocode.setLocationType("ROOFTOP");

  function handleCEP (){
    setLoadingCEP(true)
    requestCEP( cep ).then(
      function(response, error) {
        console.log(response.logradouro)
        if(response){
          
          setLoadingCEP(false)
          setStreet(response.logradouro)
          setBairro(response.bairro)
          setCity(response.localidade)
          
          Geocode.fromAddress( cep ).then(
            (response) => {
              const address = response.results[0].geometry.location
              setLatitude(address.lat)
              setLongitude(address.lng)
              setLoadingCEP(false)
            },
            (error) => {
            console.error(error);
            })
          
        }else if(
          console.log(error)
        )
        return
    })
  }

  const changeCEP = (e) => {
    setCep(e.target.value)
    if(cep.length === 8){
      handleCEP()
    }
  }


return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
  
      <Row style={{justifyContent: 'space-between'}}>
        <Step>
          <StepLabel>3</StepLabel>
        </Step>
        <StepImg source={require('../../assets/add_step.png')}/>
      </Row>
      

      <Column>
        <Title>Localização</Title>
      </Column>
        
        <View style={{marginTop: 10, marginBottom: 0, paddingHorizontal: 24,}}>

          <Div/>

          <InputLabel>CEP</InputLabel>
          <Input 
            onChangeText={cep => setCep(cep)} 
            value={cep} 
            placeholder="Ex: 89251300"
            onSubmitEditing={changeCEP}
          />
         <Spacing/>





         <View>
         <InputLabel>Bairro</InputLabel>
          <Input 
            onChangeText={bairro => setBairro(bairro)} 
            value={bairro} 
            placeholder="Ex: Centro"
          />
         <Spacing/>
         </View>
         

         
          <InputLabel>Rua</InputLabel>
          <Input 
            onChangeText={street => setStreet(street)} 
            value={street} 
            placeholder="Ex: Rua Rudolfo Hufenuessler"
          />
        
         <Spacing/>

         <InputLabel>Número</InputLabel>
          <Input 
            onChangeText={number => setNumber(number)} 
            value={number} 
            placeholder="Ex: 50"
          />
         <Spacing/>

         
         <InputLabel>Cidade</InputLabel>
          <Input 
            onChangeText={city => setCity(city)} 
            value={city} 
            placeholder="Ex: Jaraguá do Sul"
          />
         <Spacing/>
         
         <Spacing/>
          <Div/>
         <Spacing/>

        <Row style={{justifyContent: 'space-between'}}>
          <BackBt onPress={handleBack}><BackLabel>ANTERIOR</BackLabel></BackBt>
          <Spacing/>
          <NextBt onPress={handleNext}><NextLabel>PRÓXIMO</NextLabel></NextBt>
        </Row>


         <Spacing/>
        </View>
         
  </Wrapper>
  </Main>
  )
}