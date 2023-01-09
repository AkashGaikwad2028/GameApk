import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
export default function NumberContainer({opGuess}) {

  return (
    <View style={styles.container}>
    <Text style={styles.numRoot}>{opGuess}</Text>
    </View>
  )
}
const styles= StyleSheet.create({
    numRoot:{
      borderWidth:5,
      padding:5,
      fontSize:30,
      textAlign:"center",
      color:"gold",
      borderRadius:10,
      fontWeight:"bold",
      borderColor:"gold"
    },
    container:{
        width:"100%",
        marginTop:20,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    }
  })
  