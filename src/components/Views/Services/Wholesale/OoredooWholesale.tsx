import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import GradientButton from '../../../common/GradientButton';

import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';

const OoredooWholesale = () => {
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);
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
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 150,
      marginHorizontal: 20,
    },
    iconButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    dataTableHeader: {
      fontSize: 14,
      fontWeight: '600',
      color: 'black',
    },
    dataTableCell: {
      color: 'black',
    },
  
    buttonWrapper: {
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 40,
    },
    button: {
      borderRadius: 10,
      height: 46,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
    },
  });
  
  return (
    <ScrollView style={styles.column}>
      <Text style={styles.firstSentence}>
        {t('wholeSaleViewOoredooFirstText')}
      </Text>
      <GradientButton text={t('pickContact')} onPress={() => {}} />
      <Text style={styles.inputText}>{t('mobileNumber')}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMobileNumber}
          value={mobileNumber}
          placeholder={t('mobileNumber')}
          keyboardType="numeric"
        />
      </View>
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
      <View style={styles.buttonWrapper}>
        <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={['#3AC170', '#25BFA3']}
            style={styles.button}>
            <Text style={styles.buttonText}>{t('sendRaastas')}</Text>
          </LinearGradient>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  );
};

export default OoredooWholesale;
