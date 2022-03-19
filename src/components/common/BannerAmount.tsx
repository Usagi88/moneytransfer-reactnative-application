import React from 'react';
import {View, Text, Dimensions, ImageBackground} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import BannerWalletIcon from '../SvgIconComponents/BannerWalletIcon';
import {CountUp} from 'use-count-up';
import { useTranslation } from 'react-i18next';

let {width} = Dimensions.get('window');

const BannerAmount = () => {
  const {i18n} = useTranslation();
  let deviceLocale = i18n.language;
  
  const styles = EStyleSheet.create({
    bannerRow: {
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 25,
    },
    verticalDivider: {
      width: 1,
      height: 50,
      backgroundColor: '#4dcfa2',
      marginLeft: 20,
      marginRight: 20,
    },
    firstRow: {
      width: '100%',
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
    secondRow: {
      width: '100%',
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      alignItems: 'center',
    },
    amount: {
      color: 'white',
      fontWeight: '700',
      fontSize: 26,
    },
    currency: {
      marginTop: 7,
      marginLeft: deviceLocale == 'dv' ? 0 : 5,
      marginRight: deviceLocale == 'dv' ? 5 : 0,
      fontSize: 14,
      color: '#055A40',
    },
    points: {
      color: 'white',
      fontWeight: '700',
      fontSize: 26,
    },
    pointsText: {
      marginTop: 7,
      marginLeft: deviceLocale == 'dv' ? 0 : 5,
      marginRight: deviceLocale == 'dv' ? 5 : 0,
      fontSize: 14,
      color: '#055A40',
    },
  });

  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/banner.png')}
        style={{
          height: 160,
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.bannerRow}>
          <BannerWalletIcon width={52} height={52} color={'white'} />
          <View style={styles.verticalDivider} />
          <View>
            <View style={styles.firstRow}>
              <Text style={styles.amount}>
                <CountUp
                  isCounting
                  end={20320.2}
                  duration={1}
                  decimalPlaces={2}
                />
              </Text>
              <Text style={styles.currency}>MVR</Text>
            </View>
            <View style={styles.secondRow}>
              <Text style={styles.points}>
                <CountUp isCounting end={200} duration={1} />
              </Text>
              <Text style={styles.pointsText}>Points</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};



export default BannerAmount;
