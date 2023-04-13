
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Image,  StatusBar,  ScrollView, TouchableOpacity} from 'react-native';


import { Ionicons, Feather, Octicons } from '@expo/vector-icons';

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
  Back,
  Step, StepLabel, StepImg,

  NextBt, NextLabel, BackBt, BackLabel,
  Spacing1,

  } from './styles';

import { Modalize } from 'react-native-modalize';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext } from 'styled-components/native';

import { Row, Column} from '../../theme/global'

export default function Register({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const a = false;

  const [imovelName, setImovelName] = useState('Residência Sousa')
  const [typeSingle, setTypeSingle] = useState(false)
  const [typeMonth, setTypeMonth] = useState(true)

  const [valueMonth, setValueMonth] = useState('1350')
  const [valueSingle, setValueSingle] = useState('')

  const [category, setCategory] = useState('Casa')
  const [area, setArea] = useState('130')

  const params = {
    name: imovelName,
    valor_mensal: valueMonth,
    valor_unico: valueSingle,
    categoria: category,
    area: area,
    tipo: "Por mês",
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
    if(typeMonth){
      params.tipo = "Por mês"
      navigation.navigate('About', {imovel: params })
    }
    else if(typeSingle){
      params.tipo = "Valor Único"
      navigation.navigate('About', {imovel: params })
    }
  }

 const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  
  const [casaComercial, setCasaComercial] = useState(false)
  const [casa, setCasa] = useState(false)
  const [ap, setAp] = useState(false)
  const [chacara, setChacara] = useState(false)
  const [cobertura, setCobertura] = useState(false)
  const [galpao, setGalpao] = useState(false)

  
  const [geminado, setGeminado] = useState(false)

  const [predioComercial, setPredioComercial] = useState(false)
  const [salaComercial, setSalaComercial] = useState(false)
  const [sitio, setSitio] = useState(false)
  const [sobrado, setSobrado] = useState(false)
  const [terreno, setTerreno] = useState(false)
  const [kitnet, setKitnet] = useState(false)


  const handleCategoria = (item) => {
    if(item === "Casa Comercial"){
      setCategory("Casa Comercial")
      setCasaComercial(true)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Casa"){
      setCategory("Casa")
      setCasaComercial(false)
      setCasa(true)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }
    else if(item === "Chacara"){
      setCategory("Chacara")
      setCasaComercial(false)
      setCasa(false)
      setChacara(true)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Terreno"){
      setCategory("Terreno")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(true)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Cobertura"){
      setCategory("Cobertura")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(true)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Galpao"){
      setCategory("Galpao")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(true)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Geminado"){
      setCategory("Geminado")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(true)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Sitio"){
      setCategory("Sitio")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(true)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Kitnet"){
      setCategory("Kitnet")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(true)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Predio Comercial"){
      setCategory("Predio Comercial")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(true)
      setAp(false)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Ap"){
      setCategory("Ap")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(true)
      setSalaComercial(false)
      setSobrado(false)
    }else if(item === "Sala Comercial"){
      setCategory("Sala Comercial")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(true)
      setSobrado(false)
    }else if(item === "Sobrado"){
      setCategory("Sobrado")
      setCasaComercial(false)
      setCasa(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setAp(false)
      setSalaComercial(false)
      setSobrado(true)
    }
    modalizeRef.current?.close()
  }

  const Catgorias = () => (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, marginHorizontal: 20, marginTop: 30,}}>

            
            <Select activity={casa} onPress={() => handleCategoria('Casa')}>
              <SelectLabel activity={casa}>Casa</SelectLabel>
            </Select>
            <Spacing1/>

            <Select activity={ap} onPress={() => handleCategoria('Ap')}>
              <SelectLabel activity={ap}>Apartamento</SelectLabel>
            </Select>
            <Spacing1/>



            <Select activity={casaComercial} onPress={() => handleCategoria('Casa Comercial')}>
              <SelectLabel activity={casaComercial}>Casa Comercial</SelectLabel>
            </Select>
            <Spacing1/>

            <Select activity={chacara} onPress={() => handleCategoria('Chacara')}>
              <SelectLabel activity={chacara}>Chácara</SelectLabel>
            </Select>
             <Spacing1/>

            <Select activity={cobertura} onPress={() => handleCategoria('Cobertura')}>
              <SelectLabel activity={cobertura}>Cobertura</SelectLabel>
            </Select>
            <Spacing1/>
            
            <Select activity={galpao} onPress={() => handleCategoria('Galpao')}>
              <SelectLabel activity={galpao}>Galpão</SelectLabel>
            </Select>
            <Spacing1/>
            
            <Select activity={geminado} onPress={() => handleCategoria('Geminado')}>
              <SelectLabel activity={geminado}>Geminado</SelectLabel>
            </Select>
            
            <Spacing1/>

            <Select activity={predioComercial} onPress={() => handleCategoria('Predio Comercial')}>
              <SelectLabel activity={predioComercial}>Prédio Comercial</SelectLabel>
            </Select>
            
            <Spacing1/>
            <Select activity={salaComercial} onPress={() => handleCategoria('Sala Comercial')}>
              <SelectLabel activity={salaComercial}>Sala Comercial </SelectLabel>
            </Select>
            
             <Spacing1/>
            <Select activity={sitio} onPress={() => handleCategoria('Sitio')}>
              <SelectLabel activity={sitio}>Sítio</SelectLabel>
            </Select>
            
            <Spacing1/>
            <Select activity={sobrado} onPress={() => handleCategoria('Sobrado')}>
              <SelectLabel activity={sobrado}>Sobrado </SelectLabel>
            </Select>

            
            <Spacing1/>
            <Select activity={terreno} onPress={() => handleCategoria('Terreno')}>
              <SelectLabel activity={terreno}>Terreno </SelectLabel>
            </Select>

            
            <Spacing1/>
            <Select activity={kitnet} onPress={() => handleCategoria('Kitnet')}>
              <SelectLabel activity={kitnet}>Kitnet </SelectLabel>
            </Select>
          <Spacing1/>
        </View>
  )




return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
     <Row style={{justifyContent: 'space-between'}}>
        <Step onPress={() => navigation.goBack()}>
          <StepLabel>1</StepLabel>
        </Step>
        <StepImg source={require('../../assets/add_step.png')}/>
      </Row>
      

      <Column>
        <Title>Dados Gerais</Title>
      </Column>
        
        <View style={{marginTop: 15, marginBottom: 0, paddingHorizontal: 24,}}>

          <Div/>
          <Spacing/>
          <InputLabel>Nome para o Imóvel</InputLabel>
          <Input 
            onChangeText={imovelName => setImovelName(imovelName)} 
            value={imovelName} 
            placeholder="Ex: Residência Sousa"
          />
         <Spacing/>

        <InputLabel>Tipo de Valor</InputLabel>
        <Row style={{justifyContent: 'space-between'}}>
          <Select activity={typeMonth} onPress={handleChangeSelect}>
            <SelectLabel activity={typeMonth}>Por mês</SelectLabel>
          </Select>
          <Spacing style={{width: 10,}}/>
  
          <Select activity={typeSingle} onPress={handleChangeSelect}>
            <SelectLabel activity={typeSingle}>Valor único</SelectLabel>
          </Select>
        </Row>





         {typeMonth && 
         <View>
         <InputLabel>Valor mensal</InputLabel>
          <Input 
            onChangeText={valueMonth => setValueMonth(valueMonth)} 
            value={valueMonth} 
            placeholder="Ex: 1200"
          />
         <Spacing/>
         </View>
         }

         
         {typeSingle && <View>
          <InputLabel>Valor único</InputLabel>
          <Input 
            onChangeText={valueSingle => setValueSingle(valueSingle)} 
            value={valueSingle} 
            placeholder="Ex: 100.000"
          />
         <Spacing/>
        </View>}


          <InputLabel>Categoria</InputLabel>

          <Row style={{width: '100%', display: 'flex',}}>
            <Input style={{width: '83%'}}
            onChangeText={category => setCategory(category)} 
            
            value={category} />
            
           <EyeBt onPress={onOpen}>
            <Column>
              <Octicons name="multi-select" style={{paddingTop: 4, paddingLeft: 4,}} size={20} color={color.primary} />
            </Column>
            </EyeBt>        
        </Row>
        <Spacing/>

         <InputLabel>Área em metros quadrados</InputLabel>
          <Input 
            onChangeText={area => setArea(area)} 
            value={area} 
            placeholder="Ex: 50"
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
        
        </View>
         
<Modalize ref={modalizeRef} adjustToContentHeight={true} >
  <View>
    <Title style={{textAlign: 'center', marginLeft: -20, marginTop: 20, marginBottom: -10,}}>Escolha uma categoria</Title>
    <Catgorias/>

  </View>

</Modalize>
    
  </Wrapper>

  
  </Main>
  )
}