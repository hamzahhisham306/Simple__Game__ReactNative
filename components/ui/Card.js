import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";
function Card({children}) {
    return (
        <View style={styles.card}>
              {children}
        </View>
    )
}


export default Card;

const styles = StyleSheet.create({
     card:{
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        marginTop: 100,
        backgroundColor: Colors.primary700,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        alignItems: "center",
     }
})