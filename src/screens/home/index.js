
import React, { useEffect, useState, useRef, useContext } from 'react';
import { View, Animated, FlatList, 
 BackHandler, Dimensions, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import { Ionicons, Fontisto , MaterialIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



//import Internet from '../../components/internet/index';
//import AwaitLoad from '../../components/awaitload/index';
import { Modalize } from 'react-native-modalize';

import { useFocusEffect, useIsFocused  } from '@react-navigation/native';


//import Additional  from '../../new_components/additional/index'



import QuickImobil from '../../new_components/quick_imobil/index'
import QuickSlider from '../../new_components/quick_slider/index'

import { Title, 
Local, 
LocalText,
LocalLabel,
Main,

Modal,
Name,
Bt, 
BtLabel,

Spacing,
Button,
ButtonIcon,
ButtonLabel,

Item1, Item1Label,
Item1Title,

OfertasBlock,
Ofertas,

LabelBt,

} from './styles';


import Days from '../../components/days/index';


//import Axios from 'axios';
//import { Skeleton } from '@motify/skeleton'
//import { Carousel, Pagination } from 'react-native-snap-carousel';
import { ThemeContext } from 'styled-components/native';



//import Cards from '../../new_components/cards/index';
 // {loading == false && <Cards data={data} renderItem={renderItem} /> }

import RenderItem from '../../new_components/cards/renderitem';
import QuickAction from '../../new_components/quick_action/index'
import ForYou from '../../new_components/for_you/index';
import Price from '../../new_components/price/index';
import Bairro from '../../new_components/bairro/index';

import { requestFeed , requestAll, requestPreferences, requestPrice } from '../../api/request/mobile';


export default function Home({ navigation, route, ...props }) {

  
  const { color, opacity } = useContext(ThemeContext)
 

  const [data, setData] = useState()
  const [dataTudo, setDataTudo] = useState()
  const [dataPrice, setDataPrice] = useState()
  const [loading, setLoading] = useState(false) 
  const [loadingTudo, setLoadingTudo] = useState(true)

  const isFocused = useIsFocused ();

  const reload = route.params?.reload


  const [preferences, setPreferences] = useState()
  const [feed, setFeed] = useState([])
  const [all, setAll] = useState([])
  const [price, setPrice] = useState([])

  
  const [loadingFeed, setLoadingFeed] = useState(false) 
  const [loadingPrice, setLoadingPrice] = useState(true) //aed
  const [loadingAll, setLoadingAll] = useState(false)

  

  function getPreferences(){
    requestPreferences().then(
      function(response, ) {
        if(response){
          setPreferences(response)
          getFeed(response)
          getPrice(response)
          getAll(response)
        }
      })
  }



  function getFeed( value ){
    setLoadingFeed(true)
    requestFeed().then(
      function(response, ) {
        if(response){
          setFeed(response)
          setLoadingFeed(false)
          return
        }})
    setLoadingFeed(false)
  }



  function getPrice( value ){
    setLoadingPrice(true)
    requestPrice( value ).then(
      function(response, ) {
        if(response){
          setPrice(response)
          setLoadingPrice(false)
          return
        }})
    setLoadingPrice(false)
  }


  function getAll( value ){
    setLoadingAll(true)
    requestAll( value ).then(
      function(response, ) {
        if(response){
          setAll(response)
          setLoadingAll(false)
          return
        }})
    setLoadingAll(false)
  }


  useEffect(() => {
    getPreferences()

   
  }, [isFocused])




  
  const ofertas = data?.length
  const largura = 0.7 * width;
  const altura = 0.67 * height;
  const altura2 = 0.48 * height;

  const pegarPost = (item) => {navigation.navigate('DetailsDois', { dados: item, });};

  const cidade = preferences?.cidade
  const modalizeRef = useRef(null)

  const modalizeQuick = useRef(null)
  const modalizeBairro = useRef(null)

  const modalizePreferences = useRef(null)

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };


  
  const [toggleIsOpen, setToggleIsOpen] = useState(false)
  function handleOpenToggle(){
   setToggleIsOpen(!toggleIsOpen)    
  }

  const modalizeClose = useRef(null);
   
  const onCloseA = () => {
    modalizeClose.current?.open();
  };
   
  const onCloseAClose = () => {
    modalizeClose.current?.close();
  };
  
  exit()
  function exit() {
    useFocusEffect(
      React.useCallback(() => {
        const handleBackPress = () => {
          onCloseA()
          return true;
        };
        BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      }, []),
    );
  }


  const regx = preferences?.item1.slice(6)
  const item = regx?.slice(0, regx.length - 1)


  const a = false;


 const [scrollY, setScrollY] = useState(new Animated.Value(0));



 const scrollMain = useRef()

 useEffect(() => {
   onPressTouch()
 }, [])

 const openBairro = () => {
   modalizeBairro.current?.open()
 }


  const onPressTouch = () => {
    
    if(scrollY <= 100)
    scrollMain.current?.scrollTo({
      y: 200,
      animated: true,
  });
}

  function viewDataTudo(){
    setData(dataTudo)
    scrollMain.current?.scrollTo({ y: 0,
      animated: true,
  });
  }
 

  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(data);
  const isCarousel = useRef();



  
  const renderItem2 = ({ item }) => (
    <><RenderItem data={item}  scroll={scrollY} itemWidth={width} itemHeight={altura}/></>
  ) 

  
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const alturametade = altura / 2


  const notFound = () => {
    <>{ofertas == 0 && <View style={{marginHorizontal: 24,}}>
      <Image source={require('../../assets/404.png')}  style={{width: 200, height: 200, alignSelf: 'center'}}/>


      <Title>Não conseguimos encontrar nada. Tente mudar seu feed</Title>

      <Button color="#5B72F2" off={false} onPress={() => navigation.navigate('Mapa')}>
          <>
            <ButtonLabel off={false}>Voltar</ButtonLabel>
            <ButtonIcon off={false}/>
            
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowleft" size={28} color="#FFF" />

          </>
        </Button>
    </View>}</>
  }


return (
  <Main>

  <Animated.ScrollView  scrollEventThrottle={16}  ref={scrollMain}  
  //stickyHeaderIndices={[1]} 
     onScroll={Animated.event([{
       nativeEvent: {
         contentOffset: { y: scrollY }
       },
     }],
     { useNativeDriver: false })}
     >


    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: color.background, paddingBottom: 10, 
     borderBottomColor: color.border, borderBottomWidth: 2, zIndex: 9999,}}>
  
  
      <Local onPress={() => navigation.navigate('Mapa', {voltar: true, data: preferences,})}>
        <>
        { loading == false && 
        <View>
          <View style={{flexDirection: 'row'}}>
            <LocalLabel>Localização</LocalLabel><MaterialIcons name="keyboard-arrow-down" style={{marginTop: -3,}} size={24} color={color.label} />
          </View>
          <View style={{flexDirection: 'row'}}>
          <Fontisto name="map-marker-alt" size={20} color={color.primary} style={{marginTop: 2,}} />
            <LocalText>{cidade}</LocalText>
          </View>
        </View>}
        </>
      </Local>

      <TouchableOpacity rippleColor={color.primary} borderless={true} style={{position: 'absolute', top: 20, right: 92, 
        backgroundColor: "#FFF", borderRadius: 6, height: 50, width: 52, 
      justifyContent: 'center',}} onPress={() => navigation.navigate('Notify')}>
        <View>
          <Ionicons name="notifications-outline" size={26} color="#144B74" style={{textAlign: 'center',}} />
          <View style={{position: "absolute", top: 0, right: 14, backgroundColor: "#5B72F2", width: 12, height: 12, 
          borderRadius: 12, borderColor: "#FFF", borderWidth: 2,}} />
        </View>
      </TouchableOpacity>


    
    <TouchableOpacity rippleColor={color.primary} borderless={true} style={{position: 'absolute', top: 20, right: 24, 
    backgroundColor: color.primary, borderRadius: 8, height: 50, width: 52, justifyContent: 'center',}} 
    onPress={() => modalizePreferences.current?.open()}>
        <View>
          <Image source={require('../../assets/filter.png')} style={{width: 24, height: 24, alignSelf: 'center', }}/>
        </View>
    </TouchableOpacity>
    
  </View>

  

  <View style={{flex: 1, marginTop: 30,}}>
   {loading == false && <>{notFound}</> }

    

  {!loading && 
  <View style={{flexDirection: 'row', alignSelf: 'center', 
  marginBottom: 20, marginTop: -15, justifyContent: 'center'}}>
  <Ofertas>Melhores ofertas</Ofertas><OfertasBlock>{data?.length}</OfertasBlock></View>}

  </View>
  
  {loading == false && <Animated.View
      style={{
        borderRadius: 12,
        alignItems: 'center',
        height: scrollY.interpolate({
           inputRange:[200, 400, 600],
           outputRange: [altura, alturametade, 100],
           extrapolate: 'clamp'
         }),

        opacity: scrollY.interpolate({
           inputRange:[100, 300, 600],
           outputRange: [1, 0.5, 0],
           extrapolate: 'clamp'
         }),
        transform: [{ scale: scrollY.interpolate({
            inputRange:[100, 300, 600],
           outputRange: [1, 0.6, 0],
           extrapolate: 'clamp'
         }), },]}}>
  
          <FlatList
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], 
            {useNativeDriver: false,})}
            decelerationRate={'normal'}
            scrollEventThrottle={16}
            horizontal={true} 
            pagingEnabled={true}
            data={data}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
          />
          </Animated.View>}

  {loadingTudo == false && 
  <><ForYou data={dataTudo} /></>}
  {loadingPrice == false && <Price data={dataPrice} value_max={preferences.valor_max} />}


  <QuickImobil/>
  <QuickSlider/>
    
  {loading == false && <><Bairro />
   <TouchableOpacity onPress={openBairro} style={{backgroundColor: color.off, borderRadius: 6, 
   paddingHorizontal: 12, paddingVertical: 10, marginHorizontal: 20, marginTop: -20, marginBottom: 20,}}>
      <LabelBt>Mostrar mais</LabelBt>      
    </TouchableOpacity></>}
   


  </Animated.ScrollView>
    <Modalize ref={modalizeClose} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
      <Modal>
      <View style={{width: "100%",}}>
      <Image source={require('../../assets/exit.png')} style={{width: 100, height: 100, alignSelf: 'center', marginBottom: 10,}}/>
        <Name>Tem certeza que deseja sair?
Sentiremos sua falta.</Name>
        <View style={{flexDirection: 'row', flexGrow: 1,marginTop: 20, }}>
          <Bt bgColor={color.off} onPress={() => BackHandler.exitApp()}>
            <BtLabel style={{color: color.primary}}>Sim</BtLabel>
          </Bt>
          <Spacing/>
          <Bt onPress={() => onCloseAClose()} bgColor={color.primary}>
            <BtLabel>Não</BtLabel>
          </Bt>
        </View>
      </View>
      </Modal>
    </Modalize>



     <Modalize ref={modalizePreferences} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
      <Modal>

      <View style={{width: "100%", paddingBottom: 20,}}>

      <Title style={{textAlign: 'left', }}>Meu Feed</Title>
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



        <Item1 onPress={() => navigation.navigate('Valor', {voltar: true, data: preferences, })}>
          <>
          <View>
            <Item1Title>Valor</Item1Title>
            <Item1Label>R$ {preferences?.valor_max}</Item1Label>
          </View>
          </>
        </Item1>


        <Item1 onPress={() => navigation.navigate('Visitar', {voltar: true, data: preferences, })}>
          <>
          <View>
            <Item1Title>Visitação</Item1Title>
            <Days preferences={preferences} />
          </View>
          </>
        </Item1>

        





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



    
     <Modalize ref={modalizeQuick} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
        <Modal>
          <QuickAction/>
        </Modal>
     </Modalize>


     
     <Modalize ref={modalizeBairro} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">        
      <Bairro open={true}/>
      <View style={{width: 20, height: 30}}/>
     </Modalize>

  </Main>
  )
}