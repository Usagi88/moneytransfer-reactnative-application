import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  Image,
  Text,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const FPCard = (props: any) => {
  const {i18n} = useTranslation();
  let deviceLocale = i18n.language;
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
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      borderRadius: 10,
    },
    leftBorder: {
      width: 2,
      height: 40,
    },
    box: {
      height: 40,
      width: 40,
      marginLeft: deviceLocale == 'dv' ? 0 : 10,
      marginRight: deviceLocale == 'dv' ? 10 : 0,
      borderRadius: 10,
    },
    descriptionWrapper: {
      flex: 1,
      marginLeft: deviceLocale == 'dv' ? 0 : 10,
      marginRight: deviceLocale == 'dv' ? 10 : 0,
    },
    description: {
        color: 'black',
        fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
    date: {
        color: '#929292',
        textAlign: deviceLocale == 'dv' ? 'right' : 'left',
    },
    amountWrapper: {
      marginRight: deviceLocale == 'dv' ? 0 : 10,
      marginLeft: deviceLocale == 'dv' ? 10 : 0,
      alignItems: deviceLocale == 'dv' ? 'flex-start' : 'flex-end',
    },
    amount: {
      fontWeight: '500',
    },
    currency: {
        color: 'black',
        fontWeight: '700',
    },
  });

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
