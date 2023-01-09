import React from 'react'
import { View,Text,StyleSheet } from 'react-native'

export default function Titel({children}) {
  return (
   <View>
      <Text style={styles.Text}>{children}</Text>
   </View>
  )
}
const styles= StyleSheet.create({
    Text:{
       fontSize:30,
       borderWidth:2,
       borderColor:"red",
       padding:20,
       borderRadius:5,
       textAlign:'center',
       color:"#ff1a1a",
       fontWeight:"bold",
    }
})