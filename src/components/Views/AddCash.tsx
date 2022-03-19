import React from 'react';
import { useTranslation } from 'react-i18next';
import {Image, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IconButton} from 'react-native-paper';
import CarouselBanner from '../common/Carousel/CarouselBanner';
import NavbarWithBackBtn from '../common/NavbarWithBackBtn';

const images = [
  require('../../assets/carousel/bannerOne.png'),
  require('../../assets/carousel/bannerTwo.png'),
  require('../../assets/carousel/bannerThree.png'),
];

const AddCash = ({navigation}) => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  
  return (
    <>
      <NavbarWithBackBtn />
      <View style={styles.column}>
        <View style={styles.carousel}>
          <CarouselBanner images={images} />
        </View>
        <View style={styles.iconWrapper}>
          <View style={styles.circleIconWrapper}>
            <View style={styles.circleIcon}>
              <IconButton
                icon={() => (
                  <Image
                    source={require('../../assets/icons/bml.png')}
                    style={{width: 50, height: 50}}
                  />
                )}
                size={40}
                onPress={() => {
                  navigation.navigate('TopUpVia', {
                    tabId: 0,
                  });
                }}
              />
            </View>
            <Text style={{textAlign: 'center', paddingTop: 10}}>{t('bml')}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 60,
            }}>
            <View style={styles.circleIconWrapper}>
              <View style={styles.circleIcon}>
                <IconButton
                  icon={() => (
                    <Image
                      source={require('../../assets/icons/cashcard.png')}
                      style={{width: 50, height: 50}}
                    />
                  )}
                  size={40}
                  onPress={() => {
                    navigation.navigate('CashCard');
                  }}
                />
              </View>
              <Text style={{textAlign: 'center', paddingTop: 10}}>
                {t('cashCard')}
              </Text>
            </View>
            <View style={styles.circleIconWrapper}>
              <View style={styles.circleIcon}>
                <IconButton
                  icon={() => (
                    <Image
                      source={require('../../assets/icons/mib.png')}
                      style={{width: 50, height: 50}}
                    />
                  )}
                  size={40}
                  onPress={() => {
                    navigation.navigate('TopUpVia', {
                      tabId: 1,
                    });
                  }}
                />
              </View>
              <Text style={{textAlign: 'center', paddingTop: 10}}>{t('mib')}</Text>
            </View>
          </View>
          <View style={styles.circleIconWrapper}>
            <View style={styles.circleIcon}>
              <IconButton
                icon={() => (
                  <Image
                    source={require('../../assets/icons/bonus.png')}
                    style={{width: 50, height: 50}}
                  />
                )}
                size={40}
                onPress={() => {
                  navigation.navigate('Bonus');
                }}
              />
            </View>
            <Text style={{textAlign: 'center', paddingTop: 10}}>{t('bonus')}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default AddCash;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  carousel: {
    width: '100%',
    height: 120,
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    bottom: 40,
  },
  circleIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
});
