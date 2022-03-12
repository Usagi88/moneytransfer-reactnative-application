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
import GradientButton from '../../common/GradientButton';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChevronDown,
  faChevronUp,
  faLocationArrow,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import SelectDropdown from 'react-native-select-dropdown';
import BannerAmount from '../../common/BannerAmount';
import Navbar from '../../common/Navbar';
import LinearGradient from 'react-native-linear-gradient';

let {height, width} = Dimensions.get('window');

const PUBGBuyPackage = () => {
  const [mobileNumber, onChangeMobileNumber] = useState<any>(null);
  const [saveName, onChangeSaveName] = useState<any>(null);
  const [checked, setChecked] = useState(false);

  const packages = ['Package 1', 'Package 2', 'Package 3', 'Package 4'];

  return (
    <>
      <Navbar />
      <ScrollView style={styles.listBox}>
        <View style={styles.column}>
          <BannerAmount />
          <Text style={styles.firstSentence}>
            Enter the player ID and select a package to buy PUBG UC.
          </Text>
          <Text style={styles.inputText}>Player ID</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeMobileNumber}
              value={mobileNumber}
              placeholder="Player ID"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.inputText}>Select Package</Text>
          <View style={{paddingHorizontal: 20}}>
            <SelectDropdown
              data={packages}
              onSelect={(selectedItem, index) => {
                //console.log(selectedItem, index);
              }}
              defaultButtonText={'Select a package'}
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
                textAlign: 'left',
              }}
              rowTextStyle={{
                fontSize: 14,
                textAlign: 'left',
              }}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <Text style={styles.buttonText}>Buy Package</Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
          <View style={{paddingHorizontal: 20, paddingTop: 10}}>
              <Text style={{color: 'red'}}>UC will be delivered within 5 to 30 minutes. This transaction is non-refundable</Text>
              <View style={{width: 100, height: 1, backgroundColor: 'red', marginTop: 10,}}/>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PUBGBuyPackage;

const styles = EStyleSheet.create({
  column: {
    width: width,
    minHeight: height - 56,
    backgroundColor: 'white',
  },
  firstSentence: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 14,
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
  buttonWrapper: {
    paddingHorizontal: 20,

    paddingBottom: 10,
  },
  button: {
    borderRadius: 10,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  buttonText: {
    color: 'white',
  },
});
