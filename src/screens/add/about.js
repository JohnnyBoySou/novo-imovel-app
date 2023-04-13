
import React, { useState, useContext, useRef } from 'react';
import { View, StatusBar, } from 'react-native';


import { Octicons, AntDesign } from '@expo/vector-icons';
import { 
  Wrapper, 
  Title, 
  Main,
  
  

  Spacing,

  Div,
  
  Input,InputLabel, EyeBt,

  
  Step, StepLabel, StepImg,

  NextBt, NextLabel, BackBt, BackLabel,

  Circle, SelectCircle, SelectCircleLabel,
  CheckLabel,
  Spacing1,
  Select,
  SelectLabel,
  } from './styles';
import { ThemeContext } from 'styled-components/native';

import { Modalize } from 'react-native-modalize';
import { Row, Column} from '../../theme/global'

export default function About({ navigation, route, ...props }) {

  const { color, font } = useContext(ThemeContext)
  const a = false;

  const data = route.params?.imovel

  const [cep, setCep] = useState('')
  const [bairro, setBairro] = useState('')
  const [street, setStreet] = useState('')
  const [infra, setInfra] = useState('')
  const [taxas, setTaxas] = useState('')
  

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
  
 const modalizeInfra = useRef(null);
 const modalizeTaxas = useRef(null);

 const onOpen = () => {
   modalizeRef.current?.open();
 };



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


  const params = {
    name: data?.name,
    valor_mensal: data?.valor_mensal,
    valor_unico: data?.valor_unico,
    categoria: data?.categoria,
    area: data?.area,
    qtd1: bedroom,
    qtd2: bathroom, 
    infra: infra,
    taxas: taxas,
  }


  const handleBack = () => {
    navigation.goBack()
  }
  
  const handleNext = () => {
    navigation.navigate('Location', {imovel: params,})
  }
  
  
  const [piscina, setPiscina] = useState(false)

  const InfraComponent = () => (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10, marginHorizontal: 20, marginTop: 30,}}>      
      <Select activity={piscina} onPress={() => setPiscina(!piscina)}>
        <SelectLabel activity={piscina}>Piscina</SelectLabel>
      </Select>
      <Spacing1/>
    </View>
  )


  const infraestrutura = []

  const handleInfra = ( value) => {
    infraestrutura.push(value)
  }


return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
  
      <Row style={{justifyContent: 'space-between'}}>
        <Step onPress={() => navigation.goBack()}>
          <StepLabel>2</StepLabel>
        </Step>
        <StepImg source={require('../../assets/add_step.png')}/>
      </Row>
      

      <Column>
        <Title>Sobre</Title>
      </Column>
        
        <View style={{marginTop: 10, marginBottom: 0, paddingHorizontal: 24,}}>

          <Div/>
          <Spacing/>



       <Column> 
       <InputLabel style={{marginTop: -10,}}>Qtd. de quartos</InputLabel>
        <Row style={{justifyContent: 'space-between'}}>
        
          <Circle>
            <SelectCircle activity={bed0}  disabled={bed0} onPress={() => handleBedroom(0)}>
              <SelectCircleLabel activity={bed0}><AntDesign name="close" style={{marginTop: 10,}} size={20} /></SelectCircleLabel>
            </SelectCircle>
          </Circle>
  
          <Circle>
            <SelectCircle activity={bed1}  disabled={bed1} onPress={() => handleBedroom(1)}>
              <SelectCircleLabel activity={bed1}>1</SelectCircleLabel>
            </SelectCircle>
          </Circle>
          
          <Circle>
            <SelectCircle activity={bed2} disabled={bed2} onPress={() => handleBedroom(2)}>
              <SelectCircleLabel activity={bed2}>2</SelectCircleLabel>
            </SelectCircle>
          </Circle>
          
          <Circle>
            <SelectCircle activity={bed3} disabled={bed3} onPress={() => handleBedroom(3)}>
              <SelectCircleLabel activity={bed3}>3</SelectCircleLabel>
            </SelectCircle>
          </Circle>

          <Circle>
            <SelectCircle activity={bed4} disabled={bed4} onPress={() => handleBedroom(4)}>
              <SelectCircleLabel activity={bed4}>+4</SelectCircleLabel>
            </SelectCircle>
          </Circle>
          
           
          </Row>
        </Column>


        <Spacing/>
        <Spacing/>


        
        <Column> 
       <InputLabel>Qtd. de Banheiros</InputLabel>
        <Row style={{justifyContent: 'space-between'}}>
        
          <Circle>
            <SelectCircle activity={bat0} disabled={bat0} onPress={() => handleBathroom(0)}>
              <SelectCircleLabel activity={bat0}><AntDesign style={{marginTop: 10,}} name="close" size={20} /></SelectCircleLabel>
            </SelectCircle>
          </Circle>
  
          <Circle>
            <SelectCircle activity={bat1} disabled={bat1} onPress={() => handleBathroom(1)}>
              <SelectCircleLabel activity={bat1}>1</SelectCircleLabel>
            </SelectCircle>
          </Circle>
          
          <Circle>
            <SelectCircle activity={bat2} disabled={bat2} onPress={() => handleBathroom(2)}>
              <SelectCircleLabel activity={bat2}>2</SelectCircleLabel>
            </SelectCircle>
          </Circle>
          
          <Circle>
            <SelectCircle activity={bat3} disabled={bat3} onPress={() => handleBathroom(3)}>
              <SelectCircleLabel activity={bat3}>3</SelectCircleLabel>
            </SelectCircle>
          </Circle>

          <Circle>
            <SelectCircle activity={bat4} disabled={bat4} onPress={() => handleBathroom(4)}>
              <SelectCircleLabel activity={bat4}>+4</SelectCircleLabel>
            </SelectCircle>
          </Circle>
           
          </Row>
        </Column>
       
        <Spacing/>
        <Div/>



         <InputLabel>Infraestrutura</InputLabel>

        <Row style={{width: '100%', display: 'flex',}}>
        
          <Input 
            onChangeText={infra => setInfra(infra)} 
            value={infra} 
            placeholder="Selecionar"
          />
          <EyeBt onPress={onOpen}><Column><Octicons name="multi-select" style={{paddingTop: 4, paddingLeft: 4,}} size={20} color={color.primary} /></Column></EyeBt>  
        </Row>

        <Spacing/>
         <InputLabel>Taxas adicionais</InputLabel>
         <Row style={{width: '100%', display: 'flex',}}> 
          <Input 
            onChangeText={taxas => setTaxas(taxas)} 
            value={taxas} 
            placeholder="Selecionar"
          />  
          <EyeBt onPress={onOpen}><Column><Octicons name="multi-select" style={{paddingTop: 4, paddingLeft: 4,}} size={20} color={color.primary} /></Column></EyeBt>  
        </Row>
         
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

              
    <Modalize ref={modalizeInfra} adjustToContentHeight={true} >
      <View>
        <Title style={{textAlign: 'left', fontSize: 20, fontFamily: font.medium, marginLeft: 20, marginTop: 20, marginBottom: -10,}}>Quais dessas Infraestruturas seu imóvel possuí?</Title>
        <InfraComponent/>
      </View>

    </Modalize>

    
    <Modalize ref={modalizeTaxas} adjustToContentHeight={true} >
      <View>
        <Title style={{textAlign: 'left', fontSize: 20, fontFamily: font.medium, marginLeft: 20, marginTop: 20, marginBottom: -10,}}>Quais dessas Infraestruturas seu imóvel possuí?</Title>
        <InfraComponent/>
      </View>

    </Modalize>
            
  </Wrapper>

  
  </Main>
  )
}