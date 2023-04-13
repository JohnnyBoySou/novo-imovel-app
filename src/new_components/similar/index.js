import React, { useContext , useState, } from 'react';
import { Animated, TouchableOpacity, FlatList} from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { 
  Container, 
  Line,
  Title,
  Label,
  Hr,
  View,
  Image,

} from './styles';
import ListH2 from '../../new_components/lists/row_small';
import { Row, Column} from '../../theme/global'
import { Surface, TouchableRipple } from 'react-native-paper';

import {ExpandingDot} from "react-native-animated-pagination-dots";

const Similar = ( props ) => {
  
  const item = props?.data
  const { color } = useContext(ThemeContext)
  const quickItem = [item[1] , item[2] , item[3]]
  const scrollX = React.useRef(new Animated.Value(0)).current;
    
  const DATA_IMAGES = [
    {item: item[0], url: item[0].imagem1, categoria: item[0].categoria, valor_mensal: item[0].valor_mensal, valor_unico: item[0].valor_unico, },
    {item: item[1], url: item[1].imagem1, categoria: item[1].categoria, valor_mensal: item[1].valor_mensal, valor_unico: item[1].valor_unico, },
    {item: item[2],url: item[2].imagem1, categoria: item[2].categoria, valor_mensal: item[2].valor_mensal, valor_unico: item[2].valor_unico, },
    ]


  const Card = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { dados: item?.item, }) }>
    <Column style={{ width: 240,  borderRadius: 12, marginLeft: 24,}}>    
      <View>
        <Image style={{width: 240, height: 160, marginLeft: 20,}} source={{uri: item?.url}} />   
        <Title>{item?.categoria} por R$ {item?.valor_mensal},00</Title>
      </View>
    </Column>
     </TouchableOpacity>
    )

  return (
    
    <Container>    
      <Title style={{marginLeft: 0, marginTop: 10,}}>Recomendações</Title>
      <FlatList  
         style={{ marginLeft: -24, marginRight: -24, marginTop: 10,}}
        data={DATA_IMAGES} 
        keyExtractor={item => item.key} 
        showsHorizontalScrollIndicator={false}  
        horizontal 
        ListFooterComponent={<View style={{width: 40}}/>}
        decelerationRate={'normal'} 
        renderItem={Card}/>


    </Container>
  );
};

export default Similar;