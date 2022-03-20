import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GradientButton from '../../common/GradientButton';
import {Checkbox} from 'react-native-paper';

import LinearGradient from 'react-native-linear-gradient';
import BannerAmount from '../../common/BannerAmount';
import NavbarWithBackBtn from '../../common/NavbarWithBackBtn';
import {useTranslation} from 'react-i18next';

const MWSCBillPay = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  const [accountNumber, onChangeAccountNumber] = useState<any>(null);
  const [meterNumber, onChangeMeterNumber] = useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    firstSentence: {
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 20,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    inputText: {
      fontWeight: '600',
      fontSize: 16,
      color: 'black',
      paddingHorizontal: 20,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
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
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
      textAlign: deviceLocale == 'dv' ? 'right' : 'left',
    },
    checkboxContainerWrapper: {
      alignItems: 'flex-end',
      marginHorizontal: 20,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 150,
      justifyContent: 'center',
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
      alignItems: deviceLocale == 'dv' ? 'flex-start' : 'flex-end',
      paddingRight: deviceLocale == 'dv' ? 0 : 20,
      paddingLeft: deviceLocale == 'dv' ? 20 : 0,

    },
    button: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      width: 100,
      height: 36,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    buttonText: {
      color: 'white',
      fontSize: 12,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
  });

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <Text style={styles.firstSentence}>{t('mwscPayBillFirstText')}</Text>
        <Text style={styles.inputText}>{t('accountNumber')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAccountNumber}
            value={accountNumber}
            placeholder={t('accountNumber')}
          />
        </View>
        <Text style={styles.inputText}>{t('meterNumber')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMeterNumber}
            value={meterNumber}
            placeholder={t('meterNumber')}
          />
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <Text style={styles.buttonText}>{t('checkBalance')}</Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
        <Text style={styles.inputText}>{t('amount')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAmount}
            value={amount}
            placeholder={t('amount')}
          />
        </View>
        {checked === true ? (
          <>
            <Text style={styles.inputText}>{t('nameToSave')}</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeSaveName}
                value={saveName}
                placeholder={t('nameToSave')}
              />
            </View>
          </>
        ) : null}

        <View style={styles.checkboxContainerWrapper}>
          <TouchableNativeFeedback
            onPress={() => {
              setChecked(!checked);
            }}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked(!checked);
                }}
                color={'#25BFA3'}
              />
              <Text style={styles.label}>{t('keepInfoSaved')}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>

        <GradientButton text={t('payBill')} onPress={() => {}} />
      </ScrollView>
    </>
  );
};

export default MWSCBillPay;
