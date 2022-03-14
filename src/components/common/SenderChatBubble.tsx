import moment from 'moment';
import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import LiveChatTriangle from '../SvgIconComponents/LiveChatTriangle';

interface SenderChatBubbleType {
  message: string;
}

const SenderChatBubble = (props: SenderChatBubbleType) => {
  let now = moment().format('HH:mm');
  return (
    <View style={styles.senderBubbleContainer}>
      <Text style={{textAlign: 'right', paddingRight: 20, top: 5}}>You</Text>
      <View style={styles.senderBubbleWrapper}>
        <LinearGradient
          colors={['#3AC170', '#25BFA3']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={styles.senderBubble}>
          <Text style={{textAlign: 'right', color: 'white'}}>
            {props.message}
          </Text>
          <Text style={{textAlign: 'left', color: 'white'}}>{now}</Text>
        </LinearGradient>
        <LiveChatTriangle
          style={styles.senderBubbleTriangle}
          width={32}
          height={32}
          color={'#26bfa1'}
        />
      </View>
    </View>
  );
};

export default SenderChatBubble;

const styles = EStyleSheet.create({
  senderBubbleContainer: {
    paddingVertical: 5,
  },
  senderBubbleWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  senderBubble: {
    maxWidth: '80%',
    minWidth: '30%',
    minHeight: 40,
    borderRadius: 10,
    left: 14,
    top: 7,
    paddingRight: 20,
    paddingLeft: 10,
    paddingVertical: 10,
  },
});
