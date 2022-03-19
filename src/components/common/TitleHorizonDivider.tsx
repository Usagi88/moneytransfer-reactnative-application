import React from 'react';
import { useTranslation } from 'react-i18next';
import {Dimensions, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import i18n from '../helper/i18n';

let {width} = Dimensions.get('window');

interface TitleHorizonDividerType {
  name: string;
}

const TitleHorizonDivider = (props: TitleHorizonDividerType) => {
  
  let deviceLocale = i18n.language;

  const styles = EStyleSheet.create({
    titleWrapper: {
      width: width,
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 10,
      alignItems: 'center',
      height: 60,
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: 'black',
      height: '100%'
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
      marginLeft: 10,
      marginRight: 10,
    },
  });

  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{props.name}</Text>
      <View style={styles.divider} />
    </View>
  );
};

export default TitleHorizonDivider;


