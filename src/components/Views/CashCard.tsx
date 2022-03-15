import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import BannerAmount from '../common/BannerAmount';
import Navbar from '../common/Navbar';
import LinearGradient from 'react-native-linear-gradient';

const CashCard = () => {
  const [amount, onChangeAmount] = useState<any>(null);
  const [processingFee, onChangeProcessingFee] = useState<any>(null);
  const [total, onChangeTotal] = useState<any>(null);

  return (
    <>
      <Navbar />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <Text style={styles.firstSentence}>
          Enter the amount you wish to add to fahipay via BML payment gateway
        </Text>
        <Text style={styles.inputText}>Amount</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAmount}
            value={amount}
            placeholder="Amount"
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.inputText}>Processing Fee</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeProcessingFee}
            value={processingFee}
            placeholder="Processing Fee"
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.inputText}>Total</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTotal}
            value={total}
            placeholder="Total"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.button}>
              <Text style={styles.buttonText}>Proceed to BML Gateway</Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Image
            source={require('../../assets/images/bml-gateway.png')}
            style={{resizeMode: 'cover'}}
          />
        </View>

        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <Text style={{color: '#747373'}}>
            By clicking the proceed button, you agree to accept our terms of
            service agreement
          </Text>
          <Text style={{color: 'red'}}>
            No refunds are available for successful payments!
          </Text>
          <View
            style={{
              width: 100,
              height: 1,
              backgroundColor: 'red',
              marginTop: 10,
              marginBottom: 20,
            }}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default CashCard;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstSentence: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
  },
  inputText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 20,
  },
  inputWrapper: {
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 10,
  },
  input: {
    height: 46,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
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
