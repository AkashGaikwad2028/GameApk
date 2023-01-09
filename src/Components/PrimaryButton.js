import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function PrimaryButton({ children,onpress}) {
  return (
  <TouchableOpacity style={styles.Buttoncontainer} onPress={onpress}>
    <Text style={styles.BtnText}>{children}</Text>
  </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  Buttoncontainer:{
  backgroundColor:"#3333ff",
  paddingVertical:5,
  paddingHorizontal:36,
  borderRadius:6,
  },
    BtnText:{
        fontSize:25,
        color:"black",
        fontWeight:"bold"
    }
})