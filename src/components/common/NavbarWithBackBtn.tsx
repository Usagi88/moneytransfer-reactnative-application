import React from 'react';
import {Appbar} from 'react-native-paper';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import QRCodeIcon from '../SvgIconComponents/QRCodeIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import LiveChatIcon from '../SvgIconComponents/LiveChatIcon';
import {useNavigation} from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

let {width} = Dimensions.get('window');
const NavbarWithBackBtn = () => {
  const navigation = useNavigation<any>();
  return (
    <Appbar
      style={{
        left: 0,
        right: 0,
        top: 0,
        zIndex: 100,
        backgroundColor: 'white',
        elevation: 4,
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          width: width,
          paddingHorizontal: 10,
        }}>
        <Appbar.Action
          icon={() => <FontAwesomeIcon icon={faArrowLeft} size={22} color={'#25BFA3'} />}
          onPress={() => navigation.navigate('HomeStack')}
        />
        <View style={styles.imageContainer}>
          <TouchableNativeFeedback
            onPress={() => {
              navigation.navigate('HomeStack');
            }}>
            <Image
              source={require('../../assets/images/fahipay-logo.png')}
              style={{width: '100%', height: '100%'}}
            />
          </TouchableNativeFeedback>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Appbar.Action
            style={{paddingTop: 6}}
            icon={() => <QRCodeIcon color={'#25BFA3'} width={32} height={32} />}
            onPress={() => {}}
          />
          <Appbar.Action
            icon={() => (
              <LiveChatIcon color={'#25BFA3'} width={32} height={32} />
            )}
            onPress={() => {
              navigation.navigate('LiveChat');
            }}
          />
        </View>
      </View>
    </Appbar>
  );
};

export default NavbarWithBackBtn;

const styles = StyleSheet.create({
  imageContainer: {
    width: width > 320 ? 150 : 130,
    height: 40,
    marginTop: 6,
    marginLeft: 30,
    padding: 5,
    resizeMode: 'cover',
  },
});
