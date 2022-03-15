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

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCameraAlt,
  faLocationArrow,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

import LinearGradient from 'react-native-linear-gradient';

import ReceiverChatBubble from '../common/ReceiverChatBubble';
import SenderChatBubble from '../common/SenderChatBubble';
import NavbarWithBackBtn from '../common/NavbarWithBackBtn';

let {width} = Dimensions.get('window');

const LiveChat = () => {
  const [message, onChangeMessage] = useState<any>(null);
  const [livechatMessages, setLivechatMessages] = useState<any>([]);

  const addMessage = () => {
    onChangeMessage('');
    setLivechatMessages([...livechatMessages, message]);
  };

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Live Chat</Text>
          <View style={styles.divider} />
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient
              colors={['#3AC170', '#25BFA3']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.box}>
              <FontAwesomeIcon icon={faPhone} size={20} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
        <ScrollView style={styles.livechatBox} nestedScrollEnabled={true}>
          <View style={{padding: 10, paddingBottom: 20}}>
            <ReceiverChatBubble message="Type something please" />
            {livechatMessages?.map((livechatMessage: string, index:number) => {
              return (
                <SenderChatBubble message={livechatMessage} key={index}/>
              );
            })}
            
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeMessage}
              value={message}
              placeholder="Type your message here"
              onSubmitEditing={addMessage}
            />
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <View style={styles.button}>
                  <FontAwesomeIcon
                    icon={faCameraAlt}
                    size={22}
                    color={'#c8cbcf'}
                  />
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
          <TouchableNativeFeedback onPress={addMessage} useForeground={true}>
            <LinearGradient
              colors={['#3AC170', '#25BFA3']}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.submitBtn}>
              <FontAwesomeIcon
                icon={faLocationArrow}
                size={30}
                color={'white'}
              />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </>
  );
};

export default LiveChat;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    width: 40,
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleWrapper: {
    width: width,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    marginLeft: 10,
    marginRight: 10,
  },
  inputWrapper: {
    paddingTop: 6,
    paddingBottom: 10,
    flexDirection: 'row',
    flex: 1,
  },
  input: {
    height: 46,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
  },
  button: {
    borderRadius: 10,
    right: 10,
    height: 46,
    width: 46,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
  },
  livechatBox: {
    height: '100% - 190',
  },
  submitBtn: {
    width: 46,
    height: 46,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
