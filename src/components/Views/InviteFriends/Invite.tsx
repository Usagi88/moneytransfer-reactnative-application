import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faClone, faShare} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';

const Invite = () => {
  const [invite, onChangeInvite] = useState<any>(null);
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
      color: 'black',
      fontWeight: deviceLocale == 'dv' ? '600' : '700',
      fontSize: 20,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    rowWrapper: {
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      paddingHorizontal: 20,
      paddingVertical: 8,
      alignItems: 'center',
    },
    smallBox: {
      width: 36,
      height: 36,
      borderRadius: 10,
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
    shareButtonWrapper: {
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
    shareButton: {
      borderRadius: 10,
      height: 46,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    shareButtonText: {
      color: 'white',
      marginLeft: 10,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    borderLeft: {
      height: 40,
      width: 3,
      borderRadius: 10,
      backgroundColor: '#25BFA3',
      marginRight: deviceLocale == 'dv' ? 0 : 10,
      marginLeft: deviceLocale == 'dv' ? 10 : 0,
    },

    invitePointWrapper: {
      marginLeft: deviceLocale == 'dv' ? 0 : 10,
      marginRight: deviceLocale == 'dv' ? 10 : 0,
    },
    invitePointFirstText: {
      color: 'black',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    invitePointSecondText: {
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
    <ScrollView style={styles.column}>
      <Text style={styles.firstSentence}>{t('howItWorks')}</Text>
      <View style={styles.rowWrapper}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#3AC170', '#25BFA3']}
          style={styles.smallBox}
        />
        <View style={styles.invitePointWrapper}>
          <Text style={styles.invitePointFirstText}>
            {t('inviteYourFriends')}
          </Text>
          <Text style={styles.invitePointSecondText}>
            {t('inviteYourFriendsTwo')}
          </Text>
        </View>
      </View>
      <View style={styles.rowWrapper}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#3AC170', '#25BFA3']}
          style={styles.smallBox}
        />
        <View style={styles.invitePointWrapper}>
          <Text style={styles.invitePointFirstText}>{t('joinAndUse')}</Text>
          <Text style={styles.invitePointSecondText}>{t('joinAndUseTwo')}</Text>
        </View>
      </View>
      <View style={styles.rowWrapper}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#3AC170', '#25BFA3']}
          style={styles.smallBox}
        />
        <View style={styles.invitePointWrapper}>
          <Text style={styles.invitePointFirstText}>{t('earnMoney')}</Text>
          <Text style={styles.invitePointSecondText}>{t('earnMoneyTwo')}</Text>
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInvite}
          value={invite}
          placeholder="www.fahipay.mv"
        />
        <View style={styles.buttonWrapper}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.button}>
              <FontAwesomeIcon icon={faClone} size={18} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.shareButtonWrapper}>
        <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={['#3AC170', '#25BFA3']}
            style={styles.shareButton}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faShare} size={18} color={'white'} />
              <Text style={styles.shareButtonText}>{t('shareLink')}</Text>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.link}>
        <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
          <View style={styles.linkContent}>
            <View style={styles.borderLeft} />
            <View>
              <Text style={styles.linkText}>{t('termsAndConditions')}</Text>
              <View style={styles.underline} />
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  );
};

export default Invite;
