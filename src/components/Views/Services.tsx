import React from 'react';
import { useTranslation } from 'react-i18next';
import {Dimensions, ScrollView, StatusBar, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CarouselBanner from '../common/Carousel/CarouselBanner';
import NavbarWithBackBtn from '../common/NavbarWithBackBtn';
import ServiceCard from '../common/ServiceCard';
import TitleHorizonDivider from '../common/TitleHorizonDivider';


const images = [
  require('../../assets/carousel/bannerOne.png'),
  require('../../assets/carousel/bannerTwo.png'),
  require('../../assets/carousel/bannerThree.png'),
];

const Services = () => {
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
    listBox: {
      width: '100%',
      height: '100% - 30%',
    },
    cardRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
  });

  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.column}>
          <View style={styles.carousel}>
            <CarouselBanner images={images} />
          </View>
          <TitleHorizonDivider name={t('services')} />
          <ScrollView style={styles.listBox} nestedScrollEnabled={true}>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Dhiraagu Reload'}
                image={require('../../assets/icons/dhiraagu-logo.png')}
                link={'ReloadRaastas'}
                paramsId={0}
              />
              <ServiceCard
                title={'Ooredoo Raastas'}
                image={require('../../assets/icons/ooredoo-logo.png')}
                link={'ReloadRaastas'}
                paramsId={1}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Dhiraagu Package Recharge'}
                image={require('../../assets/icons/dhiraagu-logo.png')}
                link={'PackageRecharge'}
                paramsId={0}
              />
              <ServiceCard
                title={'Ooredoo Package Recharge'}
                image={require('../../assets/icons/ooredoo-logo.png')}
                link={'PackageRecharge'}
                paramsId={1}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Dhiraagu Bill Pay'}
                image={require('../../assets/icons/dhiraagu-logo.png')}
                link={'BillPay'}
                paramsId={0}
              />
              <ServiceCard
                title={'Ooredoo Bill Pay'}
                image={require('../../assets/icons/ooredoo-logo.png')}
                link={'BillPay'}
                paramsId={1}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Raajje Online Bill Pay'}
                image={require('../../assets/icons/ROL.png')}
                link={'ROLBillPay'}
              />
              <ServiceCard
                title={'Gift Cards'}
                image={require('../../assets/icons/giftcard.png')}
                link={'GiftCards'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'PUBG UC'}
                image={require('../../assets/icons/pubg.png')}
                link={'PUBGBuyPackage'}
              />
              <ServiceCard
                title={'MWSC Bill Pay'}
                image={require('../../assets/icons/mwsc.png')}
                link={'MWSCBillPay'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'MediaNet Bill Pay'}
                image={require('../../assets/icons/medianet.png')}
                link={'MediaNetBillPay'}
              />
              <ServiceCard
                title={'Maldive Gas'}
                image={require('../../assets/icons/gas.png')}
                link={'OrderGas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Wholesale Reload'}
                image={require('../../assets/icons/dhiraagu-logo.png')}
                link={'Wholesale'}
                paramsId={0}
              />
              <ServiceCard
                title={'Wholesale Raastas'}
                image={require('../../assets/icons/ooredoo-logo.png')}
                link={'Wholesale'}
                paramsId={1}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Dhiraagu Pay Cash In'}
                image={require('../../assets/icons/dhp.png')}
                link={'CashIn'}
                paramsId={0}
              />
              <ServiceCard
                title={'Ooredoo M-faisaa Cash In'}
                image={require('../../assets/icons/mfaisaa.png')}
                link={'CashIn'}
                paramsId={1}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Schedule Payment'}
                image={require('../../assets/icons/schedule.png')}
                link={'SchedulePayment'}
              />
              <ServiceCard
                title={'Send SMS'}
                image={require('../../assets/icons/sms.png')}
                link={'SendSMS'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Donate'}
                image={require('../../assets/icons/donate.png')}
                link={'Donate'}
              />
              <View style={{flex: 1, marginHorizontal: 10, padding: 10}} />
            </View>
          </ScrollView>
  
      </ScrollView>
    </>
  );
};

export default Services;


