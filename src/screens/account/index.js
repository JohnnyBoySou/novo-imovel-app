
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Dimensions, StatusBar, FlatList, TouchableOpacity } from 'react-native';

import { Ionicons, AntDesign } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


import { 
  Wrapper, 
  Title, 
  Main,
  Tips,
  Button,
  ButtonIcon,
  ButtonLabel,
  Circle,
  UserTitle,
  UserLabel,
  SubTitle,
  Spacing
} from './styles';




import { ThemeContext } from 'styled-components/native';

import { Modalize } from 'react-native-modalize';

import RowFull from '../../new_components/lists/row_full/index'

import { Column } from '../../theme/global';
import { useIsFocused  } from '@react-navigation/native';
import { requestSaveIDs , removeUser, requestItemID, requestUser, requestAuthorData } from '../../api/request/mobile';

//import Drawer from 'react-native-drawer'
//import UserDrawer from './userDrawer';

export default function Account({ navigation, route }) {

  const { color } = useContext(ThemeContext)

  const [saves, setSaves] = useState([])  
  const [login, setLogin] = useState()
  const [user, setUser] = useState([])
  const [userItens, setUserItens] = useState([])
  const [imovelExist, setImovelExist] = useState(false)
  const [imovelSaves, setImovelSaves] = useState(false)

  const isFocused = useIsFocused();

  const modalizeRef = useRef(null);


  function getData(){
      requestUser().then(
        function(response, ) {
          if(response){
            setUser(response)
            setLogin(true)
            requestSaveIDs().then(
              function(response){   
              if(response.length > 0){
                const result = []
                setImovelSaves(true)
                for (var i = 0; i < response.length; i++) { 
                  requestItemID(response[i]).then(function(response){
                    result.push(response)
                  })
                 setSaves(result)
                }
              }else{setImovelSaves(false)}}
            )    

            requestAuthorData(response.id).then(function(response,) {
              if(response?.length > 0){ 
                setUserItens(response); 
                setImovelExist(true)  
              }
              else{setImovelExist(false)}})
          }
        })
  }
  

  useEffect(() => {
    getData()
  }, [])

  
  const [userLogout, setUserLogout] = useState()
  const handleLogout = () => {
    removeUser().then(function(response) {
      if(response === true){
        setUserLogout(true)
        setUser()
        setLogin(false)
      }
    })
  }

  const renderItem = ({ item }) => (
    <><RowFull style={{width: 0.8 * width}} data={item} />
    <View style={{width: 10, height: 15,}}/></>
  ) 

  
  
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 , backgroundColor: "#FFFFFF"},
};
const [drawerOpen, setDrawerOpen] = useState(false);

  const AddImovel = () => (
    <View style={{marginTop: 20, marginBottom: 10, borderColor: color.primary+20, borderWidth: 2, paddingVertical: 20, borderRadius: 12,}}>
    <Circle >
      <Ionicons style={{alignSelf: 'center'}} name="home-outline" size={38} color={color.primary} />
    </Circle>        
    <Tips>Parece que você não criou seu imóvel ainda...{"\n"}Adicione agora mesmo!</Tips>

    <Column style={{marginHorizontal: 20, marginBottom: 20,}}>
    
      <Button color="#5B72F2" onPress={() => navigation.navigate('Alert')}>
        <>
        <ButtonLabel>Criar imóvel</ButtonLabel>
        <ButtonIcon/>
      <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>
    </Column>
  </View>
  )

  
  const IsLogin = () => (
    <View style={{marginTop: 20, marginBottom: 30, borderColor: color.primary+20, borderWidth: 2, paddingVertical: 20, borderRadius: 12,}}>
    <Circle >
      <Ionicons style={{alignSelf: 'center'}} name="enter-outline" size={38} color={color.primary} />
    </Circle>        
    <Tips>Parece que você não fez Login ainda...{"\n"}Entre agora mesmo!</Tips>

    <Column style={{marginHorizontal: 20, marginBottom: 20,}}>
    
      <Button color="#5B72F2" onPress={() => navigation.navigate('Login', {path: 'account'})}>
        <>
        <ButtonLabel>Fazer Login</ButtonLabel>
        <ButtonIcon/>
      <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>
    </Column>
  </View>
  )

  const Profile = () => (
    <TouchableOpacity >
    <View style={{marginTop: 20, paddingRight: 0, marginBottom: 30, borderColor: color.primary+20, borderWidth: 2, borderRadius: 12, flexDirection: 'row'}}>
    
      <Circle>
        <AntDesign style={{alignSelf: 'center'}} name="user" size={38} color={color.primary} />
      </Circle>        
      
      <Column style={{marginTop: 24, marginLeft: 10,}}>
        <UserTitle>{user?.name}</UserTitle>
        <UserLabel>{user?.email}</UserLabel>
      </Column>
      
      
    </View>
    </TouchableOpacity>
  )


    

  const SaveImovel = () => (
    <View style={{marginTop: 20, marginBottom: 30, borderColor: color.primary+20, borderWidth: 2, paddingVertical: 20, borderRadius: 12,}}>
    <Circle >
      <Ionicons style={{alignSelf: 'center'}} name="heart-outline" size={38} color={color.primary} />
    </Circle>        
    <Tips>Não encontramos nenhum imóvel salvo{"\n"}
    Clique sobre o botão de  <Ionicons name="heart-outline" size={16} style={{textAlign: 'center'}} color={color.label}/> {"\n"} para salvar um imóvel
    </Tips>

    <Column style={{marginHorizontal: 20, marginBottom: 20,}}>
    
      <Button color="#5B72F2" onPress={() => navigation.navigate('TabNavigator', {screen: 'Feed'})}>
        <>
        <ButtonLabel>Ver imóveis</ButtonLabel>
        <ButtonIcon/>
      <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>
    </Column>
  </View>
  )

 

return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
  


     
      <Column style={{marginHorizontal: 20, paddingTop:30}}>  
        {login && <Profile/>}    
        {!login && <IsLogin/>}
      
        <SubTitle>Meus imóveis</SubTitle>
        {imovelExist && <FlatList
            style={{marginHorizontal: -20, marginTop:10,}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={userItens}
            ListHeaderComponent={() => <View style={{width: 20, height: 20,}}/>}
            ListFooterComponent={() => <View style={{width: 20, height: 0,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.ID}
          />}

        {!imovelExist && <AddImovel/>}


        <SubTitle style={{marginTop: 20,}}>Imóveis salvos</SubTitle>
       {imovelSaves && <FlatList
            style={{marginHorizontal: -20, marginTop:10,}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={saves}
            ListHeaderComponent={() => <View style={{width: 20, height: 20,}}/>}
            ListFooterComponent={() => <View style={{width: 20, height: 0,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.ID}
          />}

          
        {!imovelSaves && <SaveImovel/>}



      <Spacing/>
      </Column>
      
  </Wrapper>


  <Modalize ref={modalizeRef} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
    <View style={{marginHorizontal: 20,}}>

    <Spacing/>
    <Title>O que deseja fazer?</Title>
    <Button color="#5B72F2" onPress={() => handleLogout()}>
        <>
        <ButtonLabel>Ver perfil</ButtonLabel>
        <ButtonIcon/>
      <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>
      
      
      <Button color="#5B72F2" onPress={() => handleLogout()}>
          <>
          <ButtonLabel>Fazer Logout</ButtonLabel>
          <ButtonIcon/>
          <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
          </>
      </Button>

    </View>
  </Modalize>

  
  </Main>
  )
}