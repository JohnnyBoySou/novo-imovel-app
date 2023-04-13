
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View,  Text, Dimensions, Image, StatusBar, ScrollView, FlatList, SafeAreaView } from 'react-native';

import { Ionicons, Fontisto , MaterialIcons, Feather, AntDesign } from '@expo/vector-icons';

import { NavigationContainer, useFocusEffect, useNavigation, } from '@react-navigation/native';

import { 
  Wrapper, 
  Container, 
  Title, 
  Main,
  Label,
  Div,
  Spacing,
  B,
  Tips,
} from './styles';


import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/header';
//import Axios from 'axios';

import { ThemeContext } from 'styled-components/native';
import { TouchableRipple } from 'react-native-paper';

import RowFull from '../../new_components/lists/row_full/index'

import { API_URL } from '../../api/index';
import Imoveis from '../../api/imoveis.json'

import Like from '../../new_components/like/index';

export default function Save({ navigation, route }) {

  const { color } = useContext(ThemeContext)

  const [dataSave, setDataSave] = useState([])

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(Imoveis)

  useEffect(() => {
    //getSaveIDs()
  }, [])




  async function getSave(value){
     const headers = {'Accept': "application/json"}
    setLoading(true)

    await Axios.get(`${API_URL}/salvos/list?ID=${value}`, {
        headers: headers
    }).then(function (response) {
        const result = response.data[0]
        data.push(result)
        setLoading(false)
    }).catch(error => {
        console.log(error)
    })
  }




  const renderItem = ({ item }) => (
    <View style={{alignSelf: 'center', margin: 'auto'}}><RowFull data={item} />
    <View style={{width: 10, height: 15,}}/></View>
  ) 



return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>

        <View style={{backgroundColor: color.off, width: 78, height: 78, borderRadius: 100, 
        alignSelf: 'center', justifyContent: 'center', marginBottom: 10,}}>
        <Text style={{textAlign: 'center',}}>
          <AntDesign name="hearto" size={42} color={color.primary} style={{textAlign: 'center'}} /></Text>
        </View>

        
        <Title>Seus Imóveis Salvos</Title>
        
          <Label>Encontramos {data.length} imóveis</Label>

        

     

   
      <SafeAreaView style={{paddingHorizontal: 20,}}>
      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={false}
            data={Imoveis}
            contentContainerStyle={{justifyContent: 'center'}}
            ListHeaderComponent={() => <View style={{width: 20, height: 20,}}/>}
            ListFooterComponent={() => <View style={{width: 20, height: 0,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.ID}
          />
      </SafeAreaView> 

  
        <View style={{marginTop: 30, marginBottom: 30,}}>
          <Text style={{textAlign: 'center'}}>
            <Feather style={{alignSelf: 'center'}} name="alert-circle" size={28} color={color.label} />
             
          </Text>
         <Tips>
          Clique sobre o botão de  <Ionicons name="heart-outline" size={16} style={{textAlign: 'center'}} color={color.label}/>  para salvar um imóvel </Tips>
        </View>
    
  </Wrapper>

  
  </Main>
  )
}