
import React, { useState, useContext } from 'react';
import { View,  Image,  StatusBar,  TouchableOpacity, ActivityIndicator} from 'react-native';


import { Feather, AntDesign } from '@expo/vector-icons';

import { 
  Wrapper, 
  Title, 
  Main,
  Label,

  Button,
  ButtonIcon,
  ButtonLabel,
  

  Spacing,

  Div,
  Subheadline,

  Input,
  InputLabel, 
  EyeBt,
  ErrorMsg,
  UserName,
  UserTitle,
  } from './styles';


import { ThemeContext } from 'styled-components/native';

import { Row, Column} from '../../../theme/global'

import { API_URL } from '../../../api';
import Axios from 'axios';

export default function Login({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const a = false;

  const [email, setEmail] = useState('dev.joaosousa@gmail.com')
  const [password, setPassword] = useState('223761deJO@O@')

  const [username, setUsername] = useState('Visitante');

  const path = route.params?.path

  const [user, setUser] = useState([])
  const [eye, setEye] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
     

  async function handleLogin(){
    setLoading(true)
  
    return Axios.post(`${API_URL}/jwt-auth/v1/token`,  
      {
        email: email, 
        password: password
      }
    ).then(response => {
      if(response){
        const user = response.data 
        setLoading(false)
        
        navigation.navigate('Confirmation', {user: user, password: password, path: path})
      }
    }).catch(error => {
      const msg = error.response.data.message;
      setError(msg)
      setLoading(false)
    });
  
      }
  


return (
  <Main>
  <StatusBar translucent backgroundColor="transparent" />
  <Wrapper>
    
   
      {a && <Image source={require('../../../assets/login_frame_1.png')} style={{
        width: "100%", height: 360, marginBottom: 20, alignSelf: 'center', resizeMode: 'contain',  marginTop: -50,}}/>
      }

      <Column>
      <Image source={require('../../../assets/logo1.png')} style={{width:100, height: 100, margin: 'auto'}}/>
        <UserTitle>Olá,</UserTitle>
        <UserName>{username}!</UserName>
        <Label style={{textAlign: 'left', marginLeft: 24, fontSize: 18,}}>Entre para ter acesso 
        a milhares de imóveis, escolhidos especialmente para você.</Label>
       {!error == null && <ErrorMsg>{error}</ErrorMsg>}
      </Column>
        
        <View style={{marginTop: 10, marginBottom: 0, paddingHorizontal: 24,}}>

          <Div/>

          <InputLabel>E-mail</InputLabel>
          <Input 
            onChangeText={email => setEmail(email)} 
            value={email} 
          />
         <Spacing/>

          <InputLabel>Senha</InputLabel>

          <Row style={{width: '100%', display: 'flex',}}>
            <Input style={{width: '83%'}}
            onChangeText={password => setPassword(password)} 
            secureTextEntry={eye}
            value={password} />
            
           <EyeBt  onPress={() => setEye(!eye)}>
            <Column>
              { eye && <Feather name="eye" style={{paddingTop: 4, paddingLeft: 4,}} size={20} color={color.primary} /> }
              { !eye && <Feather name="eye-off" style={{paddingTop: 4, paddingLeft: 4,}} size={20} color={color.primary} /> }
            </Column>
            </EyeBt>        
        </Row>
        <Spacing/>
        <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
          <Subheadline style={{color: color.label, textAlign: 'right'}}>Esqueci a senha</Subheadline>
        </TouchableOpacity>        

     {error?.length > 1 &&  <ErrorMsg>{error}</ErrorMsg>}

        <Button disabled={loading} color="#5B72F2" onPress={handleLogin} off={false}>
          <>
          <View style={{flexGrow: 2,}}>
            {!loading && <ButtonLabel off={false}>Acessar</ButtonLabel> }
            {loading && <ActivityIndicator size={30} color="#fff"/> }
           </View> 
            <ButtonIcon/>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
          </>
        </Button>
        
        <Spacing/>
         <Subheadline>Não tem uma conta?</Subheadline>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}><Subheadline style={{color: color.primary, textDecoration: 'underline'}}>Registrar-se</Subheadline></TouchableOpacity>
        <Div/>
        </View>
         

    
  </Wrapper>
  </Main>
  )
}