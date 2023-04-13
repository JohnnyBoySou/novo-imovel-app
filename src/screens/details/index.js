import React, { useEffect, useState, useRef, useContext } from 'react';
import { View,  Animated, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

const width = Dimensions.get('window').width;

import { Fontisto , Feather, AntDesign } from '@expo/vector-icons';

import { ExpandingDot } from "react-native-animated-pagination-dots";
import { LinearGradient } from 'expo-linear-gradient';

import Similar from '../../new_components/similar'
//import QuickMap from '../../new_components/quick_map'



import { Title, 
Descricao,
Tempo,
Valor,
Main,
Spacing,

Imobil,
ImobilImg,
ImobilLabel,
ImobilTitle,


Lista,
Ball,
Div,

Infra,
InfraLabel,

Local,
LocalLabel,
SubTitle,



Tax,
TaxLi,


CrImage,
CarrouselImages,
CrButton,
CrButtons,

FixedQuick,
Code,
CodeText,
Publish
} from './styles';


import { Row, Button, ButtonIcon, ButtonLabel, } from '../../theme/global';
import { ThemeContext } from 'styled-components/native';

import Item from '../../components/item/index';
import Imoveis from '../../api/imoveis.json'
import Like from '../../new_components/like/index';
import { requestID, requestUserEndpoint} from "../../api/request/mobile";


export default function Details({ navigation, route, }) {

  const data = route.params?.dados; 
  const [item, setItem] = useState(data);
  const taxas = item?.taxas;
  const infras = item?.infraestrutura
  const largura = width

  const [author, setAuthor] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadAuthor, setLoadAuthor] = useState();


  const dataFormatada = new Date(item?.post_date).toLocaleDateString("pt-BR");
  const { color } = useContext(ThemeContext)


  const handleFinish = () => {
    navigation.navigate('Finalizar', {author: author, item: item})
  };


  function getData(){
    setLoading(true)
    requestID(data.ID).then(item => {
        if(item){
         // setItem(item[0])
          getAuthor(item[0].post_author)
          setLoading(false)
      }
      })
  }
  


function getAuthor( id ){
  setLoadAuthor(true)
  requestUserEndpoint(id).then(item => {
      setAuthor(item)
      setLoadAuthor(false)
    })
}


  
  const a = false


  const tilt = `${item?.categoria} com ${item?.qtd1} ${item?.item1}s, ${item?.qtd2} ${item?.item2}s e ${item?.area} metros quadrados`
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;


  const imgs = [ item?.imagem1, item?.imagem2, item?.imagem3, item?.imagem4, item?.imagem5, item?.imagem6, item?.imagem7, item?.imagem8, ]
  const DATA_IMAGES = imgs.filter( item => item !== undefined ); 
  
  const renderImages = ({ item }) => (
    <>{item != undefined && <CrImage style={{width: largura, height: 300}} source={{uri: item}} />}</>  
  );


  useEffect(() => {
    getData()
  }, [])
  
  
  const scrollViewMain = useRef()

return (
  <Main> 
    <ScrollView scrollEventThrottle={16} ref={scrollViewMain}  onScroll={Animated.event([{nativeEvent: {contentOffset: { y: scrollY } },}], {useNativeDriver: false })}>

    <Animated.View style={{position: 'absolute', top: 0, zIndex: 999, display: 'flex', width: '100%'}}>
       <LinearGradient colors={['#00000090', '#00000000']} style={{height: 100, width: width, position: 'absolute', top: 0, zIndex: 3, }}/>

        <CrButtons>
          <CrButton onPress={() => navigation.goBack()}><Feather name="arrow-left" size={18} color="#fff" /></CrButton>
          <Row>
            <CrButton><Feather name="share" size={18} color="#fff" /></CrButton>
          </Row>
        </CrButtons>
      </Animated.View>

      <CarrouselImages 
      pagingEnabled={true} 
      showsHorizontalScrollIndicator={false}>
        <Animated.FlatList 
        style={{ height: scrollY.interpolate({
           inputRange:[100, 200, 250],
           outputRange: [300, 180, 100],
           extrapolate: 'clamp'
         }),}} data={DATA_IMAGES} keyExtractor={item => item} 
    showsHorizontalScrollIndicator={false}
    onScroll={Animated.event(
      [{ nativeEvent: { contentOffset: { x: scrollX } } }],{useNativeDriver: false,})}
    pagingEnabled horizontal decelerationRate={'normal'} scrollEventThrottle={16} renderItem={renderImages}
/>

      <ExpandingDot
      data={DATA_IMAGES}
      expandingDotWidth={20}
      scrollX={scrollX}
      inActiveDotOpacity={0.5}
      activeDotColor={color.primary}
      inActiveDotColor="#000"
      dotStyle={{width: 8, height: 8, backgroundColor: color.primary, borderRadius: 5, marginHorizontal: 5}}
      containerStyle={{bottom: 15,}}  
      /> 
      </CarrouselImages>


      <Row style={{justifyContent: 'space-between', marginTop: 10, paddingRight: 20,}}>
        <Code><CodeText>#{item?.ID}</CodeText></Code>
        <Publish>{item?.views} visualizações</Publish>
      </Row>
      <Row style={{justifyContent: 'space-between', zIndex: 999, paddingTop:10, paddingHorizontal: 20, borderTopLeftRadius:8, borderTopRightRadius: 8,}}>
        <Title style={{width: "80%"}}>{tilt}</Title>
        <View style={{marginRight: 10,}} >
          <Like codigo={item?.ID} />
        </View>
        </Row>

        
        
        
    <Local disabled={loading} onPress={() => navigation.navigate('VerMapa', {dados: item, author: author})}>
      <Fontisto name="map-marker-alt" size={16} color="#5B72F2" style={{marginTop: 0, marginRight: 10,}} />
      <LocalLabel>{item?.rua}, {item?.numero} - {item?.bairro}</LocalLabel>
    </Local>



    <View  style={{paddingHorizontal: 24, marginTop: 20, flexDirection: 'row'}}>
    
      <TouchableOpacity style={{borderRadius: 6, flexGrow: 1,}} borderless={true} >
        <Item type={item?.item1} amount={item?.qtd1} />
      </TouchableOpacity>


      <View style={{width: 12, height: 10}}/>
     
      <TouchableOpacity style={{borderRadius: 6, flexGrow: 1,}} borderless={true}>
        <Item type={item?.item2} amount={item?.qtd2} />
      </TouchableOpacity>
    
      <View style={{width: 12, height: 10}}/>

      <TouchableOpacity style={{borderRadius: 6, flexGrow: 1,}} borderless={true}>
        <Item type="Area" amount={item?.area} />
      </TouchableOpacity>

    </View>

  
  
    <View style={{marginHorizontal: 24,marginTop: 20,}}><Div/></View>

   
    <View style={{paddingHorizontal: 24, marginTop: 20, }}>
    <SubTitle>Sobre</SubTitle>
    <Descricao selectable={true}>{item?.descricao}</Descricao>
      
    <Spacing/>
    <Div/>
    
    <Spacing/>

    <SubTitle style={{marginBottom: 10,}}>Anunciante</SubTitle>
    
    <Imobil onPress={() => navigation.navigate('Profile', {item: author})}>
    <Row style={{justifyContent: 'space-between', width: '100%', }}>
      
      <Row>
        <ImobilImg source={{uri: author?.avatar}}/>
        <View style={{justifyContent: 'center', marginLeft: 12, }}>
          <ImobilTitle>{author?.nome}</ImobilTitle>
          <ImobilLabel>{author?.user_email}</ImobilLabel>
        </View>
      </Row>

      <View style={{backgroundColor: color.primary, marginTop: 8, borderRadius: 6, width: 44, height: 44, textAlign: 'center', justifyContent: 'center'}}>
        <Feather name="info" size={24} color="#fff" style={{alignSelf: 'center'}} />
      </View>
    
    </Row>
    </Imobil>

    <Spacing/>
    <Div/>
    <Spacing/>
   
    
    <SubTitle style={{marginBottom: -10}}>Infraestrutura</SubTitle>
    <View style={{paddingVertical: 12,}}>
  
  {infras?.map((infras) => 
   <Lista key={infras}>
      <Infra><Feather style={{textAlign: 'center'}} name="check" size={12} color="#FFF" /></Infra>
      <InfraLabel>{infras}</InfraLabel>
    </Lista>
  )}
  
  <Div style={{marginBottom: 20, marginTop: 20,}}/>

  <SubTitle style={{marginBottom: 0}}>Taxas adicionais</SubTitle>
    <Tax>
      {taxas?.map((taxas) => 
      <View style={{flexDirection: 'row'}}>
        <Ball style={{backgroundColor: "#906959", marginBottom:4,  }}/>
      <TaxLi style={{color: "#906959"}} key={taxas}>{taxas}</TaxLi></View> )}
    </Tax>

  <Div style={{marginBottom: 0, marginTop: 20,}}/>

      </View>

    <Similar data={Imoveis}/>
    
  </View>


  </ScrollView>

     
      <FixedQuick> 
        <Row style={{flexGrow: 2,}}>
            
            {item?.tipo == "Ambos" && <Valor>R$ {item?.valor_mensal} / R$ {item?.valor_unico}</Valor> }
            {item?.tipo != "Ambos" && <Valor>R$ {item?.valor_mensal}{item?.valor_unico}</Valor>}
            <Tempo>/{item?.tipo}</Tempo>   
          </Row>



       <Button style={{flexGrow: 1,}} color="#5B72F2" onPress={handleFinish}>
        <>
          <ButtonLabel style={{marginRight: 10, marginTop: 4,}}>Próximo</ButtonLabel>
          <ButtonIcon/>
          <AntDesign style={{marginLeft: -35, marginRight: 18, marginTop: 4,}} name="arrowright" size={24} color="#FFF" />
        </>
      </Button>
      </FixedQuick>



      
  </Main>
  )
}