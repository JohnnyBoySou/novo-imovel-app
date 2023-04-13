import "react-native-gesture-handler";
import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { View, TouchableOpacity,  Animated, FlatList, ActivityIndicator, Text, ScrollView,
 ImageBackground, BackHandler, Dimensions, Image, } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

import { Ionicons, Fontisto , MaterialIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableRipple,   } from 'react-native-paper';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

//import Internet from '../../components/internet/index';
//import AwaitLoad from '../../components/awaitload/index';
import Item from '../../components/item/index';
//import { Modalize } from 'react-native-modalize';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';

import { Wrapper, Container, Title, 
Local, 
LocalText,
LocalLabel,
Profile,
Main,

Modal,
ProfileImg,
Name,
Email,
Bt, 
BtLabel,

Spacing,
Button,
ButtonIcon,
ButtonLabel,

Item1, Item1Label,
Item1Title,

CloseModal,
OfertasBlock,
Ofertas,

LabelBt,

} from './styles';

import Financiamento from '../../components/financiamento/index'

import Days from '../../components/days/index';


//import Axios from 'axios';
//import { Skeleton } from '@motify/skeleton'
//import { Carousel, Pagination } from 'react-native-snap-carousel';
import { ThemeContext } from 'styled-components/native';

import { API_URL } from '../../api/index';


//import Cards from '../../new_components/cards/index';
 // {loading == false && <Cards data={data} renderItem={renderItem} /> }

import RenderItem from '../../new_components/cards/renderitem';
import QuickAction from '../../new_components/quick_action/index'
import RowSmall from '../../new_components/lists/row_small/index';
import RowLarge from '../../new_components/lists/row_large/index';
import ForYou from '../../new_components/for_you/index';
import Price from '../../new_components/price/index';
import Bairro from '../../new_components/bairro/index';

import Imoveis from '../../api/imoveis.json';

import { Row, Column} from '../../theme/global'

import { requestFeed , requestAll, requestPreferences, requestPrice } from '../../api/request/mobile';


export default function Explore({ navigation, route, ...props }) {
  
  const { color, opacity } = useContext(ThemeContext)
 

  const [data, setData] = useState(Imoveis)
  const [dataTudo, setDataTudo] = useState(Imoveis)
  const [dataPrice, setDataPrice] = useState()
  const [loading, setLoading] = useState(false) 
  const [loadingTudo, setLoadingTudo] = useState(true)

  const isFocused = useIsFocused();

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



  useEffect(() => {
    getPreferences()
  }, [reload])




  
  const ofertas = data?.length

  const largura = 0.7 * width;
  const altura = 0.67 * height;
  const altura2 = 0.48 * height;


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

  <Wrapper  scrollEventThrottle={16}  ref={scrollMain}  
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
        <Column>
          <Row>
            <LocalLabel>Localização</LocalLabel>
            <MaterialIcons name="keyboard-arrow-down" style={{marginTop: -3,}} size={18} color={color.label} />
          </Row>
          <Row>
          <Fontisto name="map-marker-alt" size={18} color={color.primary} style={{marginTop: 2,}} />
            <LocalText>{cidade}</LocalText>
          </Row>
        </Column>
      </Local>

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

  

  <View style={{flex: 1, marginTop: 30,}}>
    <Row style={{alignSelf: 'center', marginBottom: 20, marginTop: -15, justifyContent: 'center'}}>
      <Ofertas>Melhores ofertas</Ofertas>
      <OfertasBlock>{data?.length}</OfertasBlock>
    </Row>

  </View>
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
        </Wrapper>
      </Main>
  )
}