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

const MWSCBillPay = () => {
  const [accountNumber, onChangeAccountNumber] = useState<any>(null);
  const [meterNumber, onChangeMeterNumber] = useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <Text style={styles.firstSentence}>
          Enter MWSC account number, meter number and amount to pay bill.
        </Text>
        <Text style={styles.inputText}>Account Number</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAccountNumber}
            value={accountNumber}
            placeholder="Account Number"
          />
        </View>
        <Text style={styles.inputText}>Meter Number</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMeterNumber}
            value={meterNumber}
            placeholder="Meter Number"
          />
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <Text style={styles.buttonText}>Check Balance</Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
        <Text style={styles.inputText}>Amount</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAmount}
            value={amount}
            placeholder="Amount"
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
        <GradientButton text={'Pay Bill'} onPress={() => {}} />
      </ScrollView>
    </>
  );
};

export default MWSCBillPay;

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
    paddingBottom: 10,
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

  buttonWrapper: {
    alignItems: 'flex-end',
    paddingRight: 20,
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
  },
});
