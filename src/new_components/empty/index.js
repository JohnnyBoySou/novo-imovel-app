import React from 'react'
import { View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {Title, Button, ButtonLabel, ButtonIcon } from './styles'

import { ThemeContext } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


export default function Empty({   }){
  const { color, font } = React.useContext(ThemeContext)
  const navigation = useNavigation();
  return( <View style={{marginHorizontal: 24, marginBottom: -10,}}>
    <Image source={require('../../assets/404.png')}  style={{width: 100, height: 100, alignSelf: 'center'}}/>
    <Title>Não conseguimos encontrar <Title style={{fontFamily: font.medium}}>nenhum</Title> resultado. Tente <Title style={{fontFamily: font.medium}}>alterar</Title> suas preferências</Title>
    <Button color="#5B72F2" off={false} onPress={() => navigation.navigate('Mapa')}>
        <>
          <ButtonLabel off={false}>Preferências</ButtonLabel>
          <ButtonIcon off={false}/>
          
          <Image source={require('../../assets/filter.png')} style={{width: 20, height: 20 , marginRight: 30, marginTop: 4, marginLeft: -30,}}/>
      

        </>
      </Button>
  </View>
  )
}




