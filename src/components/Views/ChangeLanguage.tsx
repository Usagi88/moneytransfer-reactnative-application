import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  I18nManager,
  Image,
  Pressable,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import CountryFlag from 'react-native-country-flag';
import EStyleSheet from 'react-native-extended-stylesheet';
import {RadioButton} from 'react-native-paper';
import NavbarWithBackBtn from '../common/NavbarWithBackBtn';
import TitleHorizonDivider from '../common/TitleHorizonDivider';
import RNRestart from 'react-native-restart';



const ChangeLanguage = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  const [currentLanguage, setLanguage] = useState(deviceLocale);
  
  //{t('this line is translated')}
  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    imageWrapper: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    image: {
      width: 150,
      height: 60,
      resizeMode: 'contain',
    },
    divider: {
      width: 170,
      height: 1,
      backgroundColor: '#ccc',
      marginBottom: 17,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: '#25BFA3',
    },
    languageCardWrapper: {
      marginHorizontal: 20,
      marginTop: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      height: 60,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    languageCard: {
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      backgroundColor: 'white',
      justifyContent: 'space-between',
      height: '100%',
      alignItems: 'center',
      padding: 20,
      borderRadius: 10,
      overflow: 'hidden',
    },
    language: {
      color: 'black',
      marginLeft: deviceLocale == 'dv' ? 0 : 10,
      marginRight: deviceLocale == 'dv' ? 10 : 0,
    },
  });

  
  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => {
        deviceLocale = value
        setLanguage(value)
      })
      .catch(err => console.log(err));
  };
  return (
    <>
      <NavbarWithBackBtn />
      <View style={styles.column}>
        <TitleHorizonDivider name={t('language')} />
        <View style={styles.languageCardWrapper}>
          <TouchableNativeFeedback
            onPress={() => changeLanguage('en')}
            useForeground={true}>
            <View style={styles.languageCard}>
              <View style={{flexDirection: deviceLocale === 'dv' ? 'row-reverse' : 'row', alignItems: 'center'}}>
                <CountryFlag isoCode="us" size={25} />
                <Text style={styles.language}>English</Text>
              </View>
              <RadioButton
                value="en"
                status={currentLanguage === 'en' ? 'checked' : 'unchecked'}
              />
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={styles.languageCardWrapper}>
          <TouchableNativeFeedback
            onPress={() => changeLanguage('dv')}
            useForeground={true}>
            <View style={styles.languageCard}>
              <View style={{flexDirection: deviceLocale === 'dv' ? 'row-reverse' : 'row', alignItems: 'center'}}>
                <CountryFlag isoCode="mv" size={25} />

                <Text style={styles.language}>Dhivehi</Text>
              </View>
              <RadioButton
                value="dv"
                status={currentLanguage === 'dv' ? 'checked' : 'unchecked'}
              />
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={styles.languageCardWrapper}>
          <TouchableNativeFeedback
            onPress={() => changeLanguage('hi')}
            useForeground={true}>
            <View style={styles.languageCard}>
              <View style={{flexDirection: deviceLocale === 'dv' ? 'row-reverse' : 'row', alignItems: 'center'}}>
                <CountryFlag isoCode="in" size={25} />
                <Text style={styles.language}>Hindi</Text>
              </View>
              <RadioButton
                value="hi"
                status={currentLanguage === 'hi' ? 'checked' : 'unchecked'}
              />
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={styles.languageCardWrapper}>
          <TouchableNativeFeedback
            onPress={() => changeLanguage('bn')}
            useForeground={true}>
            <View style={styles.languageCard}>
              <View style={{flexDirection: deviceLocale === 'dv' ? 'row-reverse' : 'row', alignItems: 'center'}}>
                <CountryFlag isoCode="bd" size={25} />
                <Text style={styles.language}>Bengali</Text>
              </View>
              <RadioButton
                value="bn"
                status={currentLanguage === 'bn' ? 'checked' : 'unchecked'}
              />
            </View>
          </TouchableNativeFeedback>
        </View>

        <View style={styles.languageCardWrapper}>
          <TouchableNativeFeedback
            onPress={() => changeLanguage('ja')}
            useForeground={true}>
            <View style={styles.languageCard}>
              <View style={{flexDirection: deviceLocale === 'dv' ? 'row-reverse' : 'row', alignItems: 'center'}}>
                <View style={{borderColor: '#ccc', borderWidth: 1}}>
                  <CountryFlag isoCode="jp" size={25} />
                </View>

                <Text style={styles.language}>Japanese</Text>
              </View>
              <RadioButton
                value="ja"
                status={currentLanguage === 'ja' ? 'checked' : 'unchecked'}
              />
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );
};

export default ChangeLanguage;