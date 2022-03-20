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

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGift} from '@fortawesome/free-solid-svg-icons';
import BannerAmount from '../../common/BannerAmount';
import LinearGradient from 'react-native-linear-gradient';
import NavbarWithBackBtn from '../../common/NavbarWithBackBtn';
import {useTranslation} from 'react-i18next';

const ROLBillPay = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  const [accountNumber, onChangeAccountNumber] = useState<any>(null);
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
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
    },
    input: {
      height: 46,
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      borderBottomLeftRadius: 10,
      borderTopLeftRadius: 10,
      width: '100% - 76',
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

    button: {
      borderRadius: 10,
      right: deviceLocale == 'dv' ? 0 : 10,
      left: deviceLocale == 'dv' ? 10 : 0,
      height: 46,
      width: 46,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    buttonText: {
      color: 'white',
    },
  });

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <Text style={styles.firstSentence}>{t('rolPayBillFirstText')}</Text>

        <Text style={styles.inputText}>{t('accountNumber')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAccountNumber}
            value={accountNumber}
            placeholder={t('accountNumber')}
          />
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <FontAwesomeIcon icon={faGift} size={18} color={'white'} />
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
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

export default ROLBillPay;
