import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';


export const Card = styled(TouchableOpacity )`
  margin: 10px 20px;
  background: ${props => props.theme.color.primary};
  padding: 10px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: space-between;
  
`
export const CardIcon = styled.View`
  margin: 8px;
  background: ${props => props.theme.color.light}20;
  padding: 10px;
  border-radius: 100px;
  width: 54px;
  height: 54px;
  
`


export const CardTitle = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
`;


export const CardLabel = styled.Text`
  color: ${props => props.theme.color.light}90;
  font-size: 14px;
  margin-top: 5px;
  font-family: ${props => props.theme.font.book};
`;

export const Bt = styled(TouchableOpacity)`
justify-content: center; 
margin-right: 20px; 
margin-left: 40px;
`