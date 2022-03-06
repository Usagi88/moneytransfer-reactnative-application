import React from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CarouselBanner from '../common/Carousel/CarouselBanner';
import Navbar from '../common/Navbar';
import ServiceCard from '../common/ServiceCard';
import TitleHorizonDivider from '../common/TitleHorizonDivider';

let {height, width} = Dimensions.get('window');
const images = [
  require('../../assets/carousel/bannerOne.png'),
  require('../../assets/carousel/bannerTwo.png'),
  require('../../assets/carousel/bannerThree.png'),
];

const Services = ({navigation}) => {
  return (
    <>
      <Navbar navigation={navigation} />
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
              />
              <ServiceCard
                title={'Dhiraagu Reload'}
                image={require('../../assets/icons/dhiraagu-logo.png')}
              />
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
    minHeight: height - 56,
    backgroundColor: 'white',
  },
  carousel: {
    width: '100%',
    height: 120,
  },
  listBox: {
    width: width,
    maxHeight: '100% - 50%',
    backgroundColor: 'green',
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
