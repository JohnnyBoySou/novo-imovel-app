
import React, { useContext }  from 'react';
import { ThemeContext } from 'styled-components/native';
import { Entypo, SimpleLineIcons, Feather} from '@expo/vector-icons';
import { useNavigation  } from '@react-navigation/native';



import { 
  Card,
  CardIcon,
  CardTitle,
  CardLabel, 
  Bt
} from './styles'

import { Column } from '../../theme/global';


export default function QuickCard({ route, ...props }){

  const navigation = useNavigation();
  const icon = props?.icon
  const title = props?.title
  const label = props?.label
  const screen = props?.screen
  
  const { color, opacity } = useContext(ThemeContext)

  const handleGo = () => {
    if(!screen === undefined){
    navigation.navigate(screen)
  }
  }
  
  return(
    <Card onPress={handleGo}>
    <CardIcon>
      {icon === "search" && <Feather name="search" style={{alignSelf: 'center'}} size={24} color={color.light} />}
      {icon === undefined && <Entypo style={{alignSelf: 'center'}} name="price-tag" size={24} color={color.light} />}
    </CardIcon> 
    <Column  style={{justifyContent: 'center'}}>
      <CardTitle>{title}</CardTitle>
      <CardLabel>{label}</CardLabel>
    </Column>
    <Bt>
    <SimpleLineIcons name="arrow-right" size={24} color={color.light} />

    </Bt>
  </Card>
  )
}




