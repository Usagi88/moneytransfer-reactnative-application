import React from 'react';
import {GestureResponderEvent, Text, TouchableNativeFeedback, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';

interface GradientButtonType {
    text: string;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
  }

const GradientButton = (props: GradientButtonType) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableNativeFeedback onPress={props.onPress} useForeground={true}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#3AC170', '#25BFA3']}
          style={styles.button}>
          <Text style={styles.buttonText}>{props.text}</Text>
        </LinearGradient>
      </TouchableNativeFeedback>
    </View>
  );
};

export default GradientButton;

const styles = EStyleSheet.create({
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  button: {
    borderRadius: 10,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
  },
});
