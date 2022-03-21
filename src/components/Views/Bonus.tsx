import React, {useState} from 'react';
import {
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
import { useTranslation } from 'react-i18next';
import NavbarWithBackBtn from '../common/NavbarWithBackBtn';

const Bonus = () => {
  const [points, onChangePoints] = useState<any>(null);
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
  });

  
  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <Text style={styles.firstSentence}>
          {t('bonusViewFirstText')}
        </Text>
        
        <Text style={styles.inputText}>{t('numberOfPoints')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangePoints}
            value={points}
            placeholder={t('numberOfPoints')}
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
              <Text style={styles.buttonText}>{t('redeem')}</Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
       
      </ScrollView>
    </>
  );
};

export default Bonus;

