
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View, Text, Dimensions, StatusBar, ActivityIndicator, Animated, ScrollView, TouchableOpacity } from 'react-native';

import { Ionicons, Feather, AntDesign,   MaterialIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const btW = 0.49 * width;

import { 
  Wrapper, 
  Title, 
  Main,
  Label,
  Tips,
  Button,
  ButtonIcon,
  ButtonLabel,
  Circle,
  UserTitle,
  UserLabel,
  SubTitle,
  Spacing,
  UserImg,
  Input,
  TabBar,
  TabBarButton,
  BtIcon,
  TabBarTitle,
} from './styles';


import AsyncStorage from '@react-native-async-storage/async-storage';


import { ThemeContext } from 'styled-components/native';

import { Modalize } from 'react-native-modalize';

import RowFull from '../../new_components/lists/row_full/index'

import { API_URL } from '../../api/index';
import Axios from 'axios';
import { Column, Row } from '../../theme/global';
import { requestFeed , revalidateToken  , requestUserEndpoint, requestItemID, requestUser, requestUserEdit } from '../../api/request/mobile';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';
import Header from './../../components/header/index';

export default function User({ navigation, route }) {

  const { color } = useContext(ThemeContext)

  const [user, setUser] = useState([]);
  const [profileID, setProfileID] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingUser, setloadingUser] = useState(false);

  const [imagem, setImagem] = useState(user?.avatar);
  const [token, setToken] = useState();
  const id = user?.ID
  const [email, setEmail] = useState(user?.email);
  const [first_name, setFirstName] = useState(user?.nome)
  const [last_name, setLastName] = useState(user?.sobrenome)
  const [cep, setCEP] = useState(user?.cep)
  const [picture, setPicture] = useState();
  const [telefone, setTelefone] = useState(user?.telefone)
  const [whatsApp, setWhatsApp] = useState(user?.whatsApp)
  const [instagram, setInstagram] = useState(user?.instagram)
  const [facebook, setFacebook] = useState(user?.facebook)
  const [imgLink, setImgLink] = useState(user?.avatar);
  const [emailComercial, setEmailComercial] = useState(user?.emailComercial);
  const [username, setUsername] = useState(user?.user_login);

  const a = false;

  const getUser = ( userID ) => { 
    setloadingUser(true)
    requestUserEndpoint(userID).then(response => {
      console.log(response)
      setEmail(response?.user_email)
      setUsername(response?.user_login)
      setImagem(response?.avatar)
      setFirstName(response?.nome)
      setLastName(response?.sobrenome)
      setCEP(response?.cep)
      setImgLink(response?.avatar)
      setTelefone(response?.telefone)
      setWhatsApp(response?.whatsapp)
      setInstagram(response?.instagram)
      setFacebook(response?.facebook)
      setEmailComercial(response?.email_comercial)
      setloadingUser(false)
    })
   }

  useEffect(() => {
    requestUser().then(response => { 
      setUser(response)
      getUser(response.id)
    })
    revalidateToken().then(response => {
      setToken(response)
    })
  },[])

  const [loadingImg, setLoadingImg] = useState(false);

  async function newMedia( img,){
    setLoadingImg(true)
    const formData = new FormData();
    formData.append("file", img);
    formData.append("title", `avatar ${id}_${first_name}`);
    
    const headers = {
      'Content-Type': 'form/multipart',
      'Authorization': 'Bearer' + token,
    }

   Axios.post(`${API_URL}/wp/v2/media`,  formData, {headers: headers}).then(response => {
    console.log(response)
    setImgLink(response?.data.source_url)
    setImagem(response?.data.source_url)
    setLoadingImg(false)
    }).catch(error => {console.log(error)});}

  const hiddenFileInput = React.useRef(null);
  const onChangePicture = e => {setPicture(e.target.files[0]); setImagem(URL.createObjectURL(e.target.files[0]));
  
  };

  const handleEditUser = () => { 
    setloadingUser(true)
    const userData = {
    "token": token, "id":id,  
    "first_name": first_name, "last_name": last_name, 
    "avatar": imgLink,
     "cep": cep, "telefone": telefone, 
     "instagram": instagram, "whatsapp": whatsApp, 
     "email_comercial": emailComercial,
     "facebook": facebook,
  }
    requestUserEdit( userData ).then(response => {getUser();})

  }
 
   const scrollX = useRef(new Animated.Value(0)).current;
  const scrollRefView = useRef(null);
  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);


  const handleScroll = (event, ) => {
    const positionX = event.nativeEvent.contentOffset.x;
    if(positionX > width ){
      setScreen2(true)
      setScreen1(false)
    }
    if(positionX < width){
      setScreen2(false)
      setScreen1(true)
    }
  };


  function changeScreen(){
   if(screen1){
    setScreen1(false)
    setScreen2(true)
   }else if(screen2){
    setScreen1(true)
    setScreen2(false)
   }
   
   
   /* if(screen1){
      scrollRefView.current.scrollTo({ x: width, y: 0, animated: true });
      setScreen1(false)
      setScreen2(true)
    }
    if(screen2){
      scrollRefView.current.scrollTo({ x: 0, y: 0, animated: true });
      setScreen1(true)
      setScreen2(false)
    }
    */
  }


