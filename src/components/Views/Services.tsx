import React from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CarouselBanner from '../common/Carousel/CarouselBanner';
import ServiceCard from '../common/ServiceCard';
import TitleHorizonDivider from '../common/TitleHorizonDivider';

let {height, width} = Dimensions.get('window');
const images = [
  require('../../assets/carousel/bannerOne.png'),
  require('../../assets/carousel/bannerTwo.png'),
  require('../../assets/carousel/bannerThree.png'),
];

const Services = () => {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.column}>
          <View style={styles.carousel}>
            <CarouselBanner images={images} />
          </View>
          <TitleHorizonDivider name={'Services'} />
          <ScrollView style={styles.listBox} nestedScrollEnabled={true}>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Dhiraagu Reload'}
                image={require('../../assets/icons/dhiraagu-logo.png')}
                link={'DhiraaguReload'}
              />
              <ServiceCard
                title={'Ooredoo Raastas'}
                image={require('../../assets/icons/ooredoo-logo.png')}
                link={'OoredooRaastas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Dhiraagu Package Recharge'}
                image={require('../../assets/icons/dhiraagu-logo.png')}
                link={'DhiraaguReload'}
              />
              <ServiceCard
                title={'Ooredoo Package Recharge'}
                image={require('../../assets/icons/ooredoo-logo.png')}
                link={'OoredooRaastas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Dhiraagu Bill Pay'}
                image={require('../../assets/icons/dhiraagu-logo.png')}
                link={'DhiraaguReload'}
              />
              <ServiceCard
                title={'Ooredoo Bill Pay'}
                image={require('../../assets/icons/ooredoo-logo.png')}
                link={'OoredooRaastas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Raajje Online Bill Pay'}
                image={require('../../assets/icons/ROL.png')}
                link={'DhiraaguReload'}
              />
              <ServiceCard
                title={'Gift Cards'}
                image={require('../../assets/icons/giftcard.png')}
                link={'OoredooRaastas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'PUBG UC'}
                image={require('../../assets/icons/pubg.png')}
                link={'DhiraaguReload'}
              />
              <ServiceCard
                title={'MWSC Bill Pay'}
                image={require('../../assets/icons/mwsc.png')}
                link={'OoredooRaastas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'MediaNet Bill Pay'}
                image={require('../../assets/icons/medianet.png')}
                link={'DhiraaguReload'}
              />
              <ServiceCard
                title={'Maldive Gas'}
                image={require('../../assets/icons/gas.png')}
                link={'OoredooRaastas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Wholesale Reload'}
                image={require('../../assets/icons/dhiraagu-logo.png')}
                link={'DhiraaguReload'}
              />
              <ServiceCard
                title={'Wholesale Raastas'}
                image={require('../../assets/icons/ooredoo-logo.png')}
                link={'OoredooRaastas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Dhiraagu Pay Cash In'}
                image={require('../../assets/icons/dhp.png')}
                link={'DhiraaguReload'}
              />
              <ServiceCard
                title={'Ooredoo M-faisaa Cash In'}
                image={require('../../assets/icons/mfaisaa.png')}
                link={'OoredooRaastas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Schedule Payment'}
                image={require('../../assets/icons/schedule.png')}
                link={'DhiraaguReload'}
              />
              <ServiceCard
                title={'Send SMS'}
                image={require('../../assets/icons/sms.png')}
                link={'OoredooRaastas'}
              />
            </View>
            <View style={styles.cardRow}>
              <ServiceCard
                title={'Donate'}
                image={require('../../assets/icons/donate.png')}
                link={'DhiraaguReload'}
              />
              <View style={{flex: 1,marginHorizontal: 10,padding: 10,}}/>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
};

export default Services;

const styles = EStyleSheet.create({
  column: {
    width: width,
    height: height - 56,
    backgroundColor: 'white',
  },
  carousel: {
    width: '100%',
    height: 120,
  },
  listBox: {
    width: width,
    height: '100%',
    
  },
  cardRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
