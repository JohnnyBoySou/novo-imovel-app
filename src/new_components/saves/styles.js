import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`;


export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  margin-top: 2px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
`;

export const Icon = styled.View`
width: 72px;
height: 72px; 
background: ${props => props.theme.color.primary}20;
border-radius: 50px;
justify-content: center; 
margin-bottom: 10px;
align-self: center;
`;


export const Bt = styled.Text`
  color: ${props => props.theme.color.light};
  background: ${props => props.theme.color.primary};
  font-size: 16px;
  text-align: center;
  align-self: center;
  margin: auto;
  padding: 10px 14px;
  border-radius: 4px;
  margin-top: 12px;
  font-family: ${props => props.theme.font.medium};
`;

