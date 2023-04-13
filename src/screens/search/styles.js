import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Main = styled.SafeAreaView`
  flex: 1;
  background: ${props => props.theme.background};

`


export const Wrapper = styled.ScrollView`
  background: ${props => props.theme.color.primary};
  flex: 1;
  padding-top: 30px;
`;


export const Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  font-family: ${props => props.theme.font.bold};
`;



export const SubTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
`;


export const B = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 22px;
  font-family: ${props => props.theme.font.bold};
`;

export const Label = styled.Text`
  color: #F1F3FF;
  font-size: 18px;
  margin-top: 2px;
  font-family: ${props => props.theme.font.book};
`;



export const SubLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 18px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
  margin-top: 0px;
`;



export const Subheadline = styled.Text`
  color:${props => props.theme.color.label};
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;




export const Valor = styled.Text`
  color:${props => props.theme.color.title};
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.font.book};
  
`;



export const SplashImg = styled.View`
  width: 300px;
  height: 300px;
  align-self: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 40px;

`








export const Button = styled(TouchableOpacity)`
  background: ${props => props.theme.color.primary};
  border-radius: 6px;
  width: 62px;
  height: 56px;
  justify-content: center;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
`

export const Input = styled.TextInput`
  height: 56px;
  flex-grow: 2;
  border-radius: 4px;
  background: ${props => props.theme.color.off};
  padding: 10px 20px;
  font-family: ${props => props.theme.font.book};
  font-size: 20px;
  color: ${props => props.theme.color.title};
  border-top-right-radius: 0px;
  border-color: #000;
  border-bottom-right-radius: 0px;
  border-color: ${props => props.activity ? "#5B72F2" : "#F1F3FF"};
  border-width: 2.5px;
  border-right-width: 0px;
`

export const InputValue = styled.TextInput`
  height: 46px;
  border-radius: 4px;
  padding: 10px;
  font-family: ${props => props.theme.font.book};
  font-size: 20px;
  color: ${props => props.theme.color.title};
  border-color: #5B72F230;
  border-width: 2.5px;
  width: 100%;
`


export const QuickInput = styled.TextInput`
  height: 56px;
  flex-grow: 2;
  border-radius: 4px;
  background: ${props => props.theme.color.off};
  padding: 10px 20px;
  font-family: ${props => props.theme.font.book};
  font-size: 20px;
  color: ${props => props.theme.color.title};
  border-top-right-radius: 0px;
  border-color: #000;
  border-bottom-right-radius: 0px;
  border-color: ${props => props.activity ? "#5B72F2" : "#F1F3FF"};
  border-width: 2.5px;
  border-right-width: 0px;
`








export const Filter = styled(TouchableOpacity)`
  background: ${props => props.theme.color.title};
  border-radius: 100px;
  padding: 10px 20px;
  justify-content: center;
  width: 100px;
  margin-left: 24px;
  margin-top: 14px;
  margin-bottom: 20px;
`






export const Spacing = styled.View`
  width: 20px;
  height: 20px;
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





export const Clean = styled(TouchableOpacity)`
  background: ${props => props.theme.color.red};
  border-radius: 40px;
  width: 100px;
  margin-left: 24px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 5px;
`

export const CleanLabel = styled.Text`
  color: ${props => props.theme.color.light}
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
  text-align: center;
`;





export const Modal = styled.View`
  margin: 20px 20px;
  padding-top: 0px;
  padding-bottom: 20px;

`




export const Item1 = styled(TouchableOpacity)`
  background: #fff;
  border-radius: 6px;
  border-color: #E7E7E7;
  border-width: 1px;
  padding-left: 20px;
  padding-top: 16px;
  padding-bottom: 16px;
  margin-top: 20px;
`


export const Item1Title = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 20px;
  font-family: ${props => props.theme.font.medium};
  margin-bottom: 2px;
  text-align: center;
`
export const ItemIcon = styled.View`
  width: 32px;
  text-align: center;
  justify-content: center;
  height: 32px;
  border-radius: 6px;
  background: ${props => props.theme.color.primary};
  color:  ${props => props.theme.color.light};
`

export const Item1Label = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 18px;
  font-family: ${props => props.theme.font.medium};
`


export const Button1 = styled(TouchableOpacity)`
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





export const ButtonL1abel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 20px;
  text-align: center;
  margin-top: 2px;
  flex-grow: 2;
  font-family: ${props => props.theme.font.medium};
`;

export const Button1Icon = styled.View`
  width: 60px;
  border-left-color: #FFF;
  border-left-width: 2px;
  margin-top: -20px;
  margin-bottom: -20px;
`




export const BtHandle = styled(TouchableOpacity)`
  background: ${props => props.color};
  border-radius: 30px;
  padding: 10px 20px; 
  justify-content: center;
  `

  export const BtText = styled.Text`
  color: ${props => props.color};
  font-size: 18px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`;



export const BtCircle = styled(TouchableOpacity)`
  background: ${props => props.theme.color.primary}20;
  border-radius: 30px;
  width: 44px;
  height: 44px; 
  justify-content: center;
  `

  
  export const BtCircleLabel = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 24px;
  text-align: center;
  font-family: ${props => props.theme.font.medium};
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  background: ${props => props.theme.color.primary}20;
`




export const ButtonValue = styled(TouchableOpacity)`
  background: ${props => props.theme.color.primary};
  border-radius: 6px;
  align-content: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  margin-right: -6px;
`



export const ButtonValueLabel = styled.Text`
  color: ${props => props.theme.color.light};
  font-size: 20px;
  font-family: ${props => props.theme.font.book};
  align-self: center;
`;




export const Card = styled.View`
  background: ${props => props.theme.color.light};
  border-radius: 12px;
  padding: 12px;
`;


export const Filters = styled(TouchableOpacity)`
  border-radius: 6px;
  padding: 14px;
  margin-top: 10px;
  background: ${props => props.theme.color.primary}20;
  justify-content: center;
`

export const FiltersLabel = styled.Text`
  color: ${props => props.theme.color.label};
  font-size: 16px;
  font-family: ${props => props.theme.font.book};
`;

export const FilterBt = styled(TouchableOpacity)`
  background: ${props => props.theme.color.primary};
  border-radius: 100px;
  padding: 10px;
  width: 26px;
  height: 26px;
  text-align: center;
  justify-content: center;
  
  `


export const FiltersTitle = styled.Text`
  color: ${props => props.theme.color.title};
  font-size: 28px;
  font-family: ${props => props.theme.font.medium};
`;



export const Select = styled(TouchableOpacity)`
  background: ${props => props.activity ? "#5B72F2" : "#F1F3FF"};
  border-radius: 6px;
  padding-top: 10px;
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  flex-grow: 1;
  border: 2px solid #5B72F2;
`

export const SelectLabel = styled.Text`
  color: ${props => props.activity ? "#FFF" : "#5B72F2"};
  font-size: 18px;
  font-family: ${props => props.activity ? "Font_Bold" : "Font_Medium"};
  text-align: center;
`;

export const Circle = styled.View`
  background: ${props => props.theme.color.light}30;
  border-radius: 100px;
  justify-content: center;
  width: 82px;
  height: 82px;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

