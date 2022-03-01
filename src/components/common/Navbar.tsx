import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import QRCodeIcon from '../SvgIconComponents/QRCodeIcon';
import Icon from 'react-native-vector-icons/FontAwesome';
import LiveChatIcon from '../SvgIconComponents/LiveChatIcon';

let {height, width} = Dimensions.get('window');
const Navbar = () => (
  <Appbar style={styles.bottom}>
    <View
      style={{
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: width,
        paddingHorizontal: 10,
      }}>
      <Appbar.Action
        icon={() => <Icon name="bars" size={26} color="#25BFA3" />}
        onPress={() => console.log('Pressed archive')}
      />
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/fahipay-logo.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Appbar.Action
          style={{paddingTop: 6}}
          icon={() => <QRCodeIcon color={'#25BFA3'} width={32} height={32} />}
          onPress={() => console.log('Pressed mail')}
        />
        <Appbar.Action
          icon={() => <LiveChatIcon color={'#25BFA3'} width={32} height={32} />}
          onPress={() => console.log('Pressed delete')}
        />
      </View>
    </View>
  </Appbar>
);

export default Navbar;

const styles = StyleSheet.create({
  bottom: {
    left: 0,
    right: 0,
    top: 0,
    zIndex: 100,
    backgroundColor: 'white',
    elevation: 1
  },
  imageContainer: {
    width: 150,
    height: 40,
    marginTop: 6,
    marginLeft: 30,
    padding: 5,
    resizeMode: 'cover',
  },
});
