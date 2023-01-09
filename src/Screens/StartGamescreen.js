import React from 'react'
import { TextInput, View,StyleSheet,Alert} from 'react-native'
import Card from '../Components/card'
import InstructionText from '../Components/InstructionText'
import PrimaryButton from '../Components/PrimaryButton'
import Title from '../Components/Titel'
import GameStartScreen from './GameStartScreen'


export default function StartGamescreen({navigation,userNumber}) {

  const [enterInput,setInput]=React.useState("")

  const InputChangetext=(userInput)=>{
    setInput(userInput)
  }
  console.log("enterInput----",enterInput)
const GameDirectScreen =()=>{
  const choosenumber=parseInt(enterInput)
  console.log(choosenumber>99 || choosenumber<=0||choosenumber.length<=0,"choosenumber")
  if( (choosenumber>99 || choosenumber<=0||isNaN(choosenumber))){
    Alert.alert(
      "Inavalid number!",
      "Number has to be a number between 1 and 99.",
      [{ text: "Okay", style: "destructive", onPress:resetInputHandeler}]
    );
  }
  else if((choosenumber>99 || choosenumber<=0||choosenumber.length>0)===true){
    navigation.navigate('GameStartScreen')
  }
  return
}
// userNumber(choosenumber)
const resetInputHandeler=()=>{
  console.log("resetclicked")
  setInput("")
}

  return (
  <View style={styles.rootcontainer1}>
    <View  style={styles.rootcontainer}>
   <Title>Guess The Number</Title>
    <Card>
        <InstructionText>Enter Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          value={enterInput}
          onChangeText={(enterText)=>InputChangetext(enterText)}
        />
            <View style={styles.rootBtnContainer}>
            <View style={{margin:5}}>
            <PrimaryButton onpress={resetInputHandeler}>Reset</PrimaryButton>
            </View>
            <View style={{margin:5}}>
            <PrimaryButton onpress={GameDirectScreen}>Confirm</PrimaryButton>
            </View>
            </View>
    </Card>
    </View>
  </View>
  )
}

const styles= StyleSheet.create({

  rootcontainer1:{
  width:"100%",
  },
    rootcontainer:{
    padding:5,
    marginTop:50,
    // flexDirection:"column",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    margin:5,
    },
    rootBtnContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    numberInput: {
        width: 50,
        height: 50,
        borderBottomColor:"gold",
        borderBottomWidth: 2,
        marginVertical: 20,
        color:"gold",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
        padding:0
      },
})