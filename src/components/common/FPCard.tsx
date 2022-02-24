import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let {height, width} = Dimensions.get('window');
//backgroundColor: '#fafafa'
const styles = EStyleSheet.create({
  card: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#EEEEEE',
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
  },
  leftBorder: {
    width: 2,
    height: 40,
  },
  box: {
    height: 40,
    width: 40,
    marginLeft: 10,
    borderRadius: 10,
  },
  descriptionWrapper: {
    flex: 1,
    marginLeft: 10,
  },
  description: {
      color: 'black',

  },
  date: {
      color: '#929292',
  },
  amountWrapper: {
    marginRight: 10,
    alignItems: 'flex-end'
  },
  amount: {
    fontWeight: '500',
  },
  currency: {
      color: 'black',
      fontWeight: '700',
  },
});
const FPCard = (props: any) => {
  return (
    <View style={styles.card}>
      <View
        style={[styles.leftBorder, {backgroundColor: props.backgroundColor}]}
      />
      <Image style={styles.box} source={props.icon} />
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>{props.description}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
      <View style={styles.amountWrapper}>
        <Text style={[styles.amount, {color: props.backgroundColor}]}>{props.amount}</Text>
        <Text style={styles.currency}>{props.currency}</Text>
      </View>
    </View>
  );
};

export default FPCard;
