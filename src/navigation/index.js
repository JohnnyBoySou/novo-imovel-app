import "react-native-gesture-handler";
import React, { useContext } from 'react';
import { View, } from 'react-native';
import { TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ThemeContext } from 'styled-components/native';

import AppLoading from 'expo-app-loading';

import MapButton from '../components/mapbutton/index';
import { Icons } from './icons'

import * as SPScreen from 'expo-splash-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


//Config
import LoadScreen from '../screens/load';
import AsyncSplashScreen from '../screens/async';

import DetailsScreen from '../screens/details/index'
import BairroScreen from '../screens/bairro/index'
import NotifyScreen from '../screens/notify/index'
import FinanciarScreen from '../screens/financiar/index'
import ProfileScreen from '../screens/imobil/index'
import FinalizarScreen from '../screens/finalizar/index' 
import WatchScreen from "../screens/storys/watch";
import MapScreen from '../screens/newmap/index'

import FeedScreen from '../screens/feed/index';
import SearchScreen from '../screens/search/index'
import SaveScreen from '../screens/save/index';
import AccountScreen from '../screens/account/index';
import SettingsScreen from '../screens/settings/index'
//import TagScreen from '../screens/tag/index'

//Splash
import ValorScreen from '../screens/splash/valor';
import BuscaScreen from '../screens/splash/busca';
import MapaScreen from '../screens/splash/mapa';
import SplashScreen from '../screens/splash';
import VisitarScreen from '../screens/splash/visitar';
import BathroomScreen from '../screens/splash/bathroom';
//Auth
import LoginScreen from '../screens/splash/auth/login'
import RegisterScreen from '../screens/splash/auth/register'
import ForgetScreen from '../screens/splash/auth/forget'

import NewTodayScreen from '../screens/newtoday/index'
//Add Imovel

import AlertScreen from '../screens/add/alert'
import AddImovelScreen from '../screens/add/imovel'
import LocationImovelScreen from '../screens/add/location'
import AboutImovelScreen from '../screens/add/about'
import MediaImovelScreen from '../screens/add/media'
import PublishImovelScreen from '../screens/add/publish'
import ConfirmationScreen from "../screens/splash/auth/confirmation";
import UserScreen from "../screens/account/userDrawer";

SPScreen.preventAutoHideAsync();


export default function App() {
  let [fontsLoaded] = useFonts({
    Font_Book: require('../assets/fonts/Circular_Book.ttf'),
    Font_Medium: require('../assets/fonts/Circular_Medium.ttf'),
    Font_Bold:  require('../assets/fonts/Circular_Bold.ttf'),
    Font_Black: require('../assets/fonts/Circular_Black.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  
  return (  

   <NavigationContainer>
     <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false, ...TransitionPresets.SlideFromRightIOS,}}>
        <Stack.Screen name="Async" component={AsyncSplashScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="TabNavigator" component={Tabs} />

        <Stack.Screen name="Splash" component={SplashScreen}  options={{...TransitionPresets.ModalSlideFromBottomIOS, }}/>
        <Stack.Screen name="Bathroom" component={BathroomScreen}  options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Valor" component={ValorScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Busca" component={BuscaScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
        <Stack.Screen name="Mapa" component={MapaScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/> 
        <Stack.Screen name="Visitar" component={VisitarScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Bairro" component={BairroScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Notify" component={NotifyScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Settings" component={SettingsScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Financiar" component={FinanciarScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Finalizar" component={FinalizarScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Watch" component={WatchScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
   
      
        <Stack.Screen name="User" component={UserScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
   
        <Stack.Screen name="Profile" component={ProfileScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Feed2" component={FeedScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Search2" component={SearchScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Account2" component={AccountScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
   
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
   
        <Stack.Screen name="NewToday" component={NewTodayScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
    
        <Stack.Screen name="Load" component={LoadScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
    
        <Stack.Screen name="Register" component={RegisterScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
        <Stack.Screen name="Forget" component={ForgetScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>
      
        <Stack.Screen name="Alert" component={AlertScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
        <Stack.Screen name="Add" component={AddImovelScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
        <Stack.Screen name="About" component={AboutImovelScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
        <Stack.Screen name="Location" component={LocationImovelScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
        <Stack.Screen name="Media" component={MediaImovelScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
        <Stack.Screen name="Publish" component={PublishImovelScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
        <Stack.Screen name="Map" component={MapScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
      
        <Stack.Screen name="Save" component={SaveScreen} options={{...TransitionPresets.SlideFromRightIOS, }}/>  
        <Stack.Screen name="Details" component={DetailsScreen} options={{...TransitionPresets.SlideFromRightIOS,}}/>  
 
      </Stack.Navigator>
  </NavigationContainer>
   );
}}


function Tabs() {

  const { color, font } = useContext(ThemeContext)
  
  return (
    <Tab.Navigator initialRouteName="Feed" 
    screenOptions={({ route, navigation }) => ({ tabBarIcon: ({ focused }) => {
          const { lib: Icon, name, name_outline, colorIcon, title, } = Icons[route.name];
          
          if(focused){
            return <>            
              <View style={{backgroundColor: "#F1F3FF", padding: 18, borderTopLeftRadius: 12, borderTopRightRadius: 12,}}>
                <Icon name={name_outline} size={28} color="#5B72F2" style={{textAlign: 'center',}} />
              </View>
              <View style={{width: '100%', height: 4, backgroundColor: "#5B72F2", position: 'absolute', bottom: 0, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}/>
              </>;
            }else{
            return <Icon name={name} style={{textAlign: 'center',}}  size={24} color="#00000060" />}
          },
      })}
      tabBarOptions={{
        showLabel: false,
        style:{height: 64,elevation: 0,borderTopWidth: 0,zIndex: 999},
        activeTintColor: color.primary,
        inactiveTintColor: color.activity,
        activeBackgroundColor: "#fff",
        labelStyle:{fontFamily: font.medium, fontSize: 16,}}}>
      
      <Tab.Screen name="Feed" component={FeedScreen}  options={{title: 'Início',...TransitionPresets.ModalSlideFromBottomIOS, }}/>    
      <Tab.Screen name="Search" component={SearchScreen}  options={{title: 'Pesquisar',...TransitionPresets.ModalSlideFromBottomIOS, }}/>    
     
  
      <Tab.Screen name="Account" component={AccountScreen}  options={{title: 'Minha conta',...TransitionPresets.ModalSlideFromBottomIOS, }}/>    
     
      <Tab.Screen name="Settings" component={SettingsScreen}  options={{title: 'Ajustes',...TransitionPresets.ModalSlideFromBottomIOS, }}/>    
     
      
      
    </Tab.Navigator>

  );
}
//  <Stack.Screen name="TabNavigator" component={Tabs} />
      
//if (route.name === 'Map') {
// return (<MapButton onPress={() => navigation.navigate('Map')} focused={focused}/>);}