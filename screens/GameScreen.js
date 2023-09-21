import { StyleSheet, Text, View, SafeAreaView, Alert, } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from '../constants/colors'
import { Ionicons } from '@expo/vector-icons'
function generateRandomBetween(min, max, exlude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exlude) {
        return generateRandomBetween(min, max, exlude)
    }
    else {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ userNumber, onGameOver, setGuessRounds,guessRounds }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);
    function nextGuessHandler(direction) {
        if ((direction == 'lower' && currentGuess < userNumber) ||
            (direction == 'greater' && currentGuess > userNumber)) {
            Alert.alert("Do not lie!", "you know that this wrond..", [
                { text: "Sorry!", style: 'cancel', }
            ])
            return;
        }
        if (direction === "lower") {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
        setGuessRounds(guessRounds+1)
    }
    useEffect(()=>{
        minBoundary = 1
        maxBoundary = 100
    },[])
    return <View styles={styles.gameScreen}>
        <Title>
            Opponent Guess
        </Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
            <Text style={styles.textStyle}>Higher or lower</Text>
            <View style={styles.buttonsConatiner}>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')} ><Ionicons name="md-remove" size={24} color='white'/></PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}><Ionicons name="md-add" size={24} color='white'/> </PrimaryButton>
            </View>
        </View>

        {/* <Text>LOG ROUNDS</Text> */}
    </View>
}
export default GameScreen;

const styles = StyleSheet.create({
    gameScreen: {
        flex: 1,
        padding: 24,
    },
    textStyle: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
        color: Colors.primary600
    },
    buttonsConatiner: {
        justifyContent: 'center',
        flexDirection: 'row'
    }
})