import { StyleSheet, Image,Text, View, Button } from "react-native";
import Title from "../components/ui/Title";
import  Color from '../constants/colors'

function GameOverScreen({startNewGame, userNumber, roundsNumber}) {
    return (
        <View style={styles.rootConainer}>
            <Title>GAME OVER!</Title>
            <View>
                <Image style={styles.imageContainer} source={require('../assets/images/success.png')} />
            </View>
            <View>
                <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
            </View>
            <View style={styles.btn}>
            <Button
             title="start a new Game"
             onPress={startNewGame}
            />
            </View>
        </View>
    )
}

export default GameOverScreen;
const styles = StyleSheet.create({
    rootConainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 200,
        marginTop: 30,
        width: 300,
        height: 300,
        borderWidth: 3,
        margin: 46,
        borderColor: 'red'
    },
    summaryText:{
        fontSize:25
    },
    highlight:{
        fontWeight:'bold',
        color:Color.primary500
    },
    btn:{
        marginVertical:10
    }
})