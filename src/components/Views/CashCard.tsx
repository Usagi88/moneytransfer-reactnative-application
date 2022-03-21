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
import {useTranslation} from 'react-i18next';
import NavbarWithBackBtn from '../common/NavbarWithBackBtn';

const CashCard = () => {
  const [amount, onChangeAmount] = useState<any>(null);
  const [processingFee, onChangeProcessingFee] = useState<any>(null);
  const [total, onChangeTotal] = useState<any>(null);
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;

  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    firstSentence: {
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 14,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
    },
    inputText: {
      fontWeight: '600',
      fontSize: 16,
      color: 'black',
      paddingHorizontal: 20,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
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
      textAlign: deviceLocale == 'dv' ? 'right' : 'left',
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
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
    },
    warningOne:{
      color: '#747373',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
    },
    warningTwo:{
      color: 'red',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
    },
    underline: {
      width: 100,
      height: 1,
      backgroundColor: 'red',
      marginTop: 10,
      marginBottom: 20,
      marginLeft: deviceLocale == 'dv' ? 'auto' : null
    },
  });

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <Text style={styles.firstSentence}>{t('topUpViaBmlFirsText')}</Text>
        <Text style={styles.inputText}>{t('amount')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAmount}
            value={amount}
            placeholder={t('amount')}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.inputText}>{t('processingFee')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeProcessingFee}
            value={processingFee}
            placeholder={t('processingFee')}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.inputText}>{t('total')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeTotal}
            value={total}
            placeholder={t('total')}
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
              <Text style={styles.buttonText}>
                {t('topUpViaBmlButtonText')}
              </Text>
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
          <Text style={styles.warningOne}>{t('topUpViaBmlSecondText')}</Text>
          <Text style={styles.warningTwo}>{t('topUpViaBmlThirdText')}</Text>
          <View style={styles.underline} />
        </View>
      </ScrollView>
    </>
  );
};

export default CashCard;


