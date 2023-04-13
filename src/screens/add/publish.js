
import React, { useContext, useState } from 'react';
import { View,  StatusBar} from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { 
  Wrapper, 
  Title, 
  Main,
  Label,

  Button,
  ButtonIcon,
  ButtonLabel,
  

  Spacing,

  Div,
  
  Input,InputLabel, 

  
  Step, StepLabel, StepImg,
  } from './styles';

import { ThemeContext } from 'styled-components/native';

import { Row, Column} from '../../theme/global'
import { requestNewImovel } from '../../api/request/mobile'

export default function Location({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const a = false;
  const data = route.params?.imovel

  const [descricao, setDescricao] = useState()

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
    cep: data?.cep, 
    bairro: data?.bairro,
    rua: data?.rua,
    numero: data?.numero,
    cidade: data?.cidade,
    latitude: data?.latitude,
    longitude: data?.longitude,
    imagem1: data?.imagem1,
    imagem2: data?.imagem2,
    imagem3: data?.imagem3,
    descricao: descricao,
  }


  const handleBack = () => {
    navigation.goBack()
  }




  
  const handleNext = () => {
    newImovel()
  }


  const [loadingNewImovel, setLoadingNewImovel] = useState(false)

  function newImovel (){
    setLoadingNewImovel(true)
    requestNewImovel( params ).then(
      function(response, error) {
        if(response){
          setLoadingNewImovel(false)
          console.log(response)
          return
        }else if(
          console.log(error)
        )
        return
    })
  }



return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
  
      <Row style={{justifyContent: 'space-between'}}>
        <Step>
          <StepLabel>5</StepLabel>
        </Step>
        <StepImg source={require('../../assets/add_step.png')}/>
      </Row>
      

      <Column>
        <Title>Publicar</Title>
      </Column>
        
        <View style={{marginTop: 10, marginBottom: 0, paddingHorizontal: 24,}}>

          <Div/>

          <InputLabel>Conte um pouco mais do imóvel</InputLabel>
          <Label>Descreva seu imóvel expondo alguns detalhes que possam ser interessantes e chamar a atenção de novos clientes.</Label>

          <Spacing/>
          <Spacing/>
          <Input 
            onChangeText={descricao => setDescricao(descricao)} 
            value={descricao} 
            placeholder="Ex: O imóvel possuí 3 quartos..."
          />
         <Spacing/>




         
         <Spacing/>
          <Div/>
         <Spacing/>

       
         <Row style={{justifyContent: 'space-between'}}>
            <BackBt onPress={handleBack}><BackLabel>ANTERIOR</BackLabel></BackBt>
            <Spacing/>
            <NextBt onPress={handleNext}><NextLabel>PUBLICAR</NextLabel></NextBt>
          </Row>

         <Spacing/>
        </View>
         
  </Wrapper>
  </Main>
  )
}