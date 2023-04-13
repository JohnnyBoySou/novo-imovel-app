import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const View = styled.View`

`
export const Row = styled.View`
  flex-direction: row;
  display: flex;
`


export const Column = styled.View`
  flex-direction: column;
  display: flex;
`



export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${({ color }) => color};
  border-radius: 6px;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  align-content: center;
  flex-direction: row;
  justify-content: space-between;

`


export const ButtonLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  text-align: center;
  margin-top: 8px;
  flex-grow: 2;
  font-family: ${props => props.theme.font.medium};
`;

export const ButtonIcon = styled.View`
  width: 50px;
  border-left-color: #FFF;
  border-left-width: 2px;
  margin-top: -20px;
  margin-bottom: -20px;
`
