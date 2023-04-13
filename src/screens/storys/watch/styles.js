import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';

import {ScrollView} from 'react-native';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  padding-top: 0px;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.background};
  flex: 1;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 24px;
  font-family: ${props => props.theme.font.medium};
  margin-bottom: 6px;
  text-align: center;
`;

export const Label = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  text-align: center;
  border-radius: 8px;
  padding: 8px 24px;
  margin-top: 10px;
  align-self: center;
  background: ${props => props.theme.color.light}40;
  font-family: ${props => props.theme.font.medium};
`;


export const Modal = styled.View`
  margin: 24px 24px;
  padding: 20px;

`
 

