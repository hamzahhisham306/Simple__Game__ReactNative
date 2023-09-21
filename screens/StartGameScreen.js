import { TextInput, Button, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from 'react';
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
function StartGameScreen({ setGameScreen, onPickNumber }) {
    const [enteredNumber, setEntereedNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEntereedNumber(enteredText)
    }
    function confirmInputHandler() {
        const choeseNumber = parseInt(enteredNumber);
        if (isNaN(choeseNumber) || choeseNumber <= 0 || choeseNumber > 90) {
            // show alert...
            Alert.alert("Invalid number", "Number has to be from 1 to 99", [{ text: "Okay", style: "destructive", onPress: resetInputHandler }])

        }
        setGameScreen(true)
        onPickNumber(choeseNumber)
    }
    function resetInputHandler() {
        setEntereedNumber('')
    }

    return <View style={styles.rootContainer}>
        <Title>Guess My Number</Title>
        <Card style={styles.inputContainer}>
            <Text style={styles.textStyle}>Enter a Number</Text>
            <TextInput
                maxLength={2}
                placeholder="Enter the number"
                style={styles.numberInput}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsConinaer}>
                <PrimaryButton onPress={resetInputHandler}>
                    Reset
                </PrimaryButton>
                <PrimaryButton onPress={confirmInputHandler}>
                    Confirm
                </PrimaryButton>
            </View>
        </Card>
    </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

    textStyle: {
        color:Colors.white,
        fontSize:20
    }

    ,
 
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.primary600,
        borderBottomWidth: 2,
        color: Colors.primary600,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: "center",
    },
    buttonsConinaer: {
        flexDirection: 'row'
    }
});