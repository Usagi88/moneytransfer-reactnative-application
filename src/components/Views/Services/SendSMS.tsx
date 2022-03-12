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
  faEnvelope,
  faLocationArrow,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import BannerAmount from '../../common/BannerAmount';
import Navbar from '../../common/Navbar';

let {height, width} = Dimensions.get('window');

const SendSMS = () => {
  const [selectPackage, onChangeSelectPackage] = useState<any>(null);
  const [senderID, onChangeSenderID] = useState<any>(null);
  const [recipient, onChangeRecipient] = useState<any>(null);
  const [message, onChangeMessage] = useState<any>(null);

  return (
    <>
      <Navbar />
      <ScrollView>
        <View style={styles.column}>
          <BannerAmount />
          <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
            <View style={styles.cardbox}>
              <FontAwesomeIcon icon={faEnvelope} size={22} color={'#25BFA3'} />
              <View style={styles.verticalDivider} />
              <View style={styles.smsBox}>
                <Text style={styles.amount}>2</Text>
                <Text style={styles.title}>sms</Text>
              </View>
            </View>
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Text style={styles.firstSentence}>
                Select a sender id, write receiver(s) number(s) and write the
                sms you wish to send.
              </Text>
            </View>
          </View>
          <Text style={styles.inputText}>Select Package</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSelectPackage}
              value={selectPackage}
              placeholder="Select Package"
            />
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Buy SMS</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <Text style={styles.inputText}>Sender ID</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSenderID}
              value={senderID}
              placeholder="Sender ID"
            />
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Get Sender ID</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <Text style={styles.inputText}>Recipient(s)</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeRecipient}
              value={recipient}
              placeholder="Recipient(s)"
            />
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>Pick Contact</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <Text style={styles.inputText}>Message</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputTextBox}
              onChangeText={onChangeMessage}
              value={message}
              placeholder="Message"
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <GradientButton text={'Login'} onPress={() => {}} />
          <Text style={{paddingHorizontal: 20, paddingBottom: 20, paddingTop: 10,}}>
            SMS operators charges price for each SMS being sent even if it fails
            to deliver. Delivery Failures can be caused due to phone being
            switches off or not available in the network at the time sms being
            sent.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default SendSMS;

const styles = EStyleSheet.create({
  column: {
    width: width,
    minHeight: height - 56,
    backgroundColor: 'white',
  },
  firstSentence: {
    paddingHorizontal: 20,
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

  cardbox: {
    width: 135,
    minHeight: 68,
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 20,
  },
  verticalDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginLeft: 10,
  },
  smsBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  amount: {
    color: '#25BFA3',
    fontWeight: '700',
    fontSize: 26,
  },
  title: {
    color: '#25BFA3',
    fontWeight: '700',
    fontSize: 14,
  },
  inputTextBox: {
    height: 146,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderRadius: 10,
    textAlignVertical: 'top',
  },
});
