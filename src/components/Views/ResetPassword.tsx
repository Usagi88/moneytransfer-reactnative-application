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
import GradientButton from '../common/GradientButton';
import NavbarWithBackBtn from '../common/NavbarWithBackBtn';
import {useTranslation} from 'react-i18next';

const ResetPassword = () => {
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;

  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    title: {
      fontSize: 20,
      fontWeight: deviceLocale == 'dv' ? '600' : '700',
      color: 'black',
      paddingHorizontal: 20,
      paddingVertical: 20,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    divider: {
      width: 170,
      height: 1,
      backgroundColor: '#ccc',
      marginLeft: deviceLocale == 'dv' ? 'auto' : null,
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
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
    },
    inputWrapper: {
      paddingHorizontal: 20,
    },
    input: {
      height: 46,
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      borderRadius: 10,
      textAlign: deviceLocale == 'dv' ? 'right' : 'left',
    },
    borderLeft: {
      height: 40,
      width: 3,
      borderRadius: 10,
      backgroundColor: '#25BFA3',
      marginRight: deviceLocale == 'dv' ? 0 : 10,
      marginLeft: deviceLocale == 'dv' ? 10 : 0,
    },

    secondtext: {
      paddingBottom: 20,
      paddingHorizontal: 20,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },

    link: {
      paddingHorizontal: 20,
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      paddingTop: 10,
    },
    linkContent: {
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
    },
    linkText: {
      paddingTop: 10,
      color: 'black',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    underline: {
      width: 100,
      backgroundColor: '#ccc',
      height: 1,
      marginTop: 10,
      marginLeft: deviceLocale == 'dv' ? 'auto' : null,
    },
  });

  return (
    <>
      <NavbarWithBackBtn />
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
            source={require('../../assets/images/logo-placeholder.png')}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.divider} />
        </View>
        <Text style={styles.title}>{t('resetPassword')}</Text>
        <Text style={styles.secondtext}>{t('resetPasswordSecondText')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMobileNumber}
            value={mobileNumber}
            placeholder={t('mobileNumber')}
            keyboardType="numeric"
          />
        </View>
        <GradientButton text={t('requestReset')} onPress={() => {}} />

        <View style={styles.link}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <View style={styles.linkContent}>
              <View style={styles.borderLeft} />
              <View>
                <Text style={styles.linkText}>{t('alreadyHaveCode')}</Text>
                <View style={styles.underline} />
              </View>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </>
  );
};

export default ResetPassword;
