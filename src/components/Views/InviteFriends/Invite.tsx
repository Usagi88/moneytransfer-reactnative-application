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
import {faClone, faShare} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';

const Invite = () => {
  const [invite, onChangeInvite] = useState<any>(null);

  return (
    <ScrollView style={styles.column}>
      <Text style={styles.firstSentence}>How it works!</Text>
      <View style={styles.rowWrapper}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#3AC170', '#25BFA3']}
          style={styles.smallBox}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'black'}}>Invite your friends!</Text>
          <Text>Simply Share your referral link!</Text>
        </View>
      </View>
      <View style={styles.rowWrapper}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#3AC170', '#25BFA3']}
          style={styles.smallBox}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'black'}}>
            Your friends join and use FahiPay!
          </Text>
          <Text>Your Friend gets MVR 10.00</Text>
        </View>
      </View>
      <View style={styles.rowWrapper}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          colors={['#3AC170', '#25BFA3']}
          style={styles.smallBox}
        />
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'black'}}>Earn money!</Text>
          <Text>You earn MVR 10.00</Text>
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInvite}
          value={invite}
          placeholder="www.fahipay.mv"
        />
        <View style={styles.buttonWrapper}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.button}>
              <FontAwesomeIcon icon={faClone} size={18} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </View>
      <View style={styles.shareButtonWrapper}>
        <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={['#3AC170', '#25BFA3']}
            style={styles.shareButton}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesomeIcon icon={faShare} size={18} color={'white'} />
              <Text style={styles.shareButtonText}>Share link</Text>
            </View>
          </LinearGradient>
        </TouchableNativeFeedback>
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          flexDirection: 'row',
          paddingTop: 10,
          paddingBottom: 20,
        }}>
        <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.borderLeft} />
            <View>
              <Text style={{paddingTop: 10, color: 'black'}}>
                Terms and conditions
              </Text>
              <View
                style={{
                  width: 100,
                  backgroundColor: '#ccc',
                  height: 1,
                  marginTop: 10,
                }}
              />
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  );
};

export default Invite;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  firstSentence: {
    paddingHorizontal: 20,
    paddingTop: 10,
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
  },
  rowWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  smallBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
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
  button: {
    borderRadius: 10,
    right: 10,
    height: 46,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  shareButtonWrapper: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  shareButton: {
    borderRadius: 10,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  shareButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  borderLeft: {
    height: 40,
    width: 3,
    borderRadius: 10,
    backgroundColor: '#25BFA3',
    marginRight: 10,
  },
});
