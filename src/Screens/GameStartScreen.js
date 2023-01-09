import React from 'react'
import {View,StyleSheet} from "react-native"
import NumberContainer from '../Components/NumberContainer'
import Titel from '../Components/Titel'
import Card from '../Components/card'
import InstructionText from '../Components/InstructionText'
import PrimaryButton from '../Components/PrimaryButton'

export default function GameStartScreen() {
  const opGuess=12

  return (
<View style={styles.numRoot}>
  <View style={styles.Titel}>
  <Titel>Oppoent's Guess</Titel>
  </View>
<NumberContainer>{opGuess}</NumberContainer>
<Card>
<InstructionText>Hihger Or Lower</InstructionText>
<View style={styles.containerScreen}>
  <View>
    <PrimaryButton>+</PrimaryButton>
  </View>
  <View>
    <PrimaryButton>+</PrimaryButton>
  </View>
</View>
</Card>
</View>
  )
}
const styles= StyleSheet.create({
  numRoot:{
     flexDirection:"column",
     margin:0,
     width:"100%",
     height:"50%"
  },
  containerScreen:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly",
    marginTop:20
  },
  Titel:{
    width:"80%",
    flexDirection:"column",
    justifyContent:"center",
    alignSelf:"center",
    marginTop:15,
  }
})
