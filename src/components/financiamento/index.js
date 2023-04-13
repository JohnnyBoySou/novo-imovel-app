
import React, {  } from 'react';
import { View,  ImageBackground, TouchableOpacity } from 'react-native';


import { FontAwesome5 } from '@expo/vector-icons';


import { TouchableRipple,  } from 'react-native-paper';

import { 
  Title, 
  Label,
} from './styles';


export default function Financiamento({ navigation, route, ...props } ) {

  
return (
  <View>  
    <TouchableOpacity onPress={() => navigation.navigate('Financiar')} style={{borderRadius: 8}}>
        <View style={{width: 44, height: 44, backgroundColor: "#5B72F2", borderRadius: 4, justifyContent: 'center', marginBottom: 10,}}>
          <FontAwesome5 name="money-bill-wave" size={24} color="#F1F3FF" style={{ textAlign: 'center'}} /> 
        </View>

        <Title>Financiamos para você!</Title>
        <Label>Conheça os financiamentos disponíveis para conquistar seu imóvel!</Label>
     
    </TouchableOpacity>
  </View>
)}