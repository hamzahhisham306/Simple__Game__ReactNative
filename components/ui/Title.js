import { StyleSheet, Text } from "react-native"

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

export default Title

const styles = StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:24,
        color:"#ddb52f",
        textAlign:'center',
        borderWidth:2,
        borderColor:"#ddb52f",
        padding:12,

    }
})