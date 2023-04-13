import styled from 'styled-components/native';
import { Surface, TouchableRipple } from 'react-native-paper';


import { ImageBackground } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: #FFF;
  flex: 1;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  font-family: ${props => props.theme.font.bold};
  margin-left: 24px;
  z-index: 999;
`;

export const Label = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  margin-top: 6px;
`;


export const CheckLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  margin-top: 4px;
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
  background: ${props => props.activity ? "#5B72F2" : "#5B72F220"};
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  margin-bottom: 10px;
  margin-right: 10px;
  flex-grow: 1;
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
  margin-bottom: 15px;
  margin-top: 15px;
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


export const Step = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
  onPress: () => {},
}))`
  background:${props => props.theme.color.primary};
  border-radius: 66px;
  margin-bottom: 10px;
  margin-top: 10px;
  margin-left: 20px;
  width: 58px;
  height: 58px;
  border: solid 8px #D1D8FC;
  text-align: center;
  justify-content: center;
`



export const StepLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 22px;
  font-family: ${props => props.theme.font.medium};
  margin-bottom: 5px;
  margin-top: 10px;
  text-align: center;
  align-self: center;
`;

export const StepImg = styled.Image`
  width: 100px;
  height: 50px;
  margin-top: 15px;
`






export const NextBt = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary};
  border-radius: 6px;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  padding: 12px 10px;
  justify-content: center;  
  flex-grow: 1;
`


export const NextLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
`;



export const BackBt = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`

  border-radius: 6px;
  border: 2.5px solid ${props => props.theme.color.title}40;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  padding: 12px 10px;
  justify-content: center;
  flex-grow: 1;
`


export const BackLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;  flex-grow: 1;
`;


export const Circle = styled.View`
  width: 44px;
  justify-content: center;
  height: 44px;`






export const SelectCircle = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.activity ? "#5B72F2" : "#5B72F220"};
  border-radius: 100px;
  padding-top: 10px;
  flex-grow: 1;
  text-align: center;
 `

export const SelectCircleLabel = styled.Text`
  color: ${props => props.activity ? "#FFF" : "#5B72F2"};
  font-size: 20px;
  font-family: ${props => props.activity ? "Font_Bold" : "Font_Medium"};
  text-align: center;
`;




export const UploadBt = styled(TouchableRipple).attrs(() => ({
  borderless: true, 
  rippleColor: "#FFFFFF90",
}))`
  background: ${props => props.theme.color.primary}20;
  border-radius: 12px;
  text-align: center;
  flex-grow: 1;
  padding-top: 30px;
  padding-bottom: 30px;
  justify-content: center;
 `

 

export const UploadLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-align: center; 
`;



export const List = styled.View`
  margin: 10px 0px;
  border-radius: 8px;
  background: ${props => props.theme.color.primary}20;
  padding: 12px 20px;
  margin-top: 20px;
   `


  export const Li = styled.Text`
   color: ${props => props.theme.color.label};
   font-size: 18px;
   font-family: ${props => props.theme.font.book};
   margin-bottom: 4px;
 `;

 
export const Ball = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 30px;
  margin-top: 7px;
  margin-right: 6px;
  background: ${props => props.theme.color.primary};
 `


 

export const NewCircle = styled.View`
width: 120px;
height: 120px;
border-radius: 100px;
background:${props => props.theme.color.primary}20;
justify-content: center;
text-align: center;
align-self: center;
margin: 10px;
`
