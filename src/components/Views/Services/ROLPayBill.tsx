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
import {Checkbox, DataTable, IconButton} from 'react-native-paper';
import TitleHorizonDivider from '../../common/TitleHorizonDivider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faGift,
  faLocationArrow,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import BannerAmount from '../../common/BannerAmount';
import LinearGradient from 'react-native-linear-gradient';
import Navbar from '../../common/Navbar';

let {height, width} = Dimensions.get('window');

const ROLBillPay = () => {
  const [accountNumber, onChangeAccountNumber] = useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Navbar />
      <ScrollView style={styles.listBox}>
        <View style={styles.column}>
          <BannerAmount />
          <Text style={styles.firstSentence}>
            Enter the ROL number and select bill to pay.
          </Text>

          <Text style={styles.inputText}>Account Number</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeAccountNumber}
              value={accountNumber}
              placeholder="Account Number"
            />
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.button}>
                  <FontAwesomeIcon icon={faGift} size={18} color={'white'} />
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
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
        </View>
      </ScrollView>
    </>
  );
};

export default ROLBillPay;

const styles = EStyleSheet.create({
  column: {
    width: width,
    minHeight: height - 56,
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
    flexDirection: 'row',
  },
  input: {
    height: 46,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: '100% - 76',
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

  buttonWrapper: {},
  button: {
    borderRadius: 10,
    right: 10,
    height: 46,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
  },
});