return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>


    <Header title="Perfil" back={true}/>
    

      <Column style={{marginHorizontal: 20,}}>



        <View style={{position: 'relative', marginBottom: 20,}}>
          <UserImg source={require('../../assets/suff.png')} />
            <BtIcon disabled={loadingImg} onClick={() => hiddenFileInput.current.click()}>
              {loadingImg && <ActivityIndicator size={12} color="#fff"/>}
              {!loadingImg && <Feather style={{textAlign: 'center'}} name="camera" size={16} color="#fff" />}
            </BtIcon>
        </View>

          <UserTitle>Sousa</UserTitle>

          <TabBar>
            <TabBarButton w={btW} disabled={screen1} onPress={changeScreen} focus={screen1}><TabBarTitle focus={screen1}>Dados Gerais</TabBarTitle></TabBarButton>
            <TabBarButton w={btW} disabled={screen2} onPress={changeScreen} focus={screen2}><TabBarTitle focus={screen2}>Contato</TabBarTitle></TabBarButton>
          </TabBar>

          

<ScrollView
      ref={scrollRefView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      >
     
     {screen1 &&  
     <Column style={{width: width,}}>
              <Label>E-mail</Label>
              <Input placeholder='E-mail' disabled value={email}/>

              <Label>Nome de usuario</Label>
              <Input placeholder='Ex:joaosousa' disabled value={username}/>

              <Label>Primeiro Nome</Label>
              <Input placeholder='Ex: João' onChangeText={setFirstName} 
              value={first_name}/>

              <Label>Sobrenome</Label>
              <Input placeholder='Ex: Sousa' onChangeText={setLastName} 
              value={last_name}/>

              <Label>Código Postal (CEP)</Label>
              <Input placeholder='Ex: 89251901 * apenas números' onChangeText={setCEP} 
              value={cep}/>
            
             </Column>}
             

           {screen2 &&   
            <Column style={{width: width,}}>
             <Label>Telefone</Label>
      <Input onChangeText={setTelefone}  value={telefone}/>

      
      <Label>WhatsApp</Label>
      <Input onChangeText={setWhatsApp}  value={whatsApp}/>

      <Label>E-mail comercial</Label>
      <Input onChangeText={setEmailComercial} value={emailComercial}/>
      
      <Label>Facebook</Label>
      <Input placeholder='Ex: @username' onChangeText={setFacebook} value={facebook}/>

      
      <Label>Instagram</Label>
      <Input placeholder='Ex: @username' onChangeText={setInstagram} value={instagram}/>
    </Column>}
     
   </ScrollView>
       

             <Button color="#5B72F2" onPress={handleEditUser} off={false}>
          <>
          <View style={{flexGrow: 2,}}>
            {!loading && <ButtonLabel off={false}>Salvar</ButtonLabel> }
            {loading && <ActivityIndicator size={30} color="#fff"/> }
           </View> 
            <ButtonIcon/>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
          </>
        </Button>



      <Spacing/>
      </Column>
       
  </Wrapper>



  
  </Main>
  )
}