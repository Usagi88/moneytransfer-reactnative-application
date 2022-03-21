import {faUserAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IconButton} from 'react-native-paper';

import NavbarWithBackBtn from '../common/NavbarWithBackBtn';
import TitleHorizonDivider from '../common/TitleHorizonDivider';
import PencilEditIcon from '../SvgIconComponents/PencilEditIcon';

let {width} = Dimensions.get('window');

const Profile = () => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  
  
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
    flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    paddingBottom: 5,
  },
  subtitle: {
    color: '#858b94',
    textAlign: deviceLocale == 'dv' ? 'right' : null,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
});

  return (
    <>
      <NavbarWithBackBtn />
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

        <TitleHorizonDivider name={t('profile')} />
        <View style={styles.listTitleWrapper}>
          <View style={styles.userInfoBox}>
            <Text style={styles.title}>{t('email')}</Text>
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
            <Text style={styles.title}>{t('mobileNumber')}</Text>
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
            <Text style={styles.title}>{t('address')}</Text>
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
            <Text style={styles.title}>{t('islandCity')}</Text>
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
            <Text style={styles.title}>{t('country')}</Text>
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
            <Text style={styles.title}>{t('postCode')}</Text>
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

