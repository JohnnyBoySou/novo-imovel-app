
import React, { useEffect, useState, useRef, useContext , } from 'react';
import { View,  Animated,  Dimensions, SafeAreaView, FlatList, ScrollView} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const btW = 0.49 * width;

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';


import { Wrapper, Container, Title, Main,
Label, SubLabel,
TabBarTitle,
TabBar,
TabBarButton,
TabBarLabel,

} from './styles';

import { ThemeContext } from 'styled-components/native';

import Axios from 'axios';
import Header from '../../components/header/index';

import { API_URL } from '../../api/index';
import RowLarge from '../../new_components/lists/row_large/index'

import RowFlow from './../../new_components/lists/row_flow/index';
import { requestBairroImoveis } from '../../api/request/mobile';
import { plural, pluralImovel } from './../../theme/utils';


export default function Bairro({ navigation, route, }) {

 const nome = route.params?.info



  const [loadingComprar, setLoadingComprar] = useState(true);
  const [loadingAlugar, setLoadingAlugar] = useState(true);
  const [comprar, setComprar] = useState([]);
  const [alugar, setAlugar] = useState([]);


  useEffect(() => {
    setLoadingComprar(true)
    setLoadingAlugar(true)
    
    requestBairroImoveis(nome, "alugar").then(response => {
      if(response){
        setAlugar(response)
        setLoadingAlugar(false)
      }
  })

    requestBairroImoveis(nome, "comprar").then(response => {
        if(response){
          setComprar(response)
          setLoadingComprar(false)
        }
    })
  }, [])



  
  const { color, opacity, font } = useContext(ThemeContext)
  const sufixAlugar = pluralImovel(alugar?.length);
  const sufixComprar = pluralImovel(comprar?.length);
  const renderItem = ({ item }) => (<>
    <RowFlow data={item} direction="vertical"/> 
    <View style={{width: 10, height: 15}}/>
    </>
  )




  const AlugarComponent = ()  => (
    <View style={{padding: 12, flex: 1,  width: width, backgroundColor: "#f1f1f1"}} >
        <Label style={{textAlign: 'center', fontFamily: font.book}}>Encontramos <Label style={{fontFamily: font.bold}}>{alugar?.length}</Label> {sufixAlugar} </Label>
      
      <SafeAreaView style={{ marginTop: 16,}}>
          <FlatList
                data={alugar}
                ListFooterComponent={() => <View style={{width: 30, height: 20,}}/>}
                renderItem={renderItem}
                contentContainerStyle={{ alignItems: 'center' }}
                keyExtractor={item => item.ID}
              />
        </SafeAreaView>
      </View>
    );

  const ComprarComponent = ()  => (
    <View style={{padding: 12, flex: 1, width: width, backgroundColor: "#f1f1f1" }} >
        <Label style={{textAlign: 'center', fontFamily: font.book}}>Encontramos <Label style={{fontFamily: font.bold}}>{comprar?.length}</Label> {sufixComprar} </Label>
      
      <SafeAreaView style={{ marginTop: 16,}}>
          <FlatList
                data={comprar}
                ListFooterComponent={() => <View style={{width: 30, height: 20,}}/>}
                renderItem={renderItem}
                contentContainerStyle={{ alignItems: 'center' }}
                keyExtractor={item => item.ID}
              />
        </SafeAreaView>
      </View>
    );


  const a = false;

  const scrollRefView = useRef(null);
  const [screen1, setScreen1] = useState(true);
  const [screen2, setScreen2] = useState(false);


  function changeScreen(){
    if(screen1){
     // scrollRefView.current.scrollTo({ x: width, y: 0, animated: true });
      setScreen1(false)
      setScreen2(true)
    }
    if(screen2){
     // scrollRefView.current.scrollTo({ x: 0, y: 0, animated: true });
      setScreen1(true)
      setScreen2(false)
    }
  }


return (

<Main>

<Header title={nome} />

  <Wrapper stickyHeaderIndices={[1]} scrollEventThrottle={64} >
    
    <Animated.View>

        {a && <View>
          <Title>{info?.nome}</Title>
          <Label>{info?.extensao} km de extensão</Label>
        </View>}

       {a && <View style={{flexDirection: 'row', marginTop: 20, paddingLeft: 10, paddingRight: 10, paddingBottom: 16, borderBottomColor: color.off, borderBottomWidth: 2,}}>
          <MaterialCommunityIcons name="home-city-outline" size={24} color={color.primary} style={{padding: 12, marginRight: 6,}} />
          <SubLabel>{info?.descricao}</SubLabel>
        </View>}

    </Animated.View>
      



    <TabBar>
      <TabBarButton w={btW} disabled={screen1} onPress={changeScreen} focus={screen1}><TabBarTitle focus={screen1}>Alugar</TabBarTitle></TabBarButton>
      <TabBarButton w={btW} disabled={screen2} onPress={changeScreen} focus={screen2}><TabBarTitle focus={screen2}>Comprar</TabBarTitle></TabBarButton>
    </TabBar>


<ScrollView
      ref={scrollRefView}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={64}
      pagingEnabled
     >
     
     
    {screen1 && <>{!loadingAlugar && <AlugarComponent/>}</>}
     {screen2 && <>{!loadingComprar && <ComprarComponent/>}</>}
    
   </ScrollView>


  
    




  
  </Wrapper>

  </Main>
  )
}