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
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import SelectDropdown from 'react-native-select-dropdown';
import BannerAmount from '../../common/BannerAmount';
import NavbarWithBackBtn from '../../common/NavbarWithBackBtn';
import {useTranslation} from 'react-i18next';

const OrderGas = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  const [accountNumber, onChangeAccountNumber] = useState<any>(null);
  const [idCardNumber, onChangeIDCardNumber] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  const packages = ['Package 1', 'Package 2', 'Package 3', 'Package 4'];

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
      paddingBottom: 20,
    },
    input: {
      height: 46,
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      borderRadius: 10,
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
  });

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <Text style={styles.firstSentence}>{t('maldiveGasFirstText')}</Text>
        <Text style={styles.inputText}>{t('accountNumber')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAccountNumber}
            value={accountNumber}
            placeholder={t('accountNumber')}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.inputText}>{t('ownerIDCardNum')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeIDCardNumber}
            value={idCardNumber}
            placeholder={t('ownerIDCardNum')}
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

        <GradientButton text={t('orderGas')} onPress={() => {}} />
      </ScrollView>
    </>
  );
};

export default OrderGas;
