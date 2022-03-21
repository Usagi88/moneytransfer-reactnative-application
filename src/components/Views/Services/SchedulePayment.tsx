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
import {DataTable} from 'react-native-paper';
import NavbarWithBackBtn from '../../common/NavbarWithBackBtn';
import { useTranslation } from 'react-i18next';

const SchedulePayment = () => {
  const [dayOfMonth, onChangeDayOfMonth] = useState<any>(null);
  const [serviceNumber, onChangeServiceNumber] = useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;

  const packages = ['Service 1', 'Service 2', 'Service 3', 'Service 4'];

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
      paddingBottom: 20,
    },
    input: {
      height: 46,
      backgroundColor: '#f2f2f2',
      paddingHorizontal: 10,
      borderRadius: 10,
      textAlign: deviceLocale == 'dv' ? 'right' : 'left',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
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
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
    },
  
    iconButton: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    dataTableHeader: {
      fontSize: 14,
      fontWeight: '600',
      color: 'black',
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
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
        <Text style={styles.firstSentence}>
          {t('scheduledPaymentsViewFirstText')}
        </Text>
        <Text style={styles.inputText}>{t('selectAService')}</Text>
        <View style={{paddingHorizontal: 20}}>
          <SelectDropdown
            data={packages}
            onSelect={(selectedItem, index) => {
              //console.log(selectedItem, index);
            }}
            defaultButtonText={t('selectAService')}
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
        <Text style={styles.inputText}>{t('paymentDayOfMonth')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeDayOfMonth}
            value={dayOfMonth}
            placeholder={t('paymentDayOfMonth')}
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.inputText}>{t('serviceNumber')}</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeServiceNumber}
            value={serviceNumber}
            placeholder={t('serviceNumber')}
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
              <Text style={styles.buttonText}>{t('schedulePayment')}</Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={styles.dataTableHeader}>#</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 3}}>
              <Text style={styles.dataTableHeader}>{t('service')}</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 2}}>
              <Text style={styles.dataTableHeader}>{t('number')}</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 2}}>
              <Text style={styles.dataTableHeader}>{t('amount')}</Text>
            </DataTable.Title>
            <DataTable.Title style={{flex: 2}}>
              <Text style={styles.dataTableHeader}>{t('day')}</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>1</DataTable.Cell>
            <DataTable.Cell style={{flex: 3}}>
              <Text style={styles.dataTableCell}>Dhiraagu bill pay</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.dataTableCell}>123</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.dataTableCell}>500.00</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.dataTableCell}>18/1/2022</Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>2</DataTable.Cell>
            <DataTable.Cell style={{flex: 3}}>
              <Text style={styles.dataTableCell}>Dhiraagu bill pay</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.dataTableCell}>123</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.dataTableCell}>500.00</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{flex: 2}}>
              <Text style={styles.dataTableCell}>18/1/2022</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ScrollView>
    </>
  );
};

export default SchedulePayment;


