import React from 'react'
import { View,Dimensions,  FlatList , SafeAreaView } from 'react-native';
import { 
HeadLine,
HeadLabel,
Div,
 } from './styles'


const width = Dimensions.get('window').width;

import RowStorys from '../lists/row_storys/index';
import { Row } from '../../theme/global';
import Skeleton from '../skeleton';

export default function Price({ route, ...props }){
  const data = props?.data
  const loading = props?.loading

  const value_max = props.value_max

  const renderItem = ({ item }) => (
    <RowStorys data={item}  />
  ) 


  
  return(
    <View style={{paddingBottom: 20,}}>
      <Div/>        
      <View style={{marginBottom: 10, marginTop: 20,
      marginHorizontal: 20,}}>

          <HeadLine>Até R$ {value_max} ({data.length})</HeadLine>

      </View>

     
      {loading && <Row>
          <Skeleton width={150} height={200} radius={8} left={20}/>
          <Skeleton width={150} height={200} radius={8} left={20}/>
          <Skeleton width={150} height={200} radius={8} left={20}/>
        </Row>}

    <SafeAreaView style={{flex: 1,}}>

      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            ListFooterComponent={() => <View style={{width: 30, height: 20,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.ID}
          />

          
    </SafeAreaView>

    </View>

  )
}




