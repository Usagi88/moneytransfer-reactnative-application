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

const OrderGas = () => {
  const [accountNumber, onChangeAccountNumber] = useState<any>(null);
  const [idCardNumber, onChangeIDCardNumber] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  const packages = ['Package 1', 'Package 2', 'Package 3', 'Package 4'];

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <Text style={styles.firstSentence}>
          Enter Maldive Gas account number. NID number and select a package to
          order Gas.
        </Text>
        <Text style={styles.inputText}>Account Number</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAccountNumber}
            value={accountNumber}
            placeholder="Account Number"
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.inputText}>Owner's ID Card Number</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeIDCardNumber}
            value={idCardNumber}
            placeholder="Owner's ID Card Number"
          />
        </View>
        <Text style={styles.inputText}>Select Package</Text>
        <View style={{paddingHorizontal: 20}}>
          <SelectDropdown
            data={packages}
            onSelect={(selectedItem, index) => {
              //console.log(selectedItem, index);
            }}
            defaultButtonText={'Select a package'}
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
            <Text style={styles.inputText}>Name to save</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                onChangeText={onChangeSaveName}
                value={saveName}
                placeholder="Name to save"
              />
            </View>
          </>
        ) : null}

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
            <Text style={styles.label}>Keep info saved</Text>
          </View>
        </TouchableNativeFeedback>
        <GradientButton text={'Order Gas'} onPress={() => {}} />
      </ScrollView>
    </>
  );
};

export default OrderGas;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstSentence: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  inputText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 20,
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
});
