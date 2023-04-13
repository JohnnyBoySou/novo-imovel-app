import styled from 'styled-components/native';
import { ImageBackground , TouchableOpacity} from 'react-native';
import { TouchableRipple } from 'react-native-paper';
export const Main = styled.SafeAreaView`
  flex: 1;
  padding-top: 25px;
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
  margin-top: 12px;
  line-height: 22px;
  margin-bottom: 5px;
  font-family: ${props => props.theme.font.book};
`;




export const TabBar = styled.View`
  flex-direction: row;
  padding-top:10px;
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

export const TabBarTitle = styled.Text`
  color: ${props => props.focus ? "#5B72F2" : "#70779C90"};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
  text-align: center;
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

  
export const UserImg = styled.Image`
  width: 164px;
  height: 164px;
  border-radius: 200px;
  margin: auto;
  border: 2px solid #fff;
`

export const UserTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  text-align: center;
  margin-top: 10px;
  font-family: ${props => props.theme.font.medium};
  `;

export const UserLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
`;


export const SubTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  font-family: ${props => props.theme.font.medium};
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
&:focus { 
  border-color: ${props => props.theme.color.primary};
}
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