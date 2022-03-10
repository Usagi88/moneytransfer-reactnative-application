import {
  ScrollView,
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IconButton} from 'react-native-paper';
import QuestionIcon from '../SvgIconComponents/QuestionIcon';
import ServiceIcon from '../SvgIconComponents/ServiceIcon';
import WalletIcon from '../SvgIconComponents/WalletIcon';
import BannerAmount from '../common/BannerAmount';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import FPCard from '../common/FPCard';
import CarouselBanner from '../common/Carousel/CarouselBanner';
import Navbar from '../common/Navbar';
import GradientButton from '../common/GradientButton';

let {height, width} = Dimensions.get('window');

const ResetPassword = () => {
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);

  return (
    <>
      <Navbar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.column}>
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
            Enter your registered mobile number to recieve the password reset
            code
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

          <View style={{paddingHorizontal: 20, flexDirection: 'row', paddingTop: 10,}}>
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
        </View>
      </ScrollView>
    </>
  );
};

export default ResetPassword;

const styles = EStyleSheet.create({
  column: {
    width: width,
    minHeight: height,
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
  listBox: {
    width: width,
    maxHeight: '100% - 50%',
  },
  imageWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    width: width,
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
