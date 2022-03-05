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
  }
});
const CustomDrawerContent = (props: any) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <ImageBackground
          source={require('../../assets/images/fahipay-logo.png')}
          style={styles.backgroundImageContainer}>
        </ImageBackground>
        <View style={styles.divider}/>
        <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 10, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
                color: 'black',
                fontWeight: '500'
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
