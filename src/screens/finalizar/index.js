
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Dimensions, StatusBar, ScrollView, Linking, TouchableOpacity } from 'react-native';


import { Ionicons, MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import { 
  Wrapper, 
  Title, 
  Main,
  Label,

  
  Spacing,
  Spacing1,

  Div,
  

  DayOff,
  DayOn,
  Calendar,
  DayOnLabel,
  DayOffLabel,
  Day,

  Item,
  ItemImg,
  ItemLabel,
  ItemTitle,

  Lista,
  Ball,

  Infra,
  InfraLabel,
  Edit,
  EditLabel,

  Button,
  ButtonLabel,
  ButtonIcon,

  ModalDois,
  ButtonSocial,
  SocialLabel,
  SubSocialLabel,


  

  ModalTitle,
  ModalLabel,
  Circle,

  Imobil,
  ImobilImg,
  ImobilLabel,
  ImobilTitle,

} from './styles';


import Header from '../../components/header';

import { Modalize } from 'react-native-modalize';
import { ThemeContext } from 'styled-components/native';
import { TouchableRipple } from 'react-native-paper';
import { Tax, TaxLi } from '../../new_components/taxas/styles';
import RowFlow from '../../new_components/lists/row_flow'
import { requestPreferences } from '../../api/request/mobile'
import { Row } from '../../theme/global';

export default function Finalizar({ navigation, route, ...props }) {

  const { color, font } = useContext(ThemeContext)
  const a = false
  const [preferences, setPreferences] = useState()

  const [dia1, setDia1] = useState('')
  const [dia2, setDia2] = useState('')
  const [dia3, setDia3] = useState('')
  const [dia4, setDia4] = useState('')
  const [dia5, setDia5] = useState('')



  function handleDias(valor){
    const preferences = valor
    if(preferences?.dias[0].segunda){
      setDia1('Segunda-feira')
    }
    if(preferences?.dias[0].terca){
      setDia2('Terça-feira')
    }
    if(preferences?.dias[0].quarta){
      setDia3('Quarta-feira')
    }
    if(preferences?.dias[0].quinta){
      setDia4('Quinta-feira')
    }
    if(preferences?.dias[0].sexta){
      setDia5('Sexta-feira')
    }
    if(preferences?.dias[0].final ){
      setDia1('Apenas final de semana')
    }
  }


  async function getPreferences(){
    requestPreferences().then(
      function(response, ) {
        if(response){
          setPreferences(response)
        }
      })
  }

  
  const [tel, setTel] = useState('');
  const editTel = () => { 
    const cleanPhoneNumber = whatsapp.replace(/\D/g, ''); 
    const tel = `+55${cleanPhoneNumber.substring(0, 2)}${cleanPhoneNumber.substring(2)}`; 
    setTel(tel)
  }

  useEffect(() => {
    getPreferences()
  },[])

  const handleVisitacao = () => { 
    modalizeRef.current?.close();
    navigation.navigate('Visitar', {voltar: true, data: preferences, })
   }



  const item =  route.params?.author
  const whatsapp = item?.whatsapp
  console.log(whatsapp)
  const residencia = route.params?.item
  const titulo = route.params?.item.nome
  const id = route.params?.item.codigo
  const preco = route.params?.item.valor_mensal
  const email = item?.email
  const taxas = item?.taxas

 
 
  const mensagem = `Olá, estou interessado em: *${titulo}* - Código: *${id}* - Valor: R$ *${preco}*. Posso visitar o imóvel: ${dia1} ${dia2} ${dia3} ${dia4} ${dia5} `
  
  function handleWhatsApp(){  
  
    Linking.openURL(`whatsapp://send?text=${mensagem}&phone=55${whatsapp}`); 
  }

  function handleEmail(){
    Linking.openURL(`mailto:${email}`)
  }

  function handleTel(){
    Linking.openURL(`tel:${tel}`)
  }


  const onOpen = () => {
    modalizeRef.current?.open();
  }
  const modalizeRef = useRef()

return (
  <Main>
  <Header title="Finalizar"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    <ScrollView style={{paddingVertical: 0, paddingHorizontal: 24, flex: 1, }}>
    <TouchableOpacity style={{alignItems: "center" , marginTop: 15, marginBottom: 15,}} >
      <RowFlow style={{alignSelf: 'center'}} data={residencia} disabled />
    </TouchableOpacity>

      <View style={{marginTop: 0, marginBottom: 10, paddingBottom: 10, borderWidth: 0, borderColor: "#5B72F210", marginHorizontal: 0, borderRadius: 12, }}>
          
            <Tax>
            <Lista style={{marginBottom: 8}}>
            <Infra style={{backgroundColor: color.secundary, marginTop: -2, marginRight: -4,}}>
                <Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
            <InfraLabel style={{color: "#B55025", fontSize: 18, fontFamily: 'Font_Medium',}}>Taxas adicionais</InfraLabel>
            </Lista>
            <View style={{marginTop: -4}}>
                {taxas?.map((taxas) => 
                <View style={{flexDirection: 'row'}}>
                <Ball style={{backgroundColor: "#906959", marginBottom:4,  }}/>
                <TaxLi style={{color: "#906959"}} key={taxas}>{taxas}</TaxLi></View> )}
            </View>  
        </Tax>
            

    
 <><View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', paddingBottom: 10, paddingTop: 10,}}>
            <Title>Visitação</Title>
            <Edit onPress={handleVisitacao}><EditLabel>Editar</EditLabel></Edit>
          </View>
          <Label>Qual o melhor dia para você visitar o imóvel?</Label>

          <Calendar>
            <Day> 
              {preferences?.dias[0].final && <><DayOn/><DayOnLabel>D</DayOnLabel></>}
              {preferences?.dias[0].final == false && <><DayOff/><DayOffLabel>D</DayOffLabel></>}
            </Day>
            
            <Day> 
              {preferences?.dias[0].segunda && <><DayOn/><DayOnLabel>S</DayOnLabel></>}
               {preferences?.dias[0].segunda == false && <><DayOff/><DayOffLabel>S</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].terca && <><DayOn/><DayOnLabel>T</DayOnLabel></>}
               {preferences?.dias[0].terca == false && <><DayOff/><DayOffLabel>T</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].quarta && <><DayOn/><DayOnLabel>Q</DayOnLabel></>}
               {preferences?.dias[0].quarta == false && <><DayOff/><DayOffLabel>Q</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].quinta && <><DayOn/><DayOnLabel>Q</DayOnLabel></>}
               {preferences?.dias[0].quinta == false && <><DayOff/><DayOffLabel>Q</DayOffLabel></>}
            </Day>

            <Day> 
              {preferences?.dias[0].sexta && <><DayOn/><DayOnLabel>S</DayOnLabel></>}
               {preferences?.dias[0].sexta == false && <><DayOff/><DayOffLabel>S</DayOffLabel></>}
            </Day>
            <Day> 
              {preferences?.dias[0].final && <><DayOn/><DayOnLabel>S</DayOnLabel></>}
              {preferences?.dias[0].final == false && <><DayOff/><DayOffLabel>S</DayOffLabel></>}
            </Day>
          </Calendar></> 



        <Spacing1/>
        <Div/>
        <Spacing1/>

        <Title>Anunciante</Title>

        
    <Imobil onPress={() => navigation.navigate('Profile', {item: item})}>
    <Row style={{justifyContent: 'space-between', width: '100%', }}>
      
      <Row>
        <ImobilImg source={{uri: item?.avatar}}/>
        <View style={{justifyContent: 'center', marginLeft: 12, }}>
          <ImobilTitle>{item?.nome}</ImobilTitle>
          <ImobilLabel>{item?.user_email}</ImobilLabel>
        </View>
      </Row>

      <View style={{backgroundColor: color.primary, marginTop: 8, borderRadius: 6, width: 44, height: 44, textAlign: 'center', justifyContent: 'center'}}>
        <Feather name="info" size={24} color="#fff" style={{alignSelf: 'center'}} />
      </View>
    
    </Row>
    
    </Imobil>

    
    <Spacing1/>
    <Spacing1/>
    <Div/>
    <Spacing1/>
       
        <Button color="#25D366" onPress={onOpen}>
          <>
          <ButtonLabel>Próximo</ButtonLabel>
          <ButtonIcon/>
          <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
          </>
        </Button>

        </View>

      </ScrollView>

    
  </Wrapper>

  <Modalize ref={modalizeRef} modalStyle={{ backgroundColor: color.primary, orderTopLeftRadius: 18, borderTopRightRadius: 18,}} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#FFFFFF30",}} handlePosition="inside">
    <View style={{paddingTop: 20, backgroundColor: color.primary, paddingBottom: 20, borderTopLeftRadius: 16, borderTopRightRadius: 16,}}> 

      <Circle style={{alignSelf: 'center',}}><Ionicons name="checkmark" style={{textAlign: 'center'}} size={102} color="#fff" /></Circle>
      <ModalTitle>Estamos quase lá!</ModalTitle>
      <ModalLabel>Escolha a forma de contato para prosseguir.</ModalLabel>
     <ModalDois>

  <View style={{zIndex: 99}}>    
     <View style={{marginBottom: -20, alignSelf: 'flex-end', padding: 6, backgroundColor: "#FFF", zIndex: 99, borderRadius: 4, paddingHorizontal:10, marginRight: 20,}}>
        <Label style={{color: color.primary, fontSize: 12, letterSpacing: 1, fontFamily: font.medium,}}>MELHOR OPÇÃO</Label>
      </View>
    </View>

    
  <TouchableRipple style={{flexGrow: 1,borderRadius: 8,}} onPress={handleWhatsApp} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
    <>

      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6,}}>
        <ButtonSocial color="#FFF"><Ionicons name="logo-whatsapp" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12, }}>
          <SocialLabel>WhatsApp</SocialLabel>
          <SubSocialLabel>Envie uma mensagem </SubSocialLabel>
        </View>
      </View>
      </>
    </TouchableRipple>

    <Spacing/>
    
    <TouchableRipple style={{flexGrow: 1, borderRadius: 8,}} onPress={handleTel} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6, }}>
        <ButtonSocial color="#FFF"><AntDesign name="phone" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12,}}>
          <SocialLabel>Telefone</SocialLabel>
          <SubSocialLabel>Faça uma ligação</SubSocialLabel>
        </View>
      </View>
    </TouchableRipple>
    
    <Spacing/>


     <TouchableRipple style={{flexGrow: 1, borderRadius: 8,}} onPress={handleEmail} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6,}}>
        <ButtonSocial color="#FFF"><MaterialIcons name="alternate-email" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12,}}>
          <SocialLabel>E-mail</SocialLabel>
          <SubSocialLabel>Mande um e-mail</SubSocialLabel>
        </View>
      </View>
    </TouchableRipple>
 
    </ModalDois>
    </View>

  </Modalize>
  
  </Main>
  )
}