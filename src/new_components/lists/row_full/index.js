
import React, { useState, useRef, useContext, useCallback }  from 'react';
import { ThemeContext } from 'styled-components/native';

import { View, Text, Dimensions, ImageBackground, FlatList , SafeAreaView } from 'react-native';

import { NavigationContainer, useFocusEffect, useNavigation, useIsFocused  } from '@react-navigation/native';


import { TouchableRipple,   } from 'react-native-paper';

import { Chip, Description, Title, Address, Valor, OfertaBlock, Ofertas, ID, IDLabel,

HeadLine,
More,
Div,


Img,
Tag,
Toast,
ToastLabel,
Spacing,

Input,
InputButton,
InputLabel,
InputTitle,

Icon,
 } from './styles'

import { Ionicons, Fontisto , MaterialIcons, Feather } from '@expo/vector-icons';
import { Column, Row } from '../../../theme/global'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function RowFull({ route, ...props }){

  const item = props?.data
  const direction = props?.direction 


  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)
  
  const { color, opacity } = useContext(ThemeContext)



  return(
  <>
   <View style={{borderWidth: 2, borderColor: color.border, borderRadius: 6, width: 0.8 * width, }}>
     
    <TouchableRipple onPress={() =>  navigation.push('Details', { dados: item, })} 
      style={{borderRadius: 6, flexDirection: 'row', justifyContent: 'space-between', }} rippleColor="#FFF" borderless={true}>


      <Column style={{width: "100%"}}>
     
        <Img source={{uri: item.imagem1}} resizeMode="cover"/>
      
        <Description>
        <Row style={{justifyContent: 'space-between'}}>
          <Column>
            <View>
              <InputLabel>Por mês</InputLabel>
              <InputTitle>R$ {item.valor_mensal}{item.valor_unico}</InputTitle>
            </View>    
          <Row>
          <Fontisto name="map-marker-alt" size={16} color="#5B72F2" style={{marginTop: 5, marginRight: 8,}} />
            <Address>{item.bairro}</Address>
          </Row>
          
          </Column>

        

        <Column>
        

          <Row style={{flexDirection: 'row', marginTop: 10,}}>
            <Toast>
              <Column>
                <Icon source={require('../../../assets/bed.png')} />
                <ToastLabel>{item.qtd1}</ToastLabel>
              </Column>
            </Toast>

            
            <Toast>
              <Column>
                <Icon source={require('../../../assets/bath.png')} />
                <ToastLabel>{item.qtd2}</ToastLabel>
              </Column>
            </Toast>

            <Toast>
              <Column>
                <Icon style={{width: 26.4,}} source={require('../../../assets/regua.png')} />
                <ToastLabel>{item.area}m²</ToastLabel>
              </Column>
            </Toast>

          </Row>
        </Column>

      </Row>
        
      </Description>    

      </Column>
    </TouchableRipple>
  </View>

    {direction == "horizontal" && <Spacing/>}
    {direction == "vertical" && <><Spacing/><Spacing/></>}
</>
  )
}




