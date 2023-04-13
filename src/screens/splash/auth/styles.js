import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: #EFF1FF;
  flex: 1;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.bold};
  z-index: 999;
  margin-left: 24px;
`;

export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
  margin-top: 6px;
`;


export const UserTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size:32px;
  font-family: ${props => props.theme.font.book};
  z-index: 999;
  margin-left: 24px;
`;


export const UserName = styled.Text`
  color: ${props => props.theme.color.primary};
  font-size: 32px;
  font-family: ${props => props.theme.font.medium};
  z-index: 999;
  margin-left: 24px;
`;


export const Local = styled.View`
  flex-direction: row;
padding: 0px 24px 0px 24px;
  margin-top: 20px;
  justify-content: space-between;
  align-content: center;
`;



export const LocalText = styled.Text`
  color: ${props => props.theme.opacity.dez};
  font-size: 24px;
  margin-left: 6px;
  font-family: ${props => props.theme.font.medium};
  
`;





export const Subheadline = styled.Text`
  color:${props => props.theme.color.label};
  font-size: 20px;
  margin-top: 5px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;






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

export const AreaValor = styled.View`
  width: 80%;
  margin: 20px;
  align-self: center;
  justify-content: center;
  height: 100px;
  border-radius: 12px;
  background: ${props => props.theme.color.primary}10;

`






export const Select = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.activity ? "#5B72F2" : "#F1F3FF"};
  border-radius: 6px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
`

export const SelectLabel = styled.Text`
  color: ${props => props.activity ? "#FFF" : "#5B72F2"};
  font-size: 18px;
  font-family: ${props => props.activity ? "Font_Bold" : "Font_Medium"};
  text-align: center;
`;


export const Spacing = styled.View`
  width: 20px;
  height: 10px;
`

export const Spacing1 = styled.View`
  width: 10px;
  height: 10px;
`
export const Div = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}10;
`





export const InputLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  font-family: ${props => props.theme.font.medium};
  margin-bottom: 5px;
  margin-top: 10px;
`;


export const Input = styled.TextInput`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  padding: 6px 10px;
  font-family: ${props => props.theme.font.book};
  border-color: ${props => props.theme.color.primary}40;
  border-width: 2px; 
  width: 100%;
  border-radius: 6px;

`;



export const EyeBt = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary}20;
  border-radius: 6px;
  padding: 8px 10px;
  width: 48px; 
  height: 44px;
  align-content: center;
  margin-left: 10px;
  text-align: center;

`


export const ImgProfile = styled.View`
  width: 100px;
  height: 100px;
  background: grey;
  border-radius: 100px;
  align-self: center;
  margin-bottom: 20px;
  margin-top: 50px;
`

export const ErrorMsg = styled.Text`
  color: ${props => props.theme.color.red};
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
  margin-left: 24px;
  margin-right: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 6px;
  background:${props => props.theme.color.red}20;
  font-family: ${props => props.theme.font.medium};

`