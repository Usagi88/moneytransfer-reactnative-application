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
import {
  faChevronDown,
  faChevronUp,
  faLocationArrow,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import SelectDropdown from 'react-native-select-dropdown';
import {useTranslation} from 'react-i18next';

const OoredooPackageRecharge = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  const packages = ['Package 1', 'Package 2', 'Package 3', 'Package 4'];

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
  });

  return (
    <ScrollView style={styles.column}>
      <Text style={styles.firstSentence}>
        {t('packageRechargeViewOoredooFirstText')}
      </Text>
      <GradientButton text={t('pickContact')} onPress={() => {}} />
      <Text style={styles.inputText}>{t('selectPackage')}</Text>
      <View style={{paddingHorizontal: 20}}>
        <SelectDropdown
          data={packages}
          onSelect={(selectedItem, index) => {
            //console.log(selectedItem, index);
          }}
          defaultButtonText={t('selectPackage')}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <FontAwesomeIcon
                icon={isOpened ? faChevronUp : faChevronDown}
                color={'#444'}
                size={18}
              />
            );
          }}
          buttonStyle={{
            width: '100%',
            borderRadius: 10,
            marginTop: 6,
            marginBottom: 20,
          }}
          buttonTextStyle={{
            fontSize: 14,
            textAlign: deviceLocale == 'dv' ? 'left' : 'left',
          }}
          rowTextStyle={{
            fontSize: 14,
            textAlign: deviceLocale == 'dv' ? 'right' : 'left',
          }}
        />
      </View>

      <Text style={styles.inputText}>{t('mobileNumber')}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeMobileNumber}
          value={mobileNumber}
          placeholder={t('mobileNumber')}
          keyboardType="numeric"
        />
      </View>
      {checked === true ? (
        <>
          <Text style={styles.inputText}>{t('nametoSave')}</Text>
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

      <GradientButton text={t('buyPackage')} onPress={() => {}} />
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

export default OoredooPackageRecharge;
