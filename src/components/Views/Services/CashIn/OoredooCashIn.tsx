import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import GradientButton from '../../../common/GradientButton';
import {Checkbox, DataTable, IconButton} from 'react-native-paper';
import TitleHorizonDivider from '../../../common/TitleHorizonDivider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationArrow, faTrash} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

const OoredooCashIn = () => {
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  return (
    <ScrollView style={styles.listBox}>
      <View style={styles.column}>
        <Text style={styles.firstSentence}>
            Enter the Ooredoo number and amount to pay M-faisaa cash in.
        </Text>
        <GradientButton text={'Pick Contact'} onPress={() => {}} />
        <Text style={styles.inputText}>Mobile Number</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeMobileNumber}
            value={mobileNumber}
            placeholder="Mobile Number"
            keyboardType="numeric"
          />
        </View>
        <Text style={styles.inputText}>Amount</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAmount}
            value={amount}
            placeholder="Amount"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableNativeFeedback onPress={()=>{}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.button}>
              <Text style={styles.buttonText}>Cash In</Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
        
      </View>
    </ScrollView>
  );
};

export default OoredooCashIn;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstSentence: {
    paddingHorizontal: 20,
    paddingTop: 10,
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
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
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
  },
});
