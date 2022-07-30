import React from 'react';
import {Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LiveChatTriangle from '../SvgIconComponents/LiveChatTriangle';

interface ReceiverChatBubbleType {
    message: string,
}

const ReceiverChatBubble = (props:ReceiverChatBubbleType) => {
  return (
    <View style={styles.receiverBubbleContainer}>
      <Text style={{textAlign: 'left', paddingLeft: 20, top: 5}}>
        Helpdesk
      </Text>
      <View style={styles.receiverBubbleWrapper}>
        <LiveChatTriangle
          style={styles.receiverBubbleTriangle}
          width={32}
          height={32}
          color={'#edeaef'}
        />
        <View style={styles.receiverBubble}>
          <Text style={{textAlign: 'left', color: 'black'}}>
            {props.message}
          </Text>
          <Text style={{textAlign: 'right', color: '#838892'}}>19:12</Text>
        </View>
      </View>
    </View>
  );
};

export default ReceiverChatBubble;

const styles = EStyleSheet.create({
  receiverBubbleContainer: {
    paddingVertical: 5,
  },
  receiverBubbleWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  receiverBubble: {
    maxWidth: '80%',
    minWidth: '30%',
    minHeight: 40,
    borderRadius: 10,
    right: 17,
    top: 6,
    paddingLeft: 20,
    paddingRight: 10,
    paddingVertical: 10,
    backgroundColor: '#edeaef',
  },
});
