import React, { useState, useContext }  from 'react';
import { ThemeContext } from 'styled-components/native';

import { View, Text, Dimensions } from 'react-native';

import { useNavigation  } from '@react-navigation/native';


import { TouchableRipple,   } from 'react-native-paper';

import { Description, Title, Address, 

Img,
Tag,

 } from './styles'

import { Fontisto } from '@expo/vector-icons';



const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RowSmall({ route, ...props }){

  const item = props?.data

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  const { color, opacity, font } = useContext(ThemeContext)

  return(
   <View style={{marginLeft: 18, borderWidth: 2, height: 94, borderColor: color.border, borderRadius: 8 }}>
     

    <TouchableRipple  onPress={() => navigation.push('Details', { dados: item, })}  style={{borderRadius: 6, flexDirection: 'row', justifyContent: 'center', }} 
    rippleColor="#FFF" borderless={true}>
      <> 
      <Img source={{uri: item?.imagem1}} resizeMode="cover"/>
      <Description>
        <Tag>{item?.categoria}</Tag>
        <Title>R$ {item.valor_mensal}{item.valor_unico}</Title>
        <View style={{flexDirection: 'row', width: 100,}}>
          <Fontisto name="map-marker-alt" size={16} color="#5B72F2" style={{marginTop: 5, marginRight: 8,}} />
          <Address>{item?.bairro}</Address>
        </View>
        
      </Description>      


      <View style={{justifyContent: 'center', marginRight: 10,}}>
      <View style={{backgroundColor: color.primary, borderRadius: 8,  width: 52, height: 52, justifyContent: 'center', }}>
        <Text style={{fontFamily: font.medium, fontSize: 28, color: "#fff" , textAlign: 'center',  }}>
        {item?.qtd1}</Text>
        </View>
        <Text style={{fontFamily: font.medium, fontSize: 16, color: color.primary, textAlign: 'center', marginTop: 4, alignSelf: 'center', marginRight: 10,}}>{item?.item1}s</Text>
      </View>


      </>
    </TouchableRipple>
  
  </View>

  )
}




