
import React, { useContext } from 'react';
import { View,  TouchableOpacity } from 'react-native';


import { AntDesign } from '@expo/vector-icons';

import { 
  Title, 
  Label,
  Icon,
  Bt,
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components/native';

export default function Saves({ }) {

  const { color, opacity } = useContext(ThemeContext)
  const navigation = useNavigation();

return (
  <View style={{borderTopColor: color.primary+20, borderTopWidth: 2, marginTop: 10,
  paddingTop: 20,}}>
  <View style={{borderWidth: 2, paddingBottom: 20, marginBottom: 40, paddingTop: 20, borderColor: color.primary+20, borderRadius: 12, marginHorizontal: 24,}}>  
    <TouchableOpacity onPress={() => navigation.navigate('Save')} >
      
        <Icon>
          <AntDesign name="heart" size={38} style={{textAlign: 'center'}} color={color.primary} />     
        </Icon>

        <Title>Seus imóveis salvos!</Title>
        <Label>Veja seus imóveis salvos e inicie a negociação.</Label>
      <Bt>VER SALVOS </Bt>
         
    </TouchableOpacity>
  </View>
  </View>
)}