
import React, { useState, useContext, useEffect, useRef } from 'react';
import { View, Dimensions, FlatList, ActivityIndicator } from 'react-native';

import {  Feather, Ionicons   } from '@expo/vector-icons';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import { 
  Wrapper, 
  Title, 
  Main,
  Input,
  Button,
  Spacing,
  Spacing1,
  
  Item1Title,
  Filters,
  FiltersLabel,
  BtHandle,
  BtText,
  
  ButtonValue,
  ButtonValueLabel,
  InputValue,
  Card,
  FilterBt,
  FiltersTitle,

  SelectLabel,
  Select,
  Circle,
} from './styles';


import { ThemeContext } from 'styled-components/native';
import { Modalize } from 'react-native-modalize';
import { Row } from '../../theme/global';

import { requestSearch , requestFeed  } from '../../api/request/mobile';

import RowFlow from '../../new_components/lists/row_flow';
import { Column } from './../../theme/global';
import { Length } from './../list/styles';
import Categorias from '../../api/categories.json'


export default function Search({ navigation, route, ...props }) {

  const { color, opacity, font } = useContext(ThemeContext)
  
  const a = false;
  const categories = Categorias
  const [data, setData] = useState()
  const [result, setResult] = useState()
  const [loading, setLoading] = useState();

  const [resultLabel, setResultLabel] = useState('Procurar');

  const [codigo, setCodigo] = useState('Sem código');
  const modalizeValue = useRef(null);
  const modalizePreferences = useRef(null)
  const modalizeCode = useRef(null)

  function handleFeed(){
    requestFeed().then( 
      function(response, ) {
        if(response){
          setData(response)
        }
      }
    )
  }

  function handleSearch(){
    setLoading(true)
    requestSearch( codigo, rent, item1, value_max, bedroom, bathroom ).then(
      function(response, ) {
        if(response){
          setResult(response)
          let value = "Encontramos " + response.length + " imóveis";
          setResultLabel(value)
          setLoading(false)
        }
      }
    )
  }



  useEffect(() => {
    handleFeed()
  }, [])
  
  

  const handleBedroom = (value) => { 
    if(value === false){
      if(bedroom > 1){
        setBedroom(bedroom - 1)
      }
    }if(value === true){
      if(bedroom < 5){
        setBedroom(bedroom + 1)
      }
    }
   }
  
   const handleBathroom = (value) => { 
    if(value === false){
      if(bathroom > 1){
        setBathroom(bathroom - 1)
      }
    }if(value === true){
      if(bathroom < 5){
        setBathroom(bathroom + 1)
      }
    }
   }


   function handleChangeSelect(){
    if(alugar == true){
      setAlugar(false)
      setComprar(true)
      setRent('comprar')
    }
    else if(alugar == false){
      setAlugar(true)
      setRent('alugar')
      setComprar(false)
    }
  }

  const [bedroom, setBedroom] = useState(3)
  const [bathroom, setBathroom] = useState(2)
  const [value_max, setValueMax] = useState(4200)
  const [item1, setItem1] = useState('Casa')
  const [rent, setRent] = useState('alugar')
  const [alugar, setAlugar] = useState(true)
  const [comprar, setComprar] = useState(false)

  const handleCategories = (params) => {-
    setItem1(params?.name)
    modalizePreferences.current?.close()
  }

   const renderCategories = ({item}) => (
    <>
      <BtHandle style={{marginBottom: 10,}} color="#5B72F2" onPress={() => handleCategories(item)}  bgColor={item?.bgColor}>
        <BtText color="#FFFFFF">{item?.name}</BtText>
      </BtHandle>
      <Spacing style={{width: 10,}}/>
    </>
    )

    const renderItem2 = ({ item }) => (
      <><RowFlow data={item} />
      <View style={{width: 10, height: 15,}}/></>
    ) 

return (
  <Main>
  <Wrapper>
    
  {a  &&     <Row style={{marginHorizontal: 20,}}>
         <Input
           onChangeText={setCodigo}
           value={codigo}
           placeholder={'Código'}
           placeholderTextColor={color.label} 
           activity={true}
          />
          
          <Button onPress={handleSearch}>
            <Feather style={{textAlign: 'center'}} name="search" size={24} color="#fff" />
          </Button>
        </Row>
}

        <Column style={{ marginHorizontal: 20, zIndex: 999,}}>

          <Circle>
            <Feather style={{alignSelf: 'center'}} name="search" size={42} color="#fff" />
          </Circle>





        <Card style={{marginTop: 10, }} horizontal showsHorizontalScrollIndicator={true}>


        <Row>
          <Select disabled={alugar} style={{flexGrow: 1,}} activity={alugar} onPress={handleChangeSelect}>
            <SelectLabel activity={alugar}>Alugar</SelectLabel>
          </Select>
          <Spacing1/>
          <Select disabled={comprar} style={{flexGrow: 1,}} activity={comprar} onPress={handleChangeSelect}>
            <SelectLabel activity={comprar}>Comprar</SelectLabel>
          </Select>
        </Row>

          <Filters onPress={() => modalizePreferences.current?.open()}>
           
            <FiltersLabel>Categoria</FiltersLabel>
            <Row>
              <FiltersTitle>{item1}</FiltersTitle>
            </Row>
          </Filters>

          
          <Filters onPress={() => modalizeCode.current?.open()}>
           
            <FiltersLabel>Código</FiltersLabel>
            <Row>
              <FiltersTitle>{codigo}</FiltersTitle>
            </Row>
          </Filters>

          <Filters onPress={() => modalizeValue.current?.open()}>
           
            <FiltersLabel>Valor Máximo</FiltersLabel>
            <Row>
              <FiltersTitle>R$ {value_max},00</FiltersTitle>
            </Row>
          </Filters>


        <Row style={{flexGrow: 2,}}>
          <Filters style={{flexGrow: 1, justifyContent: 'center'}}>
            <FiltersLabel style={{textAlign: 'center'}}>Quartos</FiltersLabel>
            <Row style={{marginTop: 5, alignSelf: 'center'}}>
              <FilterBt onPress={() => handleBedroom(false)}><Ionicons name="remove" style={{alignSelf: 'center'}} size={18} color="#fff" /></FilterBt>
              <FiltersTitle style={{marginHorizontal: 10, marginTop: -4,}}>{bedroom}</FiltersTitle>
              <FilterBt onPress={() => handleBedroom(true)}><Ionicons name="add" style={{alignSelf: 'center'}} size={18} color="#fff" /></FilterBt>
            </Row>
          </Filters>
          <Spacing1/>
          <Filters style={{flexGrow: 1}}>
            <FiltersLabel style={{textAlign: 'center'}}>Banheiros</FiltersLabel>
            <Row style={{marginTop: 5, alignSelf: 'center'}}>
              <FilterBt onPress={() => handleBathroom(false)}><Ionicons name="remove" style={{alignSelf: 'center'}} size={18} color="#fff" /></FilterBt>
              <FiltersTitle style={{marginHorizontal: 10, marginTop: -4,}}>{bathroom}</FiltersTitle>
              <FilterBt onPress={() => handleBathroom(true)}><Ionicons name="add" style={{alignSelf: 'center'}} size={18} color="#fff" /></FilterBt>
            </Row>
          </Filters>
          </Row>

          <Select disabled={loading} style={{flexGrow: 1, marginTop: 15,}} activity={true} onPress={handleSearch}>
            {loading && <ActivityIndicator size={22} color={color.light}/>}
            {!loading && <SelectLabel activity={true}>{resultLabel}</SelectLabel>}
          </Select>

        </Card> 
        </Column>


  {result &&  <Column style={{paddingHorizontal: 20, borderRadius: 12, paddingTop: 40, paddingBottom: 20, marginTop: -40, backgroundColor: "#f1f1f1"}}>

        
        <Title style={{marginBottom: 10, marginTop: 20,}}>Resultados</Title>
          <FlatList
            data={result}
            contentContainerStyle={{ alignItems: "center" }}
            ListFooterComponent={() => <View style={{width: 20, height: 20,}}/>}
            renderItem={renderItem2}
            keyExtractor={item => item.ID}
          />

    </Column>}


        <Column style={{paddingHorizontal: 20, borderRadius: 12, paddingBottom: 30, paddingTop: 40, marginTop: -40, backgroundColor: "#f1f1f1"}}>

        
        <Title style={{marginBottom: 10, marginTop: 20,}}>Sugestões para você</Title>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            style={{marginHorizontal: -20,}}
            pagingEnabled
            ListHeaderComponent={() => <View style={{width: 20, height: 20,}}/>}
            ListFooterComponent={() => <View style={{width: 20, height: 20,}}/>}
            renderItem={renderItem2}
            keyExtractor={item => item.ID}
          />

    </Column>

  </Wrapper>

    
  <Modalize ref={modalizePreferences} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
        <View style={{marginVertical: 20, marginHorizontal: 20,}}>
        <Item1Title>Categorias</Item1Title>
        <FlatList
            showsHorizontalScrollIndicator={false}
            data={categories}
            contentContainerStyle={{justifyContent: 'center'}}
            numColumns={2}
            style={{marginHorizontal: -20, marginBottom: -20, marginTop: -10, alignSelf: 'center',}}
            ListFooterComponent={() => <View style={{width: 20, height: 20,}}/>}
            ListHeaderComponent={() => <View style={{width: 20, height: 20,}}/>}
            renderItem={renderCategories}
            keyExtractor={item => item.name}
          />

          <Filters style={{width: '100%', backgroundColor: color.green, borderRadius: 5,}} onPress={() => modalizePreferences.current?.close()}><FiltersLabel
          style={{color: color.light, textAlign:'center'}}>Pronto</FiltersLabel></Filters>

        </View>

    </Modalize>


      <Modalize ref={modalizeValue} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
    
        <View style={{marginVertical: 20, marginHorizontal: 20,}}>
        <Item1Title>Valor máximo</Item1Title>
          <Row style={{marginTop: 10, }}>
            
          <ButtonValue>
            <ButtonValueLabel>R$</ButtonValueLabel>
          </ButtonValue>
          
          <InputValue
            onChangeText={value => setValueMax(value)}
            value={value_max}
            placeholder={'Ex: 2000,00'}
            placeholderTextColor={color.label} 
            activity={true}
          />
          </Row>

          <Filters style={{width: '100%', backgroundColor: color.green, borderRadius: 5,}} onPress={() => modalizeValue.current?.close()}><FiltersLabel
          style={{color: color.light, textAlign:'center'}}>Pronto</FiltersLabel></Filters>
        </View>

      </Modalize>

      
      <Modalize ref={modalizeCode} adjustToContentHeight={true}  overlayStyle={{backgroundColor: "#00000040",}} handlePosition="inside">
    
        <View style={{marginVertical: 20, marginHorizontal: 20,}}>
        <Item1Title>Código de Identificação</Item1Title>
          <Row style={{marginTop: 10, }}>
            
          <ButtonValue>
            <ButtonValueLabel>#</ButtonValueLabel>
          </ButtonValue>
          
          <InputValue
            onChangeText={value => setCodigo(value)}
            value={codigo}
            placeholder={'Ex: 342021'}
            placeholderTextColor={color.label} 
            activity={true}
          />
          </Row>

          <Filters style={{width: '100%', backgroundColor: color.green, borderRadius: 5,}} onPress={() => modalizeCode.current?.close()}><FiltersLabel
          style={{color: color.light, textAlign:'center'}}>Pronto</FiltersLabel></Filters>
        </View>

      </Modalize>


    
  </Main>
  )
}