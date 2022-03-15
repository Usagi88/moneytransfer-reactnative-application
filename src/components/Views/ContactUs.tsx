import {
  faFacebookF,
  faTelegramPlane,
  faTwitter,
  faViber,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faGlobe, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {ScrollView, Text, TouchableNativeFeedback, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import BannerAmount from '../common/BannerAmount';
import NavbarWithBackBtn from '../common/NavbarWithBackBtn';
import TitleHorizonDivider from '../common/TitleHorizonDivider';

const ContactUs = () => {
  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <TitleHorizonDivider name={'Contact'} />
        <View style={styles.rowWrapper}>
          <FontAwesomeIcon icon={faPhone} size={22} color={'#25BFA3'} />
          <Text style={styles.title}>4007004</Text>
        </View>
        <View style={styles.rowWrapper}>
          <FontAwesomeIcon icon={faEnvelope} size={22} color={'#25BFA3'} />
          <Text style={styles.title}>info@fahipay.mv</Text>
        </View>
        <View style={styles.rowWrapper}>
          <FontAwesomeIcon icon={faGlobe} size={22} color={'#25BFA3'} />
          <Text style={styles.title}>www.fahipay.mv</Text>
        </View>
        <TitleHorizonDivider name={'Social Media Handles'} />
        <View style={{paddingHorizontal: 20, flexDirection: 'row'}}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient colors={['#3AC170', '#25BFA3']} style={styles.box}>
              <FontAwesomeIcon icon={faTwitter} size={30} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient colors={['#3AC170', '#25BFA3']} style={styles.box}>
              <FontAwesomeIcon
                icon={faTelegramPlane}
                size={30}
                color={'white'}
              />
            </LinearGradient>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient colors={['#3AC170', '#25BFA3']} style={styles.box}>
              <FontAwesomeIcon icon={faViber} size={30} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient colors={['#3AC170', '#25BFA3']} style={styles.box}>
              <FontAwesomeIcon icon={faFacebookF} size={30} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </>
  );
};

export default ContactUs;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  rowWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  title: {
    color: 'black',
    marginLeft: 20,
  },
  box: {
    width: 60,
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});
