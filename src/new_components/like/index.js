
import React, { useState, useEffect }  from 'react';
import { AntDesign } from '@expo/vector-icons';
import {  
  LikeAs,
  LikeEs
} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Like({route, ...props }){


  const code = props.codigo
  const type = props.type

  useEffect(() => {
    getSaveIDs()
  },[])

  const [listIDS, setListIDS] = useState([])
  const [ativo, setAtivo] = useState(false);

  const getSaveIDs = async ( next ) => {
    try {
      const value = await AsyncStorage.getItem('@SAVE__IDS')
      if(value !== null) {
        const result = JSON.parse(value)
        setListIDS(result)
        getInitial(result, code)
      }
    } catch(e) {
      console.log(e)
    }
  }

  const getInitial = (array, value) => {
    if (array.indexOf(value) > -1) {
     setAtivo(true)
    }else{setAtivo(false)}
  }


  const saveCode = async ( value ) => {
      try {
        console.log(value)
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@SAVE__IDS', jsonValue)
      } catch (e) {
        console.log(e)
      }
    }

  
  function action(){
    setAtivo(!ativo)
    atualizarSaveIDS(listIDS, code)
  }


    function atualizarSaveIDS (array, value) {
      if (array.indexOf(value) === -1) {
          array.push(value)
          saveCode(array)
      } else if (array.indexOf(value) > -1) {
          array.splice(array.indexOf(value), 1)
          saveCode(array)
      }
    }


  return(
    <>
    {type && 
    <LikeEs color="#5B72F2" off={ativo} onPress={action} >
      <>
        {ativo === false && <AntDesign style={{textAlign: 'center'}} name="hearto" size={24} color="#EB5757" />}
        {ativo === true && <AntDesign style={{textAlign: 'center'}} name="heart" size={24} color="#EB5757" />}
      </>
    </LikeEs>
    }
     
     
     {type == undefined && 
     <LikeAs color="#5B72F2" off={ativo} onPress={action} >
        <>
          {ativo == false && <AntDesign style={{textAlign: 'center'}} name="hearto" size={24}color="#5B72F2" />}
          {ativo == true && <AntDesign style={{textAlign: 'center'}} name="heart" size={24} color="#FFFFFF" />}
        </>
      </LikeAs>}
    </>

  )
}




