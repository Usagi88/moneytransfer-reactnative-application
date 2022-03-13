import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
import SelectDropdown from 'react-native-select-dropdown';
import BannerAmount from '../../common/BannerAmount';
import Navbar from '../../common/Navbar';
import LinearGradient from 'react-native-linear-gradient';

let {width} = Dimensions.get('window');

const GiftCards = () => {
  const [selectedItem, setSelectedItem] = useState('All');

  const packages = ['All', 'Itunes', 'Playstation', 'Netflix'];

  let giftcard: any;
  switch (selectedItem) {
    case 'All':
      giftcard = (
        <>
          <View style={styles.giftcard}>
            <Text style={styles.giftcardTitle}>ITUNES</Text>
            <Text style={styles.giftcardAmount}>MVR 50</Text>
            <View style={{paddingHorizontal: width > 320 ? 20 : 10}}>
              <View style={styles.divider} />
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['#3AC170', '#25BFA3']}
                    style={styles.buttonActive}>
                    <Text style={styles.buttonTextActive}>$2</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$3</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$5</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$10</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$15</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$25</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$50</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$100</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={styles.bigButtonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.bigButton}>
                  <Text style={styles.bigButtonText}>BUY</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.giftcard}>
            <Text style={styles.giftcardTitle}>PLAYSTATION</Text>
            <Text style={styles.giftcardAmount}>MVR 225</Text>
            <View style={{paddingHorizontal: width > 320 ? 20 : 10}}>
              <View style={styles.divider} />
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['#3AC170', '#25BFA3']}
                    style={styles.buttonActive}>
                    <Text style={styles.buttonTextActive}>$10</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$20</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$24.99</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$25</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$50</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$59.99</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['white', 'white']}
                    style={styles.button}>
                    <Text style={styles.buttonText}>$100</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={styles.bigButtonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.bigButton}>
                  <Text style={styles.bigButtonText}>BUY</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.giftcard}>
            <Text style={styles.giftcardTitle}>NETFLIX</Text>
            <Text style={styles.giftcardAmount}>MVR 660</Text>
            <View style={{paddingHorizontal: width > 320 ? 20 : 10}}>
              <View style={styles.divider} />
            </View>
            <View style={styles.buttonRow}>
              <View style={styles.buttonWrapper}>
                <TouchableNativeFeedback
                  onPress={() => {}}
                  useForeground={true}>
                  <LinearGradient
                    start={{x: 0, y: 1}}
                    end={{x: 1, y: 1}}
                    colors={['#3AC170', '#25BFA3']}
                    style={styles.buttonActive}>
                    <Text style={styles.buttonTextActive}>$30</Text>
                  </LinearGradient>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={styles.buttonRow}></View>
            <View style={styles.bigButtonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.bigButton}>
                  <Text style={styles.bigButtonText}>BUY</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
        </>
      );
      break;
    case 'Itunes':
      giftcard = (
        <View style={styles.giftcard}>
          <Text style={styles.giftcardTitle}>ITUNES</Text>
          <Text style={styles.giftcardAmount}>MVR 50</Text>
          <View style={{paddingHorizontal: width > 320 ? 20 : 10}}>
            <View style={styles.divider} />
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.buttonActive}>
                  <Text style={styles.buttonTextActive}>$2</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$3</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$5</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$10</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$15</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$25</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$50</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$100</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.bigButtonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.bigButton}>
                <Text style={styles.bigButtonText}>BUY</Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
      );
      break;
    case 'Playstation':
      giftcard = (
        <View style={styles.giftcard}>
          <Text style={styles.giftcardTitle}>PLAYSTATION</Text>
          <Text style={styles.giftcardAmount}>MVR 225</Text>
          <View style={{paddingHorizontal: width > 320 ? 20 : 10}}>
            <View style={styles.divider} />
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.buttonActive}>
                  <Text style={styles.buttonTextActive}>$10</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$20</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$24.99</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$25</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$50</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$59.99</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['white', 'white']}
                  style={styles.button}>
                  <Text style={styles.buttonText}>$100</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.bigButtonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.bigButton}>
                <Text style={styles.bigButtonText}>BUY</Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
      );
      break;
    case 'Netflix':
      giftcard = (
        <View style={styles.giftcard}>
          <Text style={styles.giftcardTitle}>NETFLIX</Text>
          <Text style={styles.giftcardAmount}>MVR 660</Text>
          <View style={{paddingHorizontal: width > 320 ? 20 : 10}}>
            <View style={styles.divider} />
          </View>
          <View style={styles.buttonRow}>
            <View style={styles.buttonWrapper}>
              <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
                <LinearGradient
                  start={{x: 0, y: 1}}
                  end={{x: 1, y: 1}}
                  colors={['#3AC170', '#25BFA3']}
                  style={styles.buttonActive}>
                  <Text style={styles.buttonTextActive}>$30</Text>
                </LinearGradient>
              </TouchableNativeFeedback>
            </View>
          </View>
          <View style={styles.buttonRow}></View>
          <View style={styles.bigButtonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.bigButton}>
                <Text style={styles.bigButtonText}>BUY</Text>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
      );
      break;
    default:
  }
  return (
    <>
      <Navbar />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <View style={{paddingHorizontal: 20}}>
          <SelectDropdown
            data={packages}
            onSelect={(selectedItem, index) => {
              setSelectedItem(selectedItem);
            }}
            defaultButtonText={'Select a gift card'}
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
        {giftcard}
      </ScrollView>
    </>
  );
};

export default GiftCards;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
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
  buttonWrapper: {},
  button: {
    borderRadius: 10,
    width: width > 320 ? 70 : 60,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    color: 'black',
    borderColor: '#ccc',
    borderWidth: 2,
    marginHorizontal: 2,
  },
  buttonActive: {
    borderRadius: 10,
    width: width > 320 ? 70 : 60,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 2,
  },
  buttonText: {},
  buttonTextActive: {
    color: 'white',
  },
  giftcard: {
    marginHorizontal: 20,
    height: 220,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 40,
  },
  giftcardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginLeft: width > 320 ? 20 : 10,
    marginTop: width > 320 ? 20 : 10,
  },
  giftcardAmount: {
    color: '#25BFA3',
    marginLeft: width > 320 ? 20 : 10,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: width > 320 ? 20 : 10,
    height: 35,
  },

  bigButtonWrapper: {},
  bigButton: {
    borderRadius: 10,
    width: 130,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20,
    left: width > 320 ? 200 : 130,
    zIndex: 100,
    overflow: 'hidden',
  },
  bigButtonText: {
    color: 'white',
  },
});
