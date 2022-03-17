import {
  faEnvelope,
  faIdCard,
  faPhone,
  faPhoneAlt,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


const CustomDrawerContent = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 80,
          width: 80,
          borderRadius: 40,
          marginBottom: 10,
          backgroundColor: '#ccc',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 20,
          marginTop: 20,
        }}>
        <Text style={{fontSize: 20}}>TU</Text>
      </View>
      <Text
        style={{
          color: 'black',
          fontSize: 18,
          marginBottom: 5,
          fontWeight: '700',
          marginLeft: 20,
        }}>
        Test User
      </Text>
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginLeft: 20}}>
        <FontAwesomeIcon icon={faPhoneAlt} size={16} color={'#25BFA3'} />
        <Text
          style={{
            color: 'black',
            marginLeft: 10,
          }}>
          7777777
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 20,
          marginTop: 5,
        }}>
        <FontAwesomeIcon icon={faEnvelope} size={16} color={'#25BFA3'} />
        <Text
          style={{
            color: 'black',
            marginLeft: 10,
          }}>
          testUser@gmail.com
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 20,
          marginTop: 5,
          marginBottom: 20,
        }}>
        <FontAwesomeIcon icon={faUserAlt} size={16} color={'#25BFA3'} />
        <Text
          style={{
            color: 'black',
            marginLeft: 10,
          }}>
          A123456
        </Text>
      </View>
      <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}/>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 10, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {props.navigation.navigate('ChangeLanguage');}} style={{paddingVertical: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
                color: 'black',
                fontWeight: '500',
              }}>
              Change Language
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawerContent;

const styles = EStyleSheet.create({
  backgroundImageContainer: {
    width: 160,
    height: 40,
    marginTop: 20,
    marginLeft: 10,
    resizeMode: 'cover',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 20,
  },
});