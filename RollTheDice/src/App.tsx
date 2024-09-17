import React, { useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import {PropsWithChildren} from 'react';
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options={
  enableVibrateFallback:true,
  ignoreAndroidSystemSettings:false,
}

const Dice = ({imageUrl}: DiceProps): JSX.Element => {
  return (
    <>
      <View>
        <Image style={styles.diceImage} source={imageUrl} />
      </View>
    </>
  );
};

function App(): React.JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);
  const [diceImage2,setDiceImage2]=useState<ImageSourcePropType>(DiceOne);

  const rollDice = () => {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    switch (randomNum) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
    RNReactNativeHapticFeedback.trigger("impactLight",options);
  };

  const rollDice2 = () => {
    let randomNum2 = Math.floor(Math.random() * 6) + 1;
    switch (randomNum2) {
      case 1:
        setDiceImage2(DiceOne);
        break;
      case 2:
        setDiceImage2(DiceTwo);
        break;
      case 3:
        setDiceImage2(DiceThree);
        break;
      case 4:
        setDiceImage2(DiceFour);
        break;
      case 5:
        setDiceImage2(DiceFive);
        break;
      case 6:
        setDiceImage2(DiceSix);
        break;
      default:
        setDiceImage2(DiceOne);
        break;
    }
    RNReactNativeHapticFeedback.trigger("impactLight",options);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Dice imageUrl={diceImage} />
        <Dice imageUrl={diceImage2} />
        <Pressable onPress={() => {
          rollDice(),
          rollDice2()
        }} style={styles.press}>
          <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    top: 200,
  },
  diceContainer: {
    margin: 20,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#000000',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  press: {
    alignSelf: 'center',
  },
});
export default App;
