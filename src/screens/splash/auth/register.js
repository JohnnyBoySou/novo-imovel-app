
import React, { useState, useContext } from 'react';
import { View,  Image,  StatusBar,  ActivityIndicator, TouchableOpacity} from 'react-native';


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
  } from './styles';


import { ThemeContext } from 'styled-components/native';

import { Row, Column} from '../../../theme/global'
import { API_URL } from '../../../api';
import Axios from 'axios';

export default function Register({ navigation, route, ...props }) {

  const { color } = useContext(ThemeContext)
  const a = false;


  const [fullname, setFullname] = useState('Dev João Sousa')
  const [username, setUsername] = useState('devjoaosousa')
  const [email, setEmail] = useState('dev.joaosousa@gmail.com')
  const [password, setPassword] = useState('223761deJO@O@')
  const [user, setUser] = useState([])
  const [eye, setEye] = useState(true)
  const [bt, setBt] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
 


  async function handleRegister( ){
    setLoading(true)
   await Axios.post(`${API_URL}/jwt-auth/v1/register/person`,  
    {
      username: username,
      email: email, 
      password: password,
      name: fullname,
      user_status: 0,
    }
  ).then(response => {
    if(response){
      setUser(response)
      setLoading(false)
      navigation.navigate('Confirmation', {user: response.data, password: password,})
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
    
   
      <Image source={require('../../../assets/register_frame.png')} style={{
        width: "100%", height: 160, marginBottom: 20, marginTop: -20, resizeMode: 'contain'}}/>


      <Column>
        <Title>Criar conta</Title>
        <Label style={{textAlign: 'left', marginLeft: 24, fontSize: 18,}}>Crie uma conta e tenha acesso a diversas  funcionalidades especiais.</Label>
      
      </Column>
        
        <View style={{marginTop: 10, marginBottom: 0, paddingHorizontal: 24,}}>

          <Div/>

          <InputLabel>Nome completo</InputLabel>
          <Input 
            onChangeText={fullname => setFullname(fullname)} 
            value={fullname} 
          />
         <Spacing/>

          <InputLabel>Nome de usuário</InputLabel>
          <Input 
            onChangeText={username => setUsername(username)} 
            value={username} 
          />
         <Spacing/>

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
         
        <Button color="#5B72F2" onPress={handleRegister} off={false}>
          <>
          <View style={{flexGrow: 2,}}>
            {!loading && <ButtonLabel off={false}>Registrar</ButtonLabel> }
            {loading && <ActivityIndicator size={30} color="#fff"/> }
           </View> 
            <ButtonIcon/>
            <AntDesign style={{marginLeft: -35, marginRight: 28,}} name="arrowright" size={28} color="#FFF" />
          </>
        </Button>
        
        <Spacing/>
         <Subheadline>Já tem uma conta?</Subheadline>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Subheadline style={{color: color.primary, textDecoration: 'underline'}}>Acessar</Subheadline></TouchableOpacity>
        <Div/>
        </View>
         

    
  </Wrapper>
  </Main>
  )
}