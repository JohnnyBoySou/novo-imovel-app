
import React, { useState, useContext, useEffect } from 'react';
import { View,  Text, ImageBackground, Dimensions, Image, Pressable, StatusBar, TextInput, ScrollView } from 'react-native';


import {  AntDesign, } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { 
  Wrapper, 
  Title, 
  Main,

  Button,
  ButtonIcon,
  ButtonLabel,
  SplashImg,

  Select,
  SelectLabel,
  Spacing1,

  Div,
  Subheadline
} from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThemeContext } from 'styled-components/native';


export default function Busca({ navigation, route, ...props }) {

  const { color, opacity } = useContext(ThemeContext)

  const cidade = route.params?.cidade


  const a = false;



  const escolha = 'aluguel'

  const [max, setMax] = useState(0)
  const [min, setMin] = useState(0)
  const [valorInicial, setValorInicial] = useState(0)
  const [valorFinal, setValorFinal] = useState(0)
  const [step, setStep] = useState(0)



  function definir(){
    if(escolha == 'aluguel'){
      setMin(100)
      setMax(10000)
      setValorInicial(3000)
      setValorFinal(7000)
      setStep(100)
    }else if(escolha == 'comprar'){
      setMin(10000)
      setMax(1000000)
      setValorInicial(30000)
      setValorFinal(700000)
      setStep(1000)
    }


  }







  useEffect(() => {
    definir();
  }, [])
  


  const [aluguel, setAluguel] = useState(true)
  const [comprar, setComprar] = useState(false)

  
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

  const [bt, setBt] = useState(true)


  function handleChangeSelect(){
    if(aluguel == true){
      setAluguel(false)
      setComprar(true)
    }
    else if(aluguel == false){
      setAluguel(true)
      setComprar(false)
    }
  }







  const [item1, setItem1] = useState('')



  



  const [opc, setOpc] = useState(0)

  function handleCasaComercial(){
    if(casaComercial == true){
      setCasaComercial(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(casaComercial == false){
      setItem1('item1=CasaComercial&')
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
      setOpc(opc + 1)
    }
  }

  function handleCasa(){
    if(casa == true){
      setCasa(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(casa == false){
      setItem1('item1=Casa&')
      setCasa(true)
      setCasaComercial(false)
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
      setOpc(opc + 1)
    }
  }

  function handleAp(){
    if(ap == true){
      setAp(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(ap == false){
      setItem1('item1=Apartamento&')
      setAp(true)
      setCasaComercial(false)
      setChacara(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setCasa(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }
  
  function handleChacara(){
    if(chacara == true){
      setChacara(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(chacara == false){
      setItem1('item1=Chácara&')
      setChacara(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setCasa(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }

  function handleCobertura(){
    if(cobertura == true){
      setCobertura(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(cobertura == false){
      setItem1('item1=Cobertura&')
      setCobertura(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setChacara(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setCasa(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }

  function handleGalpao(){
    if(galpao == true){
      setGalpao(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(galpao == false){
      setItem1('item1=Cobertura&')
      setGalpao(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setChacara(false)
      setGeminado(false)
      setSitio(false)
      setKitnet(false)
      setPredioComercial(false)
      setCasa(false)
      setSalaComercial(false)
      setSobrado(false)
      setOpc(opc + 1)
    }
  }

  function handleKitnet(){
    if(kitnet == true){
      setKitnet(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(kitnet == false){
      setItem1('item1=Kitnet&')
      setKitnet(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setGalpao(false)
      setCasa(false)
      setPredioComercial(false)
      setSalaComercial(false)
      setSobrado(false)
      setChacara(false)
      setOpc(opc + 1)
    }
  }

  
  function handlePredioComercial(){
    if(predioComercial == true){
      setPredioComercial(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(predioComercial == false){
      setItem1('item1=PredioComercial&')
      setPredioComercial(true)
      
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setGeminado(false)
      setSitio(false)
      setGalpao(false)
      setCasa(false)
      setKitnet(false)
      setSalaComercial(false)
      setSobrado(false)
      setChacara(false)
      setOpc(opc + 1)
    }
  }

  
  function handleGeminado(){
    if(geminado == true){
      setGeminado(false)
      setItem1('')
      setOpc(opc - 1)
    }else if(geminado == false){
      setItem1('item1=Geminado&')
      setGeminado(true)
      setCasaComercial(false)
      setAp(false)
      setTerreno(false)
      setCobertura(false)
      setGalpao(false)
      setPredioComercial(false)
      setSitio(false)
      setGalpao(false)
      setCasa(false)
      setKitnet(false)
      setSalaComercial(false)
      setSobrado(false)
      setChacara(false)
      setOpc(opc + 1)
    }
  }

  function handleSalaComercial(){
      if(salaComercial == true){
        setSalaComercial(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(salaComercial == false){
        setItem1('item1=SalaComercial&')
        setSalaComercial(true)
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
        setCasaComercial(false)
        setSobrado(false)
        setOpc(opc + 1)
      }
    }


  function handleSitio(){
      if(sitio == true){
        setSitio(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(sitio == false){
        setItem1('item1=Sitio&')
        setSitio(true)
        setCasa(false)
        setChacara(false)
        setTerreno(false)
        setCobertura(false)
        setGalpao(false)
        setGeminado(false)
        setKitnet(false)
        setPredioComercial(false)
        setAp(false)
        setCasaComercial(false)
        setSalaComercial(false)
        setSobrado(false)
        setOpc(opc + 1)
      }
    }


  function handleSobrado(){
      if(sobrado == true){
        setSobrado(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(sobrado == false){
        setItem1('item1=Sobrado&')
        setSobrado(true)
        setCasa(false)
        setChacara(false)
        setTerreno(false)
        setCobertura(false)
        setGalpao(false)
        setGeminado(false)
        setKitnet(false)
        setPredioComercial(false)
        setAp(false)
        setCasaComercial(false)
        setSalaComercial(false)
        setSitio(false)
        setOpc(opc + 1)
      }
    }


  function handleTerreno(){
      if(terreno == true){
        setTerreno(false)
        setItem1('')
        setOpc(opc - 1)
      }else if(terreno == false){
        setItem1('item1=Terreno&')
        setTerreno(true)
        setCasa(false)
        setChacara(false)
        setCobertura(false)
        setGalpao(false)
        setGeminado(false)
        setKitnet(false)
        setPredioComercial(false)
        setAp(false)
        setCasaComercial(false)
        setSalaComercial(false)
        setSobrado(false)
        setSitio(false)
        setOpc(opc + 1)
      }
    }


  useEffect(() => {
    refresh()
  }, [opc])


  function refresh(){ 

    if(opc >= 1){
      setBt(false)
    }
    else if(opc < 1){
      setBt(true)
    }
  }



  const dados = {
    alugar: aluguel,
    comprar: comprar,
    cidade: cidade,
    item1: item1,
  }


  const voltar = route.params?.voltar
  const data = route.params?.data

  const novaData = {
        alugar: aluguel,
        comprar: comprar,
        valor_max: data?.valor_max,
        cidade: data?.cidade,
        item1: item1,
        dias: data?.dias,
        bathroom: data?.bathroom,
        bedroom: data?.bedroom,
      }

  
  async function proximo(){
    if(voltar == true){
      const jsonValue = JSON.stringify(novaData)
      await AsyncStorage.setItem('@preferences', jsonValue)
      navigation.navigate('TabNavigator', {params: {reload: Math.floor(Math.random() * 100) + 1}, screen: "Feed"})
    }else{
      navigation.navigate('Bathroom', {data: dados})}
  }



return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
        <ScrollView style={{paddingVertical: 40, paddingHorizontal: 24, flex: 1, }} contentContainerStyle={{justifyContent: 'center'}}>


          <SplashImg>
            <Image source={require('../../../assets/busca.png')}  style={{width: 64, height: 64, alignSelf: 'center'}}/>
          </SplashImg>

          <Title>O que você está buscando?</Title>

        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 10,}}>

          <Select disabled={aluguel} style={{flexGrow: 1,}} activity={aluguel} onPress={handleChangeSelect}>
            <SelectLabel activity={aluguel}>Alugar</SelectLabel>
          </Select>
          <Spacing1/>
          <Select disabled={comprar} style={{flexGrow: 1,}} activity={comprar} onPress={handleChangeSelect}>
            <SelectLabel activity={comprar}>Comprar</SelectLabel>
          </Select>
        </View>

        <Div/>
        
        <Subheadline style={{marginTop: 20, marginBottom: 20,}}>Selecione apenas um</Subheadline>

        <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10,}}>

            
            <Select activity={casa} onPress={handleCasa}>
              <SelectLabel activity={casa}>Casa</SelectLabel>
            </Select>
            <Spacing1/>

            <Select activity={ap} onPress={handleAp}>
              <SelectLabel activity={ap}>Apartamento</SelectLabel>
            </Select>
            <Spacing1/>



            <Select activity={casaComercial} onPress={handleCasaComercial}>
              <SelectLabel activity={casaComercial}>Casa Comercial</SelectLabel>
            </Select>
            <Spacing1/>

            <Select activity={chacara} onPress={handleChacara}>
              <SelectLabel activity={chacara}>Chácara</SelectLabel>
            </Select>
             <Spacing1/>

            <Select activity={cobertura} onPress={handleCobertura}>
              <SelectLabel activity={cobertura}>Cobertura</SelectLabel>
            </Select>
            <Spacing1/>
            
            <Select activity={galpao} onPress={handleGalpao}>
              <SelectLabel activity={galpao}>Galpão</SelectLabel>
            </Select>
            <Spacing1/>
            
            <Select activity={geminado} onPress={handleGeminado}>
              <SelectLabel activity={geminado}>Geminado</SelectLabel>
            </Select>
            
            <Spacing1/>

            <Select activity={predioComercial} onPress={handlePredioComercial}>
              <SelectLabel activity={predioComercial}>Prédio Comercial</SelectLabel>
            </Select>
            
            <Spacing1/>
            <Select activity={salaComercial} onPress={handleSalaComercial}>
              <SelectLabel activity={salaComercial}>Sala Comercial </SelectLabel>
            </Select>
            
             <Spacing1/>
            <Select activity={sitio} onPress={handleSitio}>
              <SelectLabel activity={sitio}>Sítio</SelectLabel>
            </Select>
            
            <Spacing1/>
            <Select activity={sobrado} onPress={handleSobrado}>
              <SelectLabel activity={sobrado}>Sobrado </SelectLabel>
            </Select>

            
            <Spacing1/>
            <Select activity={terreno} onPress={handleTerreno}>
              <SelectLabel activity={terreno}>Terreno </SelectLabel>
            </Select>

            
            <Spacing1/>
            <Select activity={kitnet} onPress={handleKitnet}>
              <SelectLabel activity={kitnet}>Kitnet </SelectLabel>
            </Select>
          <Spacing1/>
        </View>
      <Div/>


      { opc >= 1 && 
     
        <Button color="#5B72F2" disabled={bt} onPress={proximo} off={bt}>
          <>
            <ButtonLabel off={bt}>Próximo</ButtonLabel>
            <ButtonIcon off={bt}/>
           

              <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
           
          </>
        </Button>
      }






      { opc < 1 && 
    
        <Button color="#5B72F2" disabled={bt} off={bt}>
          <>
            <ButtonLabel off={bt}>Selecione as opções</ButtonLabel>
            <ButtonIcon off={bt}/>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowup" size={28} color="#FFF" />
          </>
        </Button>
      
      }
      </ScrollView>

    
  </Wrapper>
  </Main>
  )
}