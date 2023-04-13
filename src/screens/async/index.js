import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AsyncSplash({ navigation }){

  async function getPreferences(){
    try {
      const jsonValue = await AsyncStorage.getItem('@preferences')
      if(jsonValue != null) {
        navigation.navigate('TabNavigator')
      }else{
       navigation.navigate('Splash')
      }
    } catch(e) {
      console.log(e)
    }}
  
  useEffect(() => {
    getPreferences()
  }, [])

  return(
    <View style={{flex: 1, backgroundColor: "#fff", justifyContent: 'center', marginLeft: -40, }}>
       <Image style={{ width: 150, height: 150,justifyContent: "center",margin: "auto",}} source={require('../../assets/logo1.png')}/>
      </View>
  )
}