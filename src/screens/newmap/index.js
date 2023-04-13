
import React, { useContext, useState , useRef, useEffect} from 'react';
import { View,  Dimensions, FlatList, ScrollView, TouchableOpacity} from 'react-native';


import { Fontisto , AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



import { 
  Wrapper, 
  Title, 
  Main,
  Label,
  
  
  Button, 
  ButtonIcon, 
  ButtonLabel,
  Quick,
  Back,

  Description,
  Address,


  Img,
} from './styles';


import { ThemeContext } from 'styled-components/native';

import Imoveis from '../../api/imoveis.json'

import RowFull from '../../new_components/lists/row_full/index'
import { Column, Row } from '../../theme/global'
import Like from '../../new_components/like/index';

import RowFlow from '../../new_components/lists/row_flow';
import { Modalize } from 'react-native-modalize';
import { requestFeed } from '../../api/request/mobile';



export default function NewMap({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)


  const [feed, setFeed] = useState()
  const [detail, setDetail] = useState([])
  const [loadingFeed, setLoadingFeed] = useState()
  const modalImoveis= useRef(null);


  function getFeed(){
    setLoadingFeed(true)
    requestFeed().then(
      function(response, ) {
        if(response){
          setFeed(response)
          setLoadingFeed(false)
          return
        }})
    setLoadingFeed(false)
  }

  const largura = 0.7 * width;
  const altura = 0.6 * height;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{marginRight: 20,}} onPress={() => handleImovel(item)}><RowFlow data={item} /></TouchableOpacity>
  ) 


  useEffect(() => {
    getFeed()
  }, [])
  

  const handleImovel = (item) => {
    setDetail(item)
  }


return (
  <Main>
  
  <Wrapper>
    <View>

      
    
      </View>
  </Wrapper>




      <Back onPress={() => navigation.goBack()}>
        <Feather style={{textAlign: 'center',}} name="arrow-left" size={22} color="#fff" />
      </Back>


      <Quick onPress={() => modalImoveis.current?.open()}>
         <MaterialCommunityIcons name="map-marker-radius-outline"  style={{ textAlign: 'center'}}  size={36} color="#FFF" />
      </Quick>

      <Modalize ref={modalImoveis} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000030",}} handlePosition="inside">
 
      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={feed}
            ListHeaderComponent={() => <View style={{width: 20, height: 20,}}/>}
            ListFooterComponent={() => <View style={{width: 20, height: 20,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.ID}
          />

      </Modalize>
  </Main>
  )
}