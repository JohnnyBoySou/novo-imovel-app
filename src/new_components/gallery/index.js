import React, { useContext, useEffect, useState} from 'react';
import { TouchableOpacity, FlatList, Image} from 'react-native';
import { 
  Container, 
  Title,
  View,

} from './styles';


export default function Gallery ({ navigation, route, ...props } ) {
  
  const item = props?.data
  const [loading, setLoading] = useState(true)

  const data = [ item?.imagem1, item?.imagem2, item?.imagem3, item?.imagem4, item?.imagem5, item?.imagem6, item?.imagem7, item?.imagem8, ]

  const Images = ({ item }) => (
    <>{item != undefined &&
      <TouchableOpacity >
        <Image style={{height: 140, backgroundColor:'#00000020', borderRadius: 12, width: 120, marginLeft: 20,}} source={{uri: item}}/>
     </TouchableOpacity>
    } </>
    )

  return (
    
    <Container>    
      <FlatList  
        style={{ marginLeft: -24, marginRight: -24, marginTop: 10,}}
        data={data} 
        keyExtractor={item => item} 
        showsHorizontalScrollIndicator={false}  
        horizontal 
        ListFooterComponent={<View style={{width: 40}}/>}
        decelerationRate={'normal'} 
        renderItem={Images}/>
       
    </Container>
  );
};
