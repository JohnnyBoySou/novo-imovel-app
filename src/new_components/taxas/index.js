import React from 'react'

import {
    Lista,
    Tax,
    Infra,
    InfraLabel,
    TaxLi,
    Ball,
} from './styles';

import { Ionicons } from '@expo/vector-icons';


const Taxas = ({ route, ...props } ) =>  {
    const tax = props?.item
    console.log(tax)
    const taxas = tax.taxas;
    return(

        <Tax>
            <Lista style={{marginBottom: 8}}>
            <Infra style={{backgroundColor: color.secundary, marginTop: -2, marginRight: -4,}}>
                <Ionicons style={{textAlign: 'center'}} name="add" size={14} color="#FFF" /></Infra>
            <InfraLabel style={{color: "#B55025", fontSize: 18, fontFamily: 'Font_Medium',}}>Taxas adicionais</InfraLabel>
            </Lista>
            <View style={{marginTop: -4}}>
                {taxas?.map((taxas) => 
                <View style={{flexDirection: 'row'}}>
                <Ball style={{backgroundColor: "#906959", marginBottom:4,  }}/>
                <TaxLi style={{color: "#906959"}} key={taxas}>{taxas}</TaxLi></View> )}
            </View>  
        </Tax>
)
}

export default Taxas;