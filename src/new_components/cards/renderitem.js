import React, { useState, useRef, useContext, useCallback, useEffect }  from 'react';
import { ThemeContext } from 'styled-components/native';

import { View, Text, Dimensions, ImageBackground , Animated, TouchableOpacity } from 'react-native';
import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';


import { TouchableRipple,   } from 'react-native-paper';

import { Chip, Description, Title, Address, Valor, OfertaBlock, Ofertas, ID, IDLabel , 

Expand, 
Gallery,
GalleryImg,
GalleryBt,



} from './styles'

import { MaterialIcons, Fontisto } from '@expo/vector-icons'; 







const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RenderItem({ route, ...props }){

  const item = props?.data
  const itemWidth = props?.itemWidth;
  const itemHeight = props?.itemHeight;

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)
  const ofertas = item?.length  

  const largura = 0.7 * itemWidth;
  const altura = 0.7 * height;
  const altura2 = 0.7 * itemHeight;

  
  const pegarPost = (item) => {
      navigation.navigate('Details', { dados: item, });};

  const [linkImg, setLinkImg] = useState(item?.imagem1)
  const [indexImg, setIndexImg] = useState(1)
  const [img1, setImgLink1] = useState(true)
  const [img2, setImgLink2] = useState(false)
  const [img3, setImgLink3] = useState(false)


  function setImg1(){
    setLinkImg(item?.imagem1)
    setIndexImg(1)
    toggleAniamtionState.transitionTo('closed')
    setToggleIsOpen(!toggleIsOpen)
    setImgLink1(true)
    setImgLink2(false)
    setImgLink3(false)

  }

  
  function setImg2(){
    setLinkImg(item?.imagem2)
    setIndexImg(2)
    toggleAniamtionState.transitionTo('closed')
    setToggleIsOpen(!toggleIsOpen)
    setImgLink1(false)
    setImgLink2(true)
    setImgLink3(false)
  }

  
  function setImg3(){
    setLinkImg(item?.imagem3)
    setIndexImg(3)
    toggleAniamtionState.transitionTo('closed')
    setToggleIsOpen(!toggleIsOpen)
    setImgLink1(false)
    setImgLink2(false)
    setImgLink3(true)
  }

  const scroll = props.scroll
  

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  useEffect(() => {
      setScrollY(scroll)      
    })


  
  const alturametade = altura / 2

  
  return(

    <View
      style={{
        borderRadius: 12,
        width: itemWidth,
        alignItems: 'center',
      }}
      
      >
      <>

    <TouchableRipple onPress={() => pegarPost(item)}  style={{borderRadius: 12, height: altura2, }} rippleColor="#FFF" borderless={true}>


      <ImageBackground source={{uri: linkImg}} resizeMode="cover" style={{ width: 0.76 * itemWidth, height: altura2, }}
      imageStyle={{borderRadius: 12,}}>
      
      <Chip>      
        <>
         {item?.tipo == "Ambos" && 
        <Valor>R$ {item?.valor_mensal} / R$ {item?.valor_unico}</Valor> }
        {item?.tipo != "Ambos" && 
        <Valor>R$ {item?.valor_mensal}{item?.valor_unico}</Valor> }
        
        </>
      </Chip>

      </ImageBackground>
      
      </TouchableRipple>
      
      <Description style={{width:largura}}>
        <Title>{item?.nome} </Title>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}><Fontisto name="map-marker-alt" size={16} color="#5B72F2" style={{marginTop: 5, marginRight: 6,}} />
        
        <Address>{item?.rua}, {item?.numero} - {item?.bairro}</Address></View>
        <ID><IDLabel>#{item?.ID}</IDLabel></ID>
      </Description>      
    </>
  </View>

  )
}




