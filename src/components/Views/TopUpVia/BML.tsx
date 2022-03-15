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
  faClone,
  faCloudDownload,
  faLocationArrow,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

let {width} = Dimensions.get('window');

const BML = () => {
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);
  const [accountName, onChangeAccountName] = useState<any>(null);
  const [accountNumber, onChangeAccountNumber] = useState<any>(null);
  const [accountNumberTwo, onChangeAccountNumberTwo] = useState<any>(null);

  return (
    <ScrollView style={styles.column}>
      <View style={styles.firstRow}>
        <View style={styles.stepBox}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepText}>Step</Text>
        </View>
        <Text style={{flex: 1, paddingLeft: 20, paddingTop: 15}}>
          Transfer your amount to the following account via BML Internet banking
        </Text>
      </View>
      <Text style={styles.inputText}>Account Name</Text>
      <View style={styles.btnInputWrapper}>
        <TextInput
          style={styles.btnInput}
          onChangeText={onChangeAccountName}
          value={accountName}
          placeholder="90101480013752000"
        />
        <View style={styles.btnButtonWrapper}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.btnButton}>
              <FontAwesomeIcon icon={faClone} size={18} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </View>
      <Text style={styles.inputText}>Account Number</Text>
      <View style={styles.btnInputWrapper}>
        <TextInput
          style={styles.btnInput}
          onChangeText={onChangeAccountNumber}
          value={accountNumber}
          placeholder="90101480013752000"
        />
        <View style={styles.btnButtonWrapper}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.btnButton}>
              <FontAwesomeIcon icon={faClone} size={18} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.btnInputWrapper}>
        <TextInput
          style={styles.btnInput}
          onChangeText={onChangeAccountNumberTwo}
          value={accountNumberTwo}
          placeholder="90101480013752000"
        />
        <View style={styles.btnButtonWrapper}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.btnButton}>
              <FontAwesomeIcon icon={faClone} size={18} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 10}}>
        <Text style={{color: 'red'}}>USD conversion rate is 15</Text>
        <View
          style={{
            width: 100,
            height: 1,
            backgroundColor: 'red',
            marginTop: 10,
            marginBottom: 10,
          }}
        />
      </View>
      <View style={styles.firstRow}>
        <View style={styles.stepBox}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepText}>Step</Text>
        </View>
        <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
          <View style={styles.dashBorderBox}>
            <FontAwesomeIcon
              icon={faCloudDownload}
              size={22}
              color={'#25BFA3'}
            />
            <Text style={{marginLeft: 10}}>Upload Transfer Receipt</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.buttonWrapper}>
      <TouchableNativeFeedback onPress={()=>{}} useForeground={true}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#3AC170', '#25BFA3']}
          style={styles.button}>
          <Text style={styles.buttonText}>Claim</Text>
        </LinearGradient>
      </TouchableNativeFeedback>
    </View>
      <View style={{paddingHorizontal: 20}}>
        <Text style={{color: 'red'}}>
          Please do not transfer same amount twice in a single day only own BML
          account is allowed for adding cash. Please do not forget to save the
          transfer receipt. No refunds are available for successful payments!
        </Text>
        <Text>
          New Users please send the BML transfer receipt to our FB page or live
          chat for verification
        </Text>
        <Text>
          A processing fee will be charged for any withdrawaks. profile must be
          verified before requesting for withdrawal
        </Text>
        <View
          style={{
            width: 100,
            height: 1,
            backgroundColor: '#ccc',
            marginTop: 10,
            marginBottom: 10,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default BML;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstRow: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
  },
  secondRow: {
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
  },
  stepBox: {
    width: 68,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 20,
  },
  stepNumber: {
    color: '#25BFA3',
    fontSize: 26,
    fontWeight: '700',
  },
  stepText: {
    color: '#25BFA3',
    fontWeight: '700',
  },

  dashBorderBox: {
    borderStyle: 'dashed',
    borderRadius: 10,
    flex: 1,
    borderWidth: 1,
    borderColor: '#25BFA3',
    height: 68,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
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

  btnInputWrapper: {
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  btnInput: {
    height: 46,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    width: '100% - 76',
  },
  btnButton: {
    borderRadius: 10,
    right: 10,
    height: 46,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
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
  },
});
