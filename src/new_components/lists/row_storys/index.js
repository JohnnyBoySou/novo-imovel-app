
import React, { useState, useContext }  from 'react';
import { ThemeContext } from 'styled-components/native';

import { View, Dimensions, TouchableOpacity, Image } from 'react-native';

import { useNavigation  } from '@react-navigation/native';


import { TouchableRipple,   } from 'react-native-paper';

import { Description, Address, 



Img,
Toast,
ToastLabel,
Spacing,

InputLabel,
InputTitle,

Icon,
 } from './styles'

import { Fontisto } from '@expo/vector-icons';
import { Column, Row } from '../../../theme/global'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RowStorys({ route, ...props }){

  const item = props?.data
  const direction = props?.direction 


  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)



  return(
    <TouchableOpacity style={{marginLeft: 20,}} onPress={() =>  navigation.push('Watch', { data: item, })} >
     
        <Image
          style={{width: 150, height: 200, borderRadius: 12,}} 
          source={{uri: item.imagem1}} 
          resizeMode="cover"/>
      
    </TouchableOpacity>
 
  )
}




