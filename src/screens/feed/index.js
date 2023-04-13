import "react-native-gesture-handler";
import React, { useEffect, useState, useRef, useContext } from 'react';
import { View,  Animated, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';

import { Ionicons, Entypo, AntDesign, SimpleLineIcons} from '@expo/vector-icons';
import { TouchableRipple,   } from 'react-native-paper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import Internet from '../../components/internet'

//import AwaitLoad from '../../components/awaitload/index';
import { Modalize } from 'react-native-modalize';

import { Wrapper, Title, 
Main,

Modal,

Button,
ButtonIcon,
ButtonLabel,

Item1, Item1Label,
Item1Title,


LabelBt,

Explore,
ExploreImg,
ExploreLabel,
ExploreTitle,
ExploreBt,
ExploreBtLabel,

NewTitle, B,
SplashImg,
UserGrad,
BtCard,
BtCardLabel,
} from './styles';

import Saves from '../../new_components/saves/index'
import Days from '../../components/days/index';
import { ThemeContext } from 'styled-components/native';

import QuickAction from '../../new_components/quick_action/index'

import FeedComponent from '../../new_components/feed/index';

import Price from '../../new_components/price/index';
import Bairro from '../../new_components/bairro/index';

import { Row, Column } from '../../theme/global'

import { requestFeed , requestAll, requestPreferences, requestPrice, requestUserEndpoint, requestUser } from '../../api/request/mobile';
import Lasted from "../../new_components/lasted";
import QuickCard from "../../new_components/quick_card";

export default function Feed({ navigation, route, ...props }) {
  
  const { color, opacity } = useContext(ThemeContext)
 
  const reload = route.params?.reload

  //Feed utiliza das preferencias, All pega tudo, Price apenas pelo preço, 


  const [preferences, setPreferences] = useState()
  const [feed, setFeed] = useState([])
  const [all, setAll] = useState([])
  const [price, setPrice] = useState([])
  const [user, setUser] = useState([])

  
  const [loadingFeed, setLoadingFeed] = useState(false) 
  const [loadingPrice, setLoadingPrice] = useState(true) //aed
  const [loadingAll, setLoadingAll] = useState(false)
  const [loading, setLoading] = useState(false)

  

  function getPreferences(){
    setLoading(true)
    console.log(true)
    requestUser().then(function(response){
      if(response){
        requestUserEndpoint(response.id).then(
          function(response, ) {
            if(response){
              setUser(response)
            }
          })
      }
    })
    requestPreferences().then(
      function(response, ) {
        
      console.log(response)
        if(response){
          setPreferences(response)
          getData(response)
        }
      })
  }


  function getData(value){
    setLoadingFeed(true)
    
    requestFeed(value).then(
      function(response, ) {
        if(response){
          console.log(response)
          setFeed(response)
          setLoadingFeed(false)
        }
      })
    
    setLoadingPrice(true)
    requestPrice(value).then(
      function(response, ) {
        
      console.log(response)
        if(response){
          setPrice(response)
          setLoadingPrice(false)
        }
      }) 

    setLoadingAll(true)
    requestAll(value).then(
      function(response, ) {
        if(response){
          setAll(response)
          setLoadingAll(false)
        }
      })

    setLoading(false)
  }

 

  useEffect(() => {
   getPreferences()
   getGreeting()
    }, [])



  const cidade = preferences?.cidade
  const modalizeNewToday = useRef(null)
  const modalizeQuick = useRef(null)
  const modalizeBairro = useRef(null)
  const modalizePreferences = useRef(null)

   
 // useEffect(() => {
   // BackHandler.addEventListener("hardwareBackPress",()=>{
     // BackHandler.exitApp();
    //});
  //}, []);


  const regx = preferences?.item1?.slice(6)
  const item = regx?.slice(0, regx.length - 1)

  const [saudacao, setSaudacao] = useState();
  const a = false;

  function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setSaudacao("Bom dia")
    } else if (hour >= 12 && hour < 18) {
      setSaudacao("Boa tarde")
    } else {
      setSaudacao("Boa noite")
    }
  }
 const scrollMain = useRef()

  const scrollHandle = ( param ) => {
    if(param === "recentes"){scrollMain.current?.scrollTo({x: 0,y: 940,animated: true,});}
    else if(param === "bairros"){scrollMain.current?.scrollTo({x: 0,y: 610,animated: true,});}
   else if(param === "ate"){scrollMain.current?.scrollTo({x: 0,y: 1140,animated: true,});}
  }
 
  const scrollX = React.useRef(new Animated.Value(0)).current;

  const NewToday = () => (
    <View style={{marginHorizontal: 24, marginVertical: 20,}}>

      
      <SplashImg style={{marginTop: 10,}}>
        <Image source={require('../../assets/bedroom.png')}  style={{width: 86, height: 86, marginTop: -20, alignSelf: 'center'}}/>
      </SplashImg>

      <Title>Recentes</Title>
      <NewTitle>Vamos procurar por <B>{item}</B> com <B>{preferences?.bedroom} quartos</B>, <B>{preferences?.bathroom} banheiros</B>, para <B>alugar</B> no valor de até <B>R$ {preferences?.valor_max}</B>.</NewTitle>


      
      <Button color="#5B72F2" disabled={false} onPress={() => {}} off={false}>
          <>
            <ButtonLabel off={false}>Pesquisar</ButtonLabel>
          
               <ButtonIcon off={false}/>
              <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="search1" size={28} color="#FFF" />
        
          </>
        </Button>

    </View>

  )

