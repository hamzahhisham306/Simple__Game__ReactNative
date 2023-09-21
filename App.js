import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';
export default function App() {
  const [showGameScreen, setGameScreen] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [gamerOver, setGameOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0)
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
  if (!fontsLoaded) {
    return <AppLoading />
  }
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} setGameScreen={setGameScreen} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} setGuessRounds={setGuessRounds} guessRounds={guessRounds}/>
  }
  if (gamerOver) {
    screen = <GameOverScreen startNewGame={startNewGame} userNumber={userNumber} roundsNumber={guessRounds} />
  }
  function gameOverHandler() {
    setGameOver(true)
  }
  function startNewGame(){
    setGameOver(false)
    setUserNumber();
    setGuessRounds(0)

  }

  return (
    <LinearGradient style={styles.rootScreen} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground source={require('./assets/images/background.png')} imageStyle={styles.backgroundImage} resizeMode='cover' style={styles.rootScreen}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15
  }
});
