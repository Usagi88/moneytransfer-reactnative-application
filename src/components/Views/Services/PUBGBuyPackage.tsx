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
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import SelectDropdown from 'react-native-select-dropdown';
import BannerAmount from '../../common/BannerAmount';
import LinearGradient from 'react-native-linear-gradient';
import NavbarWithBackBtn from '../../common/NavbarWithBackBtn';
import {useTranslation} from 'react-i18next';

const PUBGBuyPackage = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);

  const packages = ['Package 1', 'Package 2', 'Package 3', 'Package 4'];

  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    firstSentence: {
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom: 14,
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
    buttonWrapper: {
      paddingHorizontal: 20,

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
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },

    warning: {
      color: 'red',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    underline: {
      width: 100,
      height: 1,
      backgroundColor: 'red',
      marginTop: 10,
      marginBottom: 20,
      marginLeft: deviceLocale == 'dv' ? 'auto' : null,
    },
  });

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <Text style={styles.firstSentence}>{t('pubgFirstText')}</Text>
        <Text style={styles.inputText}>{t('playerID')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMobileNumber}
            value={mobileNumber}
            placeholder={t('playerID')}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.inputText}>{t('selectPackage')}</Text>
        <View style={{paddingHorizontal: 20}}>
          <SelectDropdown
            data={packages}
            onSelect={(selectedItem, index) => {
              //console.log(selectedItem, index);
            }}
            defaultButtonText={t('selectPackage')}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesomeIcon
                  icon={isOpened ? faChevronUp : faChevronDown}
                  color={'#444'}
                  size={18}
                />
              );
            }}
            buttonStyle={{
              width: '100%',
              borderRadius: 10,
              marginTop: 6,
              marginBottom: 20,
            }}
            buttonTextStyle={{
              fontSize: 14,
              textAlign: 'left',
            }}
            rowTextStyle={{
              fontSize: 14,
              textAlign: 'left',
            }}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.button}>
              <Text style={styles.buttonText}>{t('buyPackage')}</Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 10}}>
          <Text style={styles.warning}>{t('pubgSecondText')}</Text>
          <View style={styles.underline} />
        </View>
      </ScrollView>
    </>
  );
};

export default PUBGBuyPackage;
