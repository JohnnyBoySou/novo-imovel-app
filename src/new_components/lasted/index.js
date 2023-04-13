import React from 'react'
import { View,Dimensions,  FlatList , SafeAreaView } from 'react-native';

import { 

HeadLine,
Div,

 } from './styles'
const width = Dimensions.get('window').width;

import Skeleton from '../skeleton';
import { Row } from '../../theme/global';
import Empty from '../empty';
import RowFlow from '../lists/row_flow';

export default function Lasted({ route, ...props }){

  const data = props?.data
  const loading  = props?.loading

  const value_max = props.value_max

  const renderItem = ({ item }) => (
    <><RowFlow data={item} />
    <View style={{width: 10, height: 15,}}/></>
  ) 


  return(
    <View style={{paddingBottom: 20,}}>
      <Div/>        
      <View style={{flexDirection: 'row', 
      justifyContent: 'space-between', alignContent: 'center', marginBottom: 10, marginTop: 20,
      marginHorizontal: 20,}}>

        <View style={{width: width,}}>
          <HeadLine>Recentes ({data?.length})</HeadLine>
         </View>
       
       
      </View>

      {!loading && <View>{data?.length == 0 && <Empty/>}</View>}
  {loading && <Row>
   <Skeleton left={20} width="74%" height={220} radius={12}/>
   <Skeleton left={20} width="74%" height={220} radius={12}/>
  </Row>}
    <SafeAreaView style={{flex: 1,}}>
      <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            ListHeaderComponent={() => <View style={{width: 20, height: 20,}}/>}
            ListFooterComponent={() => <View style={{width: 20, height: 20,}}/>}
            renderItem={renderItem}
            keyExtractor={item => item.ID}
          />

          
    </SafeAreaView>

    </View>

  )
}




