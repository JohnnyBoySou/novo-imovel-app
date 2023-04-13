import React from 'react'
import { View } from 'react-native';

export default function Skeleton({ ...props }){
  const width = props?.width
  const height = props?.height
  const radius = props?.radius
  const left = props?.left
  const right = props?.right

  return(
    <View style={{width: width, height: height, backgroundColor: "#D9D9D9", borderRadius: radius, marginLeft: left, marginRight: right}}/>

  )
}




