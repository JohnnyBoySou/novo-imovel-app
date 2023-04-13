
import React, { useState, useContext, useEffect, useRef, } from 'react';
import { View,  Dimensions, FlatList, Linking} from 'react-native';

import { Ionicons, Fontisto , MaterialIcons, AntDesign, Feather, } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import { TouchableRipple } from 'react-native-paper';

import { 
  Wrapper, 
  Title, 
  Main,
  Label,

  Modal,
  ModalImg,
  
  ButtonLabel,
  Div,

  Spacing,

  Verify,
  Local,
  LocalLabel,
  VerifyImg,
  LabelCenter,
  TitleCenter,
  ButtonGreat,


  Circle,
  ModalTitle,
  ModalDois,
  ModalLabel,

  ButtonSocial,
  SocialLabel,
  SubSocialLabel,


  Fixed,
  
  Tag,
} from './styles';


import Header from '../../components/header';

import { Modalize } from 'react-native-modalize';


import { ThemeContext } from 'styled-components/native';
import RowLarge from '../../new_components/lists/row_large/index'


import { requestAuthorData, requestUserEndpoint } from '../../api/request/mobile';



export default function Profile({ navigation, route, ...props }) {

  const { color, font } = useContext(ThemeContext)
  
  const data = route.params?.item
  const [item, setItem] = useState(data)
  const [loading, setLoading] = useState(false)
  const [imoveis, setImoveis] = useState([])
  

  const modalizeRef = useRef(null);
  const modalizeCheck = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  
function openWhatsApp() {
  const phoneNumber = data.whatsapp
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  const value = `+55${cleanPhoneNumber.substring(0, 2)}${cleanPhoneNumber.substring(2)}`; // Adiciona +55 e remove os parênteses e traços
 
  console.log(phoneNumber)
  console.log(value)
  const text = 'Olá, estou interessado em seus serviços!';

  Linking.openURL(`https://wa.me/${value}?text=${text}`);
}


  const a = false;


  async function getDados(){
    setLoading(true)
    requestAuthorData(item?.ID).then(
      function(response, ) {
        if(response){
          setImoveis(response)
        }
      })
    setLoading(false)
  }   

  const renderItem = ({ item }) => (
    <RowLarge data={item} direction="horizontal"/>
  ) 
  
  useEffect(() => {
    getDados()
  }, [])
  


return (
  <Main>
  <Header title="Perfil"/>
  <Wrapper>
    
  <View style={{marginHorizontal: 24,}}>
    <ModalImg source={{uri: item?.avatar}}/>
    <Spacing/>
    <View>
      <Tag>PERFIL</Tag>
      <Title>{item?.nome}</Title>
      
      <Verify onPress={onOpen}><Feather style={{textAlign: 'center'}} name="check" size={32} color="#fff" /></Verify>
    </View>

    <Local >
      <>
        <Fontisto name="map-marker-alt" size={20} color="#5B72F2" style={{marginTop: 0, marginRight: 10,}} />
        <LocalLabel>{item?.cep}</LocalLabel>
      </>
      </Local>

      <Label>{item?.descricao}</Label>    
   
    
    <Spacing/>
    <Div/>
 
    </View>
    <Title style={{marginLeft: 20, marginTop: 20, fontSize: 24, marginBottom: 10, fontFamily: font.medium,}}>Imóveis publicados</Title>

    <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={imoveis}
            ListHeaderComponent={() => <View style={{width: 20, height: 20,}}/>}
            ListFooterComponent={() => <View style={{width: 20, height: 20,}}/>}
            renderItem={renderItem}
            keyExtractor={imoveis => imoveis?.ID}
          />



  <View style={{height: 100, width: 50}}/>

  </Wrapper>


    <Fixed onPress={() => modalizeCheck.current?.open()}>
      <Ionicons name="chatbubbles-outline" size={32} style={{textAlign: 'center'}} color="#fff" />
    </Fixed>
  


  
  <Modalize ref={modalizeRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <Modal>

      <VerifyImg><Feather style={{textAlign: 'center'}} name="check" size={84} color="#fff" /></VerifyImg>
      <TitleCenter>Perfil Verificado!</TitleCenter>
      <LabelCenter>Este perfil foi verificado por uma equipe especializada.</LabelCenter>
      <ButtonGreat color={color.green} onPress={() => modalizeRef.current?.close()}>
        <ButtonLabel style={{color: color.light}}>Ótimo!</ButtonLabel>
      </ButtonGreat>
    
    </Modal>
  </Modalize>



   <Modalize ref={modalizeCheck} modalStyle={{ backgroundColor: color.primary, orderTopLeftRadius: 18, borderTopRightRadius: 18,}} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <View style={{paddingTop: 20, backgroundColor: color.primary, paddingBottom: 20, borderTopLeftRadius: 16, borderTopRightRadius: 16,}}> 

    <Circle style={{alignSelf: 'center',}}><Ionicons name="checkmark" style={{textAlign: 'center'}} size={102} color="#fff" /></Circle>

    <ModalTitle>Estamos quase lá!</ModalTitle>
    <ModalLabel>Escolha a forma de contato para prosseguir.</ModalLabel>
    <ModalDois>

    <View style={{marginBottom: -20, alignSelf: 'flex-end', padding: 6, backgroundColor: "#FFF", zIndex: 99, borderRadius: 4, paddingHorizontal:10, marginRight: 20,}}>
      <Label style={{color: color.primary, fontSize: 12, letterSpacing: 1, fontFamily: font.medium, marginTop: 0,}}>MELHOR OPÇÃO</Label>
    </View>

    <TouchableRipple style={{flexGrow: 1,borderRadius: 8,}} onPress={openWhatsApp}  rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6,}}>
        <ButtonSocial color="#FFF"><Ionicons name="logo-whatsapp" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12, }}>
          <SocialLabel>WhatsApp</SocialLabel>
          <SubSocialLabel>Envie uma mensagem </SubSocialLabel>
        </View>
      </View>
    </TouchableRipple>

    <Spacing/>

     <TouchableRipple style={{flexGrow: 1, borderRadius: 8,}} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
      <View style={{flexDirection: 'row', backgroundColor: "#758AFF", padding: 14, borderRadius: 6, }}>
        <ButtonSocial color="#FFF"><AntDesign name="phone" size={24} color={color.primary} style={{textAlign: 'center',}} /></ButtonSocial>
        <View style={{marginLeft: 12,}}>
          <SocialLabel>Telefone</SocialLabel>
          <SubSocialLabel>Faça uma ligação</SubSocialLabel>
        </View>
      </View>
    </TouchableRipple>
    
    <Spacing/>

    <TouchableRipple style={{flexGrow: 1, borderRadius: 8,}} rippleColor="rgba(0, 0, 0, .32)" borderless={true}>
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