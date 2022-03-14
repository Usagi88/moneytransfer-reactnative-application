import {faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IconButton} from 'react-native-paper';
import Navbar from '../common/Navbar';
import TitleHorizonDivider from '../common/TitleHorizonDivider';
import PencilEditIcon from '../SvgIconComponents/PencilEditIcon';

let {width} = Dimensions.get('window');

const Profile = () => {
  return (
    <>
      <Navbar />
      <ScrollView style={styles.column}>
        <ImageBackground
          source={require('../../assets/images/banner.png')}
          style={{
            height: 160,
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.bannerRow}>
            <FontAwesomeIcon icon={faUserAlt} size={44} color={'white'} />

            <View style={{marginLeft: 20}}>
              <Text style={styles.textStyle}>Test Name</Text>
              <Text style={styles.textStyle}>A123456</Text>
            </View>
          </View>
        </ImageBackground>

        <TitleHorizonDivider name={'Profile'} />
        <View style={styles.listTitleWrapper}>
          <View style={styles.userInfoBox}>
            <Text style={styles.title}>Email</Text>
            <Text style={styles.subtitle}>test@gmail.com</Text>
          </View>
          <IconButton
            icon={() => (
              <PencilEditIcon width={24} height={24} color={'#25BFA3'} />
            )}
            size={24}
            onPress={() => {}}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.divider} />
        </View>

        <View style={styles.listTitleWrapper}>
          <View style={styles.userInfoBox}>
            <Text style={styles.title}>Mobile Number</Text>
            <Text style={styles.subtitle}>7777777</Text>
          </View>
          <IconButton
            icon={() => (
              <PencilEditIcon width={24} height={24} color={'#25BFA3'} />
            )}
            size={24}
            onPress={() => {}}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.divider} />
        </View>

        <View style={styles.listTitleWrapper}>
          <View style={styles.userInfoBox}>
            <Text style={styles.title}>Address</Text>
            <Text style={styles.subtitle}>test address</Text>
          </View>
          <IconButton
            icon={() => (
              <PencilEditIcon width={24} height={24} color={'#25BFA3'} />
            )}
            size={24}
            onPress={() => {}}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.divider} />
        </View>

        <View style={styles.listTitleWrapper}>
          <View style={styles.userInfoBox}>
            <Text style={styles.title}>Island/City</Text>
            <Text style={styles.subtitle}>test island/city</Text>
          </View>
          <IconButton
            icon={() => (
              <PencilEditIcon width={24} height={24} color={'#25BFA3'} />
            )}
            size={24}
            onPress={() => {}}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.divider} />
        </View>

        <View style={styles.listTitleWrapper}>
          <View style={styles.userInfoBox}>
            <Text style={styles.title}>Country</Text>
            <Text style={styles.subtitle}>test country</Text>
          </View>
          <IconButton
            icon={() => (
              <PencilEditIcon width={24} height={24} color={'#25BFA3'} />
            )}
            size={24}
            onPress={() => {}}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.divider} />
        </View>

        <View style={styles.listTitleWrapper}>
          <View style={styles.userInfoBox}>
            <Text style={styles.title}>Post Code</Text>
            <Text style={styles.subtitle}>test post code</Text>
          </View>
          <IconButton
            icon={() => (
              <PencilEditIcon width={24} height={24} color={'#25BFA3'} />
            )}
            size={24}
            onPress={() => {}}
          />
        </View>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.divider} />
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  bannerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
   
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  listTitleWrapper: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    paddingBottom: 5,
  },
  subtitle: {
    color: '#858b94',
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});
