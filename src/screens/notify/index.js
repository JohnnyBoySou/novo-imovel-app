
import React, { useState, useContext, useEffect, useRef } from 'react';
import { Dimensions, StatusBar, ScrollView, FlatList, ActivityIndicator } from 'react-native';

import Noti from '../../components/notify/index'

import { 
  Wrapper, 
  Main,
} from './styles';


import Header from '../../components/header';
import { requestNotifications } from '../../api/request/mobile';
import { ThemeContext } from 'styled-components/native';


export default function Notify({ navigation, route, ...props }) {

  const { color, opacity } = useContext(ThemeContext)
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()

  useEffect(() => {
    getNofications()
  }, [])


  function getNofications(){
    setLoading(true)
    requestNotifications().then(
      function(response, ) {
        if(response){
          setData(response)
          setLoading(false)
        }
      })
  }
return (
  <Main>
  <Header title="Notificações"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    <ScrollView style={{paddingVertical: 0, paddingHorizontal: 24,  }}>
      {loading && <ActivityIndicator style={{marginTop: 50,}} size={32} color={color.primary}/>}
      <FlatList data={data} showsHorizontalScrollIndicator={false} keyExtractor={(item, index) => index.toString()} renderItem={({item}) => <Noti item={item} /> }>
      </FlatList>
    </ScrollView>

  </Wrapper>
  </Main>
  )
}