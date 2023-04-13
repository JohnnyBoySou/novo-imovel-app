import React, { useEffect, useState, useRef, useCallback, useContext } from 'react';
import { View, TouchableOpacity,  Text,  } from 'react-native';


import { Ionicons, Fontisto , Feather, } from '@expo/vector-icons';


import {  
  Title, 
  HeaderMain,
  Back,
  Label,
} from './styles';


import { ThemeContext } from 'styled-components/native';
import { useNavigation, } from '@react-navigation/native';

import {useNetInfo} from '@react-native-community/netinfo';

export default function Internet({ route, ...props }) {

  
  const { color } = useContext(ThemeContext)

  const netInfo = useNetInfo();
  const [messageConnection, setMessageConnection] = useState('Connected');

  useEffect(() => {
    if (netInfo.isConnected) {
      setMessageConnection(true);
    } else {
      setMessageConnection(false);
    }
  }, [netInfo]);
  

return (<>
  {messageConnection == false && 

    <HeaderMain>
      <Back>
        <Feather style={{textAlign: 'center',}} name="wifi-off" size={24} color={color.title} />
      </Back>

      <View style={{marginLeft: 6, width: '86%'}}>
        <Title>Sem conexão com a rede</Title>
        <Label>Tente novamente mais tarde.</Label>
      </View>
    </HeaderMain>

    }

  
      


    </>
    
  )
}