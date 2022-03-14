import {faDownload, faShareSquare} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import LinearGradient from 'react-native-linear-gradient';
import Navbar from '../common/Navbar';

let {height, width} = Dimensions.get('window');
const Slip = () => {
  return (
    <>
      <Navbar />
      <View style={styles.column}>
        <View style={styles.slipWrapper}>
          <View style={styles.slip}>
            <ImageBackground
              source={require('../../assets/images/slipBanner.png')}
              resizeMode="cover"
              imageStyle={{borderTopRightRadius: 20, borderTopLeftRadius: 20}}
              style={{height: 140, width: '100%'}}>
              <View style={styles.slipBannerRow}>
                <Image
                  source={require('../../assets/images/whiteFahiPayLogo.png')}
                />
                <View
                  style={{
                    width: 120,
                    height: 1,
                    backgroundColor: '#97dfc6',
                    marginTop: 10,
                    marginBottom: 5,
                  }}
                />
                <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
                  Transaction Details
                </Text>
              </View>
            </ImageBackground>

            <View style={styles.slipInformation}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Status</Text>
                <Text style={{color: '#25BFA3', textAlign: 'right'}}>
                  Success
                </Text>
              </View>
              <View style={styles.divider} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Name</Text>
                <Text style={{textAlign: 'right'}}>MediaNet BillPay</Text>
              </View>
              <View style={styles.divider} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Details</Text>
                <View>
                  <Text style={{textAlign: 'right'}}>MediaNet BillPay</Text>
                  <Text style={{textAlign: 'right'}}>(158414) Local IPTV</Text>
                </View>
              </View>
              <View style={styles.divider} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Amount</Text>
                <Text style={{textAlign: 'right'}}>MVR -159</Text>
              </View>
              <View style={styles.divider} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Reference</Text>
                <Text style={{textAlign: 'right'}}>F120687246110RK</Text>
              </View>
              <View style={styles.divider} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black'}}>Time</Text>
                <Text style={{textAlign: 'right'}}>21st July 2021 - 19:24</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 15,
            alignItems: 'center',
          }}>
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon
                    icon={faShareSquare}
                    size={22}
                    color={'white'}
                  />
                  <Text style={styles.buttonText}>Share Receipt</Text>
                </View>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableNativeFeedback onPress={() => {}} useForeground={true}>
              <LinearGradient
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                colors={['#3AC170', '#25BFA3']}
                style={styles.button}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon
                    icon={faDownload}
                    size={22}
                    color={'white'}
                  />
                  <Text style={styles.buttonText}>Save Receipt</Text>
                </View>
              </LinearGradient>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </>
  );
};

export default Slip;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    width: width,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slipWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  slip: {
    backgroundColor: 'white',
    width: '100%',
    height: 485,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  slipInformation: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },

  buttonWrapper: {
    paddingHorizontal: 5,
    paddingBottom: 10,
    flex: 1,
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
    marginLeft: 10,
  },

  slipBannerRow: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
