import {
  faFacebookF,
  faTelegramPlane,
  faTwitter,
  faViber,
} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faGlobe, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, Text, TouchableNativeFeedback, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import BannerAmount from '../common/BannerAmount';
import NavbarWithBackBtn from '../common/NavbarWithBackBtn';
import TitleHorizonDivider from '../common/TitleHorizonDivider';

const ContactUs = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;

  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    rowWrapper: {
      paddingHorizontal: 20,
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    title: {
      color: 'black',
      marginLeft: deviceLocale == 'dv' ? 0 : 20,
      marginRight: deviceLocale == 'dv' ? 20 : 0,
    },
    box: {
      width: 60,
      height: 60,
      borderRadius: 10,
      overflow: 'hidden',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: deviceLocale == 'dv' ? 10 : 0,
      marginRight: deviceLocale == 'dv' ? 0 : 10,
    },
    boxWrapper: {
      paddingHorizontal: 20,
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
    },
  });

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <TitleHorizonDivider name={t('contacts')} />
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
        <TitleHorizonDivider name={t('socialMediaHandles')} />
        <View style={styles.boxWrapper}>
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
