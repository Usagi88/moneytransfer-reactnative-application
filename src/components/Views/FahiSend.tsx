import {faPhone, faQrcode, faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import {IconButton} from 'react-native-paper';
import BannerAmount from '../common/BannerAmount';
import FPCard from '../common/FPCard';
import GradientButton from '../common/GradientButton';
import Navbar from '../common/Navbar';
import TitleHorizonDivider from '../common/TitleHorizonDivider';
import PencilEditIcon from '../SvgIconComponents/PencilEditIcon';

let {width} = Dimensions.get('window');

const FahiSend = () => {
  const [emailOrMobileNumber, onChangeEmailOrMobileNumber] =
    useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);

  return (
    <>
      <Navbar />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.box} />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 40,
          }}>
          <Text>
            To transfer any amount to another user , Enter receivers email or
            mobile number and amount you wish to send
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={faQrcode} size={22} color={'white'} />
                  <Text style={styles.buttonText}>Qr Scan</Text>
                </View>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={faPhone} size={22} color={'white'} />
                  <Text style={styles.buttonText}>Pick Contact</Text>
                </View>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
        <Text style={styles.inputText}>Email/Mobile Number</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmailOrMobileNumber}
            value={emailOrMobileNumber}
            placeholder="Email or Mobile Number"
          />
        </View>
        <Text style={styles.inputText}>Amount</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAmount}
            value={amount}
            placeholder="Amount"
          />
        </View>
        <View style={styles.submitButtonWrapper}>
          <TouchableNativeFeedback onPress={()=>{}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit</Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </>
  );
};

export default FahiSend;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    backgroundColor: 'white',
    width: 120,
    height: 120,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  buttonWrapper: {
    paddingHorizontal: 5,
    paddingBottom: 10,
    flex: 1,
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
    marginLeft: 10,
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

  submitButtonWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  submitButton: {
    borderRadius: 10,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  submitButtonText: {
    color: 'white',
  },
});
