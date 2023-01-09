import { View, StyleSheet, Text } from "react-native";
import Colors from "../Constants/Color";


function Card({children}) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;



const styles = StyleSheet.create({
  card: {
  width:"90%",
  height:"70%",
   paddingVertical:50,
    paddingHorizontal:20,
    borderRadius: 10,
    marginTop:36,
    marginHorizontal:20,
    alignItems: "center",
    backgroundColor:"#cc0099",
    elevation: 4,
    justifyContent: "center",
    shadowColor: "red",
    shadowOffset: { width: 0, height: 20},
    shadowRadius: 10,
    shadowOpacity: 0.25,
  },
});
