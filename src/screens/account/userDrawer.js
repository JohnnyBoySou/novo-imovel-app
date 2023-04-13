import { useState, useContext } from 'react'; 
import { View, Text, ActivityIndicator } from 'react-native';
import { Feather, AntDesign, Fontisto, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  BtIcon,
  UserTitle,
  UserImg,
  UserBack,
  UserLabel,
  Button,
  ButtonIcon,
  ButtonLabel,
  UserLogin,
  UserSubTitle,
  Spacing,
  LocalLabel,
  Bt,
  BtLabel
} from './styles';

import { Column, Row } from '../../theme/global';
import { ThemeContext } from 'styled-components/native';

export default function UserDrawer(){

  const { color } = useContext(ThemeContext)

  const [loading, setLoading] = useState(false);
  //https://s2hentais.com/novoimovel/wp-json/user/lenght?id=1
  return (
    <View style={{backgroundColor: "#fff", paddingBottom: 50,}}>
    
    <UserBack source={require('../../assets/back_profile.png')} />
      <Column style={{marginHorizontal: 20,}}>
      
      <Row style={{marginTop: -50, justifyContent: 'space-between',}}>
      <UserImg source={require('../../assets/suff.png')} />
      
      <Bt>
        <BtLabel>Editar</BtLabel>
      </Bt>
      </Row>

      <UserTitle>João Sousa</UserTitle>
      <UserLogin>@sousa21</UserLogin>



      <Row style={{marginTop: 10,}}> 
      <Row>
          <Fontisto name="map-marker-alt" size={14} color="#5B72F2" style={{marginTop: 2, marginRight: 6,}} />
          <LocalLabel>Jaraguá do Sul</LocalLabel>
      </Row>

      <Row style={{marginLeft: 30}}>
        <MaterialCommunityIcons name="home-city-outline" size={18} style={{marginRight: 5,}} color={color.primary} />
        <LocalLabel>12 imóveis</LocalLabel>
      </Row>
      </Row>
      <Spacing/> 
      <UserSubTitle>Sobre</UserSubTitle>
      <UserLabel>João é capaz de encontrar clientes interessados em imóveis e oferecer-lhes um serviço personalizado e de alta qualidade. Ela está sempre em busca de novas oportunidades para seus clientes e procura sempre oferecer o melhor serviço possível.</UserLabel>
    
      <Row style={{marginTop: 20,}}>
        <Ionicons name="enter-outline" size={18} style={{marginRight: 8,}} color={color.primary} />
        <UserLabel>Entrou em 12 de junho.</UserLabel>
      </Row>
      </Column>
      </View>
  );
};
