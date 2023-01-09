import React from 'react';
import { StyleSheet, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartGamescreen from './src/Screens/StartGamescreen';
import GameStartScreen from './src/Screens/GameStartScreen';

export default function App() {
  const Stack = createNativeStackNavigator();
  const [userNumber,setruserNumber]=React.useState()
 
  // const user =(picknum)=>{
  //   console.log("pick",picknum)
  //    setruserNumber(picknum)
  // }

  function user(num){
    setruserNumber(num)
  }
  console.log("user",userNumber)

  return (
    <>

<NavigationContainer style={{backgroundColor:"#330026",flex:1}}>
      <Stack.Navigator>
        <Stack.Screen name="GameScreen" component={StartGamescreen} userNumber={user} />
        <Stack.Screen name="GameStartScreen" component={GameStartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
</>
  )
}

const styles=StyleSheet.create({
  
})