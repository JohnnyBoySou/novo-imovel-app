
import React, {  useContext, useRef, useState , useEffect }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { View, Animated , FlatList, ScrollView  } from 'react-native';
import { useNavigation  } from '@react-navigation/native';
import { TouchableRipple, } from 'react-native-paper';
import { 
Description, 
Address, 
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
import { ExpandingDot } from "react-native-animated-pagination-dots";
import Like from '../../like';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function RowFlow({ route, ...props }){

  const item = props?.data
  const disabled = props?.disabled
  const direction = props?.direction 
  const { color } = useContext(ThemeContext)
  const navigation = useNavigation();

  const br = item?.bairro
  const regex = /^.{1,7}(?=\s|$)/;
  const [bairro, setBairro] = useState(br);

  useEffect(() => {
    if (br?.length > 7) {
      const valueUnclean = br.replace(regex, '$&...');
      const value = valueUnclean.replace(/\s\S+$/, '');
      setBairro(value)
    }  
  }, [])
  
  const imgs = [ item?.imagem1, item?.imagem2, item?.imagem3, ]  
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleClick = ( value ) => { 
    if(disabled){
      return
    }else{
      navigation.push('Details', { dados: item, })
    }
   }

  return(
  <>
   <View style={{borderWidth: 2, width: 328, borderColor: color.border, borderRadius: 6, backgroundColor: color.light }}>
    <Column >
     
    <TouchableOpacity onPress={handleClick}>
    <View style={{position: 'relative',}}>

      <View style={{position: 'absolute', top: 0,}}> 
        <Like codigo={item.ID} type/>
      </View>
      
      <ScrollView 
        horizontal
        onTouchStartCapture={() => true}
        style={{width: 324, }} 
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }],{useNativeDriver: false,})}
        pagingEnabled decelerationRate={'normal'} 
        scrollEventThrottle={16} 
        showsHorizontalScrollIndicator={false} >  
      {item?.imagem1 != undefined && <Img source={{uri: item?.imagem1}} resizeMode="cover" /> }
      {item?.imagem2 != undefined && <Img source={{uri: item?.imagem2}} resizeMode="cover" /> }
      {item?.imagem3 != undefined && <Img source={{uri: item?.imagem3}} resizeMode="cover" /> }
      </ScrollView>

      <ExpandingDot
      style={{width: 324,}}
      data={imgs}
      expandingDotWidth={20}
      scrollX={scrollX}
      inActiveDotOpacity={0.5}
      activeDotColor={color.primary}
      inActiveDotColor="#000"
      dotStyle={{width: 8, height: 8, backgroundColor: color.primary, borderRadius: 5, marginHorizontal: 5}}
      containerStyle={{bottom:20,}}  
      /> 


        </View>
        
        <Description>
        <Row style={{justifyContent: 'space-between'}}>
          <Column>
            <View>
              <InputLabel>Por mês</InputLabel>
              <InputTitle>R$ {item.valor_mensal}{item.valor_unico}</InputTitle>
            </View>    
          <Row>
          <Fontisto name="map-marker-alt" size={16} color="#5B72F2" style={{marginTop: 5, marginRight: 8,}} />
            <Address>{bairro}</Address>
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
      </TouchableOpacity>

      </Column>
  </View>
</>
  )
}




