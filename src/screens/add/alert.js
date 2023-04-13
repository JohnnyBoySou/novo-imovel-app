
import React, { useState, useContext } from 'react';
import { StatusBar, View, } from 'react-native';


import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { 
  Wrapper, 
  Title, 
  Main,
  Label,
  Li,
  List,
  Ball,
  Button,
  ButtonIcon,
  ButtonLabel,
  NewCircle,
    } from './styles';

import Header from '../../components/header'
import { ThemeContext } from 'styled-components/native';

import { Column, Row} from '../../theme/global'

export default function Alert({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const a = false;


  const handleBack = () => {
    navigation.goBack()
  }
  
  const handleNext = () => {
    navigation.navigate('Location', {imovel: params,})
  }



return (
  <Main>

    <Header title="Aviso"/>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper style={{backgroundColor: color.light, }}>
  
      <Column>

      <NewCircle >
      <Feather style={{alignSelf: 'center'}} name="alert-triangle" size={48} color={color.primary} />
    </NewCircle>   
       
      <Title style={{marginTop: 20, marginBottom: 10,}}>Atenção</Title>
       <View style={{marginLeft:24, marginRight: 24,}}>
        <Label>Seguimos algumas regras de conduta estabelecidas, para que um imóvel estejá apto a ser indicado em nossa plataforma. 
          Siga essas regras para que seu imóvel seja publicado com sucesso!</Label>
        
        <Label>Itens que anulam seu imóvel de ser aprovado.</Label>
       

        <List>
          <Row><Ball/><Li>Palavrões nas descrições;</Li></Row>
          <Row><Ball/><Li>Informações incorretas e/ou falsas;</Li></Row>
          <Row><Ball/><Li>Dados imprecisos;</Li></Row>
          <Row><Ball/><Li>Fotos de baixissima qualidade e/ou alterada digitalmente;</Li></Row>
          
        </List>
        <Button color="#5B72F2" onPress={() => navigation.navigate('Add')}>
        <>
        <ButtonLabel>Continuar</ButtonLabel>
        <ButtonIcon/>
      <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
        </>
      </Button>
      </View>
      </Column>
         
  </Wrapper>
  </Main>
  )
}