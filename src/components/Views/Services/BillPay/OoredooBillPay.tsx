import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import GradientButton from '../../../common/GradientButton';
import {Checkbox, DataTable, IconButton} from 'react-native-paper';
import TitleHorizonDivider from '../../../common/TitleHorizonDivider';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faLocationArrow, faTrash} from '@fortawesome/free-solid-svg-icons';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';

const OoredooBillPay = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  const [serviceNumber, onChangeServiceNumber] = useState<any>(null);
  const [amount, onChangeAmount] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

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
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
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
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
      textAlign: deviceLocale == 'dv' ? 'right' : 'left',
    },
    checkboxContainerWrapper: {
      alignItems: 'flex-end',
      marginHorizontal: 20,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 150,
      justifyContent: 'center',
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
      alignItems: deviceLocale == 'dv' ? 'flex-start' : 'flex-end',
      paddingRight: deviceLocale == 'dv' ? 0 : 20,
      paddingLeft: deviceLocale == 'dv' ? 20 : 0,
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
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null,
    },
  });

  return (
    <ScrollView style={styles.column}>
      <Text style={styles.firstSentence}>{t('ooredooBillPayFirstText')}</Text>
      <GradientButton text={t('pickContact')} onPress={() => {}} />
      <Text style={styles.inputText}>{t('serviceNumber')}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeServiceNumber}
          value={serviceNumber}
          placeholder={t('serviceNumber')}
        />
        <View style={styles.buttonWrapper}>
          <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              colors={['#3AC170', '#25BFA3']}
              style={styles.button}>
              <Text style={styles.buttonText}>{t('checkBalance')}</Text>
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
      </View>
      <Text style={styles.inputText}>{t('amount')}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAmount}
          value={amount}
          placeholder={t('amount')}
          keyboardType="numeric"
        />
      </View>
      {checked === true ? (
        <>
          <Text style={styles.inputText}>{t('nameToSave')}</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSaveName}
              value={saveName}
              placeholder={t('nameToSave')}
            />
          </View>
        </>
      ) : null}
      <View style={styles.checkboxContainerWrapper}>
        <TouchableNativeFeedback
          onPress={() => {
            setChecked(!checked);
          }}>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color={'#25BFA3'}
            />
            <Text style={styles.label}>{t('keepInfoSaved')}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>

      <GradientButton text={t('payBill')}  onPress={() => {}} />
      <TitleHorizonDivider name={t('savedNumbers')} />
      <DataTable style={{paddingBottom: 40, paddingHorizontal: 20}}>
        <DataTable.Header>
          <DataTable.Title>
            <Text style={styles.dataTableHeader}>#</Text>
          </DataTable.Title>
          <DataTable.Title style={{flex: 2}}>
            <Text style={styles.dataTableHeader}>{t('details')}</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.dataTableHeader}>{t('delete')}</Text>
          </DataTable.Title>
          <DataTable.Title>
            <Text style={styles.dataTableHeader}>{t('show')}</Text>
          </DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>1</DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
            <View>
              <Text style={styles.dataTableCell}>777777</Text>
              <Text style={styles.dataTableCell}>Test name</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.iconButton}>
              <IconButton
                icon={() => (
                  <FontAwesomeIcon icon={faTrash} size={22} color={'#25BFA3'} />
                )}
                size={22}
                onPress={() => {}}
              />
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.iconButton}>
              <IconButton
                icon={() => (
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    size={22}
                    color={'#25BFA3'}
                  />
                )}
                size={22}
                onPress={() => {}}
              />
            </View>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>2</DataTable.Cell>
          <DataTable.Cell style={{flex: 2}}>
            <View>
              <Text style={styles.dataTableCell}>777777</Text>
              <Text style={styles.dataTableCell}>Test name</Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.iconButton}>
              <IconButton
                icon={() => (
                  <FontAwesomeIcon icon={faTrash} size={22} color={'#25BFA3'} />
                )}
                size={22}
                onPress={() => {}}
              />
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <View style={styles.iconButton}>
              <IconButton
                icon={() => (
                  <FontAwesomeIcon
                    icon={faLocationArrow}
                    size={22}
                    color={'#25BFA3'}
                  />
                )}
                size={22}
                onPress={() => {}}
              />
            </View>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </ScrollView>
  );
};

export default OoredooBillPay;
