import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';



export const Valor = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 14px;
  text-align: center;
  padding: 8px 10px;
  font-family: ${props => props.theme.font.medium};
  

`


export const Chip = styled.View`
  align-self: flex-end;
  margin-right: 15px;
  justify-content: flex-start;
  margin-top: 15px;
  border-radius: 8px;
  background: ${props => props.theme.color.primary};
`


export const ID = styled.View`
  justify-content: center;
  align-self: center;
  border-radius: 30px;
  background: #FCA079;
`

export const IDLabel = styled.Text`
  color: #fff;
  font-size: 12px;
  padding: 6px 10px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`;



export const Description = styled.View`
  margin-top: 10px;
  
`


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
`;





export const HeadLine = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
`;



export const HeadLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
`;


export const Div = styled.View`
  width: 100%;
  height: 2px;
  background-color: ${props => props.theme.color.off};

`



export const Button = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.off ? "#EB5757" : "#5B72F2"};
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

