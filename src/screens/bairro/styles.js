import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Main = styled.SafeAreaView`
  flex: 1;
  padding-top: 30px;
  background: ${props => props.theme.background};
`




export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;
export const Div = styled.View`
  height: 1px;
  background: ${props => props.theme.opacity.dois};
`;



export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  font-family: ${props => props.theme.font.bold};
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  font-family: ${props => props.theme.font.medium};
`



export const TabBarTitle = styled.Text`
  color: ${props => props.focus ? "#5B72F2" : "#70779C90"};
  font-size: 22px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`;


export const Img = styled.Image.attrs(() => ({
}))`
  width: 350px;
  height: 280px;
  border-radius: 12px;
`;


export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`;



export const SubLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  
`;



export const TabBar = styled.View`
  flex-direction: row;
  padding-top: 0px;
  width: 100%;
  align-items: center;
  background-color: ${props => props.theme.background};
`;



export const TabBarButton = styled(TouchableOpacity)` 
  border-bottom-color: ${props => props.focus ? "#5B72F2" : "#F1F3FF"};
  border-bottom-width: 3px;
  padding: 10px 16px;
  width:  ${props => props.w}
  background-color: ${props => props.theme.background};
`

export const TabBarLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`




