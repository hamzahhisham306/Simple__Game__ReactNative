import { View , Text, StyleSheet} from "react-native";
import  Colors from "../../constants/colors";


function NumberContainer({ children }) {
    return <View style={styles.continer}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;


const styles = StyleSheet.create({
    continer:{
        borderWidth:4,
        borderColor:Colors.white,
        padding:24,
        margin:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
      color:Colors.white,
      fontSize:64,
      fontFamily:'open-sans-bold'
    }
})