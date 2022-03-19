import {
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IconButton} from 'react-native-paper';
import QuestionIcon from '../SvgIconComponents/QuestionIcon';
import ServiceIcon from '../SvgIconComponents/ServiceIcon';
import WalletIcon from '../SvgIconComponents/WalletIcon';
import BannerAmount from '../common/BannerAmount';
import LinearGradient from 'react-native-linear-gradient';
import FPCard from '../common/FPCard';
import CarouselBanner from '../common/Carousel/CarouselBanner';
import Navbar from '../common/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { useTranslation } from 'react-i18next';


let {width} = Dimensions.get('window');

const images = [
  require('../../assets/carousel/bannerFour.png'),
  require('../../assets/carousel/bannerFive.png'),
  require('../../assets/carousel/bannerSix.png'),
];

const Home = ({navigation}) => {
  const {t, i18n} = useTranslation();
  let deviceLocale = i18n.language;
  
  const styles = EStyleSheet.create({
    column: {
      flex: 1,
      backgroundColor: 'white',
    },
    carousel: {
      width: '100%',
      height: 120,
    },
    time: {
      width: '100%',
      height: 30,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    timeText: {
      fontSize: 14,
      color: 'black',
    },
    circleIconRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: width,
      top: 250,
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
    titleWrapper: {
      width: width,
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      paddingHorizontal: 20,
      marginTop: 60,
      paddingTop: 10,
      alignItems: 'center',
      height: 40,
      marginBottom: 10,
    
    },
    title: {
      fontSize: 20,
      fontWeight: '700',
      color: 'black',
      height: '100%',
 
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: '#ccc',
      marginLeft: 10,
      marginRight: 10,
    },
    smallBox: {
      borderRadius: 20,
      width: 40,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    listBox: {
      width: width,
      maxHeight: '100% - 50%',
    },
    imageContainer: {
      width: width,
      height: '100%',
      resizeMode: 'cover',
    },
  });
  
  let now = moment().format('HH:mm');
  return (
    <>
      <Navbar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.column}>
        <View style={styles.carousel}>
          <CarouselBanner images={images} />
        </View>
        <View style={styles.time}>
          <Text style={styles.timeText}>K.Male - {now}</Text>
        </View>
        <BannerAmount />
        <View style={styles.circleIconRow}>
          <View style={{alignItems: 'center'}}>
            <View style={styles.circleIcon}>
              <IconButton
                icon={() => (
                  <QuestionIcon width={32} height={32} color={'#ffa26b'} />
                )}
                size={40}
                onPress={() => {
                  navigation.navigate('LiveChat');
                }}
              />
            </View>
            <Text style={{paddingTop: 10}}>{t('support')}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.circleIcon}>
              <IconButton
                icon={() => (
                  <ServiceIcon width={32} height={32} color={'#7b89f9'} />
                )}
                size={40}
                onPress={() => {
                  navigation.navigate('Services');
                }}
              />
            </View>
            <Text style={{paddingTop: 10}}>{t('services')}</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={styles.circleIcon}>
              <IconButton
                style={{paddingLeft: 6, paddingTop: 6}}
                icon={() => (
                  <WalletIcon width={32} height={32} color={'#0caf39'} />
                )}
                size={40}
                onPress={() => {
                  navigation.navigate('AddCash');
                }}
              />
            </View>
            <Text style={{paddingTop: 10}}>{t('addCash')}</Text>
          </View>
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{t('history')}</Text>
          <View style={styles.divider} />
          <TouchableNativeFeedback onPress={() => {navigation.navigate('TransactionHistory')}} useForeground={true}>
            <LinearGradient
              colors={['#3AC170', '#25BFA3']}
              style={styles.smallBox}>
              <FontAwesomeIcon icon={faAngleUp} size={18} color={'white'} />
            </LinearGradient>
          </TouchableNativeFeedback>
        </View>
        <ScrollView style={styles.listBox} nestedScrollEnabled={true}>
          <FPCard
            backgroundColor={'#E03838'}
            description={t('refundedTransaction')}
            date={'19 June 2021 - 17:30'}
            amount={'532.00'}
            currency={'MVR'}
            icon={require('../../assets/icons/refund.png')}
          />
          <FPCard
            backgroundColor={'#0CAF39'}
            description={t('cashDeposit')}
            date={'19 June 2021 - 17:30'}
            amount={'31,912.90'}
            currency={'MVR'}
            icon={require('../../assets/icons/addcash.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={t('serviceRecharge')}
            date={'19 June 2021 - 17:30'}
            amount={'120.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={t('serviceRecharge')}
            date={'19 June 2021 - 17:30'}
            amount={'31,912.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={t('serviceRecharge')}
            date={'19 June 2021 - 17:30'}
            amount={'120.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={t('dhiraaguReload')}
            date={'19 June 2021 - 17:30'}
            amount={'31,912.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default Home;


