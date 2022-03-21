import React from 'react';
import { useTranslation } from 'react-i18next';
import {ScrollView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const Referrals = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  
  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    firstSentence: {
      paddingHorizontal: 20,
      paddingTop: 10,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
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
  });

  return (
    <ScrollView style={styles.column}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.firstSentence}>
          {t('noOneRegisteredYet')}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Referrals;


