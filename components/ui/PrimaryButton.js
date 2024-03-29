import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function PrimaryButton({ children, onPress }) {

    return <View style={styles.buttonOuterContainer}>

        <Pressable style={({ pressed }) => pressed ? [styles.container, styles.pressed] : styles.container} onPress={onPress} >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>

}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",

    },
    container: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        width: 100
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
})