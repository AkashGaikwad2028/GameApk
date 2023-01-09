import React from 'react'
import {Text,StyleSheet} from "react-native"

export default function InstructionText( {children}) {
  return (
    <Text style={styles.intructionText}>
        {children}
    </Text>
  )
}

const styles=StyleSheet.create({
  intructionText:{
    color:"white",
    fontWeight:"bold",
    fontSize:35
  }
})
