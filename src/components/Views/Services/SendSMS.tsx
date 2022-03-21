import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GradientButton from '../../common/GradientButton';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import BannerAmount from '../../common/BannerAmount';
import NavbarWithBackBtn from '../../common/NavbarWithBackBtn';
import { useTranslation } from 'react-i18next';

let {width} = Dimensions.get('window');

const SendSMS = () => {
  const [selectPackage, onChangeSelectPackage] = useState<any>(null);
  const [senderID, onChangeSenderID] = useState<any>(null);
  const [recipient, onChangeRecipient] = useState<any>(null);
  const [message, onChangeMessage] = useState<any>(null);
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;

  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    firstSentence: {
      paddingHorizontal: deviceLocale == 'dv' ? 0 : 20,
      paddingLeft:  deviceLocale == 'dv' ? 10 : null,
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
    },
    input: {
      height: 46,
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      borderRadius: 10,
      textAlign: deviceLocale == 'dv' ? 'right' : 'left',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
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
  
    cardbox: {
      width: width > 320 ? 135 : 120,
      minHeight: 68,
      flexDirection: 'row',
      padding: 10,
      paddingLeft: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      marginBottom: 20,
    },
    verticalDivider: {
      width: 1,
      height: '100%',
      backgroundColor: '#ccc',
      marginLeft: 10,
    },
    smsBox: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
    },
    amount: {
      color: '#25BFA3',
      fontWeight: '700',
      fontSize: 26,
    },
    title: {
      color: '#25BFA3',
      fontWeight: '700',
      fontSize: 14,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    inputTextBox: {
      height: 146,
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      borderRadius: 10,
      textAlignVertical: 'top',
      textAlign: deviceLocale == 'dv' ? 'right' : 'left',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    lastText: {
      paddingHorizontal: 20,
      paddingBottom: 20,
      paddingTop: 10,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    }
  });

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
          <View style={styles.cardbox}>
            <FontAwesomeIcon icon={faEnvelope} size={22} color={'#25BFA3'} />
            <View style={styles.verticalDivider} />
            <View style={styles.smsBox}>
              <Text style={styles.amount}>2</Text>
              <Text style={styles.title}>{t('sms')}</Text>
            </View>
          </View>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Text style={styles.firstSentence}>
              {t('sendSmsFirstText')}
            </Text>
          </View>
        </View>
        <Text style={styles.inputText}>{t('selectPackage')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSelectPackage}
            value={selectPackage}
            placeholder={t('selectPackage')}
          />
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <Text style={styles.buttonText}>{t('buySMS')}</Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
        <Text style={styles.inputText}>{t('senderID')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSenderID}
            value={senderID}
            placeholder={t('senderID')}
          />
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <Text style={styles.buttonText}>{t('getSenderID')}</Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
        <Text style={styles.inputText}>{t('recipients')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeRecipient}
            value={recipient}
            placeholder={t('recipients')}
          />
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <Text style={styles.buttonText}>{t('pickContact')}</Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
        <Text style={styles.inputText}>{t('message')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.inputTextBox}
            onChangeText={onChangeMessage}
            value={message}
            placeholder={t('message')}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <GradientButton text={t('login')} onPress={() => {}} />
        <Text
          style={styles.lastText}>
          {t('sendSMSLastText')}
        </Text>
      </ScrollView>
    </>
  );
};

export default SendSMS;


