import styled from 'styled-components/native';
import { ImageBackground, TouchableOpacity } from 'react-native';

import { TouchableRipple } from 'react-native-paper';
export const Main = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
  margin-bottom: 6px;
  text-align: center;
`;

export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  text-align: center;
  line-height: 22px;
  font-family: ${props => props.theme.font.book};
`;




export const Tips = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  text-align: center;
  line-height: 22px;
  margin-top: 5px;
  font-family: ${props => props.theme.font.book};
`;

export const B = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  font-family: ${props => props.theme.font.bold};
`;






export const Spacing = styled.View`
  width: 20px;
  height: 20px;
`

export const Spacing1 = styled.View`
  width: 10px;
  height: 10px;
`


export const Spacing2 = styled.View`
  width: 40px;
  height: 40px;
`

export const Div = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}10;
`


export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background:${props => props.theme.color.primary};
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 20px;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;
`




export const ButtonLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 20px;
  text-align: center;
  margin-top: 2px;
  flex-grow: 2;
  font-family: ${props => props.theme.font.medium};
`;

export const ButtonIcon = styled.View`
  width: 60px;
  border-left-color: #FFF;
  border-left-width: 2px;
  margin-top: -20px;
  margin-bottom: -20px;
`


export const Circle = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 100px;
  background: #fff;
  justify-content: center;
  text-align: center;
  align-self: center;
  margin: 10px;
  `


  export const SubTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  margin-bottom: 6px;
  font-family: ${props => props.theme.font.medium};
  `;


  


export const UserTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.medium};
  `;

  
export const UserLogin = styled.Text`
color: ${props => props.theme.color.label};
font-size: 18px;
font-family: ${props => props.theme.font.book};
`;


export const UserLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  line-height: 22px;
  font-family: ${props => props.theme.font.book};
`;


export const UserSubTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  margin-bottom: 6px;
  font-family: ${props => props.theme.font.medium};
  `;


  export const BtIcon = styled(TouchableOpacity)`
  border-radius: 100px;
  justify-content: center;
  border: 2px solid #fff;
  width: 42px;
  height: 42px;
  position: absolute;
  bottom: -15px;
  align-self: center;   
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.light};
  font-size: 18px;
  padding-top: 0px;
  cursor: pointer;
`;


export const UserImg = styled.Image`
  width: 112px;
  height: 112px;
  border-radius: 200px;
  margin-left: 10px;
  margin-bottom: 20px;
  border: 3px solid #fff;
`


export const UserBack = styled.Image`
  width: 100%;
  height: 164px;
  margin: auto;
`

export const LocalLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  
`



export const Bt = styled(TouchableOpacity)`
border-radius: 6px;
justify-content: center;
height: 42px;
background: ${props => props.theme.color.primary};
color: ${props => props.theme.color.light};
font-size: 18px;
cursor: pointer;
padding: 10px 20px;
margin-top: 65px;
`;

export const BtLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  
`