return (
  <Main>
    
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper scrollEventThrottle={64}  ref={scrollMain}  >

  <Internet/>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: color.background, paddingBottom: 10,  
     borderBottomColor: color.border, borderBottomWidth: 2, zIndex: 9999,}}>
      
      <Image source={require('../../assets/logo1.png')} style={{width: 64, height: 64, marginLeft: 20, marginTop: 10,}}/>

      <TouchableRipple rippleColor={color.primary} borderless={true} style={{position: 'absolute', top: 20, right: 82, 
        backgroundColor: "#FFF", borderRadius: 6, height: 44, width: 44, 
      justifyContent: 'center',}} onPress={() => navigation.navigate('Notify')}>
        <Column>
          <Ionicons name="notifications-outline" size={24} color="#144B74" style={{textAlign: 'center',}} />
          <View style={{position: "absolute", top: 0, right: 14, backgroundColor: "#5B72F2", width: 10, height: 10, borderRadius: 12, borderColor: "#FFF", borderWidth: 2,}} />
        </Column>
      </TouchableRipple>
    
    <TouchableRipple rippleColor={color.primary} borderless={true} style={{position: 'absolute', top: 20, right: 24, backgroundColor: color.primary, borderRadius: 8, height: 42, width: 44, justifyContent: 'center',}} 
    onPress={() => modalizePreferences.current?.open()}>
        <View>
          <Image source={require('../../assets/filter.png')} style={{width: 20, height: 20, alignSelf: 'center', }}/>
        </View>
    </TouchableRipple>
    
  </View>
    <Explore>
      
      <ExploreTitle>{saudacao}, <UserGrad>{user.display_name}</UserGrad></ExploreTitle>
    
      <ExploreLabel>Como está sendo sua procura por imóveis? Logo abaixo alguns botões para facilitar sua vida!</ExploreLabel>
  
      <Row>
        
        <ExploreBt onPress={() => scrollHandle('recentes')}>
          <ExploreBtLabel>Recentes</ExploreBtLabel>
        </ExploreBt>

        
        <ExploreBt onPress={() => scrollHandle('bairros')}>
          <ExploreBtLabel>Bairros</ExploreBtLabel>
        </ExploreBt>

        <ExploreBt onPress={() => scrollHandle('ate')}>
          <ExploreBtLabel>Até R$ {preferences?.valor_max}</ExploreBtLabel>
        </ExploreBt>

        

      </Row>
      <View style={{position: 'relative'}}>
        <Image style={{width: 132, position: 'absolute',  height: 145, right:-20, bottom: -20, zIndex: -99,}} source={require('../../assets/feed.png')}/>
      </View>
    </Explore>

  <FeedComponent data={feed} loading={loadingFeed} value_max={preferences?.valor_max}/>
 
    

  <Column>
    <Bairro />
    <TouchableRipple onPress={() => modalizeBairro.current?.open()} style={{backgroundColor: color.off, borderRadius: 6, 
      paddingHorizontal: 12, paddingVertical: 10, marginHorizontal: 20, marginTop: -20, marginBottom: 20,}}>
    <LabelBt>Mostrar mais</LabelBt>      
    </TouchableRipple>
  </Column>

  <Lasted data={all} navigation={props.navigation} loading={loadingAll} value_max={preferences?.valor_max}/>



    <Price data={price} loading={loadingPrice} value_max={preferences?.valor_max}/>
    <Saves navigation={props.navigation}/>


  </Wrapper>








    <Modalize ref={modalizePreferences} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
      <Modal>

      <View style={{width: "100%", paddingBottom: 20,}}>
      <Row style={{justifyContent: 'space-between',}}>
        <Title style={{textAlign: 'left',fontSize: 20, }}>Meu Feed</Title>
        <TouchableOpacity onPress={() => modalizePreferences.current?.close()}><AntDesign name="close" size={24} color={color.title}   /></TouchableOpacity>
      </Row>

        <Item1 onPress={() => navigation.navigate('Mapa', {voltar: true, data: preferences, })}>
          <>
          <View>
            <Item1Title>Localização</Item1Title>
            <Item1Label>{preferences?.cidade}</Item1Label>
          </View>
          </>
        </Item1>

        <Item1 onPress={() => navigation.navigate('Busca', {voltar: true, data: preferences, })}>
          <>
          <View>
            <Item1Title>Preferências</Item1Title>

            { preferences?.comprar && 

            <> 
              {item != "SalaComercial" && item != "CasaComercial"  && item != "PredioComercial" ? <Item1Label>Comprar, {item}</Item1Label> : <></>}
              {item == "CasaComercial" && <Item1Label>Comprar, Casa Comercial</Item1Label>}
              {item == "SalaComercial" && <Item1Label>Comprar, Sala Comercial</Item1Label>}
              {item == "PredioComercial" && <Item1Label>Comprar, Prédio Comercial</Item1Label>}
            </>}


            { preferences?.alugar && <>
                {item != "SalaComercial" && item != "CasaComercial"  && item != "PredioComercial" ? <Item1Label>Alugar, {item}</Item1Label> : <></>}
              {item == "CasaComercial" && <Item1Label>Alugar, Casa Comercial</Item1Label>}
              {item == "SalaComercial" && <Item1Label>Alugar, Sala Comercial</Item1Label>}
              {item == "PredioComercial" && <Item1Label>Alugar, Prédio Comercial</Item1Label>}
              </>}

          </View>
          </>
        </Item1>

        <Item1 onPress={() => navigation.navigate('Bathroom', {voltar: true, data: preferences, })}>
          <>
          <View>
            <Item1Title>Quartos e Banheiros</Item1Title>
            <Item1Label>{preferences?.bedroom} quartos e {preferences?.bathroom} banheiro</Item1Label>
          </View>
          </>
        </Item1>

        <Item1 onPress={() => navigation.navigate('Valor', {voltar: true, data: preferences, })}>
       
          <View>
            <Item1Title>Valor</Item1Title>
            <Item1Label>R$ {preferences?.valor_max}</Item1Label>
           </View>
        </Item1>

        {a &&
        <Item1 onPress={() => navigation.navigate('Visitar', {voltar: true, data: preferences, })}>
          
          <View>
            <Item1Title>Visitação</Item1Title>
            <Days preferences={preferences} />
          </View>
        </Item1>}

        
        <Button color="#5B72F2" off={false} onPress={() => modalizePreferences.current?.close()}>
          <>
            <ButtonLabel off={false}>Fechar</ButtonLabel>
            <ButtonIcon off={false}/>
           
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowdown" size={28} color="#FFF" />
           
          </>
        </Button>
      </View>
      </Modal>
    </Modalize>

     

{ a && <Modalize ref={modalizeQuick} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
        <Modal>
          <QuickAction/>
        </Modal>
     </Modalize>
}



    <Modalize ref={modalizeBairro} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">        
      <Bairro open={true}/>
      <View style={{width: 20, height: 30}}/>
     </Modalize>


     <Modalize ref={modalizeNewToday} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">        
   
     </Modalize>
    
     
  </Main>
  )
}