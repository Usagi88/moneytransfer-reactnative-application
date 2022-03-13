import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navbar from '../common/Navbar';
import GradientButton from '../common/GradientButton';

const ResetPassword = () => {
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);

  return (
    <>
      <Navbar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.column}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/images/forgot-password.png')}
          />
        </View>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/fahipay-logo.png')}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.divider} />
        </View>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={{paddingBottom: 20, paddingHorizontal: 20}}>
          Enter your registered mobile number to recieve the password reset code
        </Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMobileNumber}
            value={mobileNumber}
            placeholder="Mobile Number"
            keyboardType="numeric"
          />
        </View>
        <GradientButton text={'Request reset'} onPress={() => {}} />

        <View
          style={{paddingHorizontal: 20, flexDirection: 'row', paddingTop: 10}}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.borderLeft} />
              <View>
                <Text style={{paddingTop: 10, color: 'black'}}>
                  Click here if you already have the code
                </Text>
                <View
                  style={{
                    width: 100,
                    backgroundColor: '#ccc',
                    height: 1,
                    marginTop: 10,
                  }}
                />
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </>
  );
};

export default ResetPassword;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  divider: {
    width: 170,
    height: 1,
    backgroundColor: '#ccc',
  },
  smallBox: {
    borderRadius: 20,
    width: 40,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: 172,
    resizeMode: 'contain',
  },
  logo: {
    width: 150,
    height: 40,
    resizeMode: 'contain',
  },
  logoWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  inputWrapper: {
    paddingHorizontal: 20,
  },
  input: {
    height: 46,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  borderLeft: {
    height: 40,
    width: 3,
    borderRadius: 10,
    backgroundColor: '#25BFA3',
    marginRight: 10,
  },
});
