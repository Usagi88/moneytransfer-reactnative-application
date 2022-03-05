import React from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import CarouselBanner from '../common/Carousel/CarouselBanner';
import Navbar from '../common/Navbar';
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
              <View style={styles.serviceCard}>
                <Image
                  style={styles.serviceCardImage}
                  source={require('../../assets/icons/dhiraagu-logo.png')}
                />
                <View style={styles.serviceCardVerticalDivider} />
                <Text style={styles.serviceCardText}>Dhiraagu Reload</Text>
              </View>
              <View style={styles.serviceCard}>
                <Image
                  style={styles.serviceCardImage}
                  source={require('../../assets/icons/ooredoo-logo.png')}
                />
                <View style={styles.serviceCardVerticalDivider} />
                <Text style={styles.serviceCardText}>Ooredoo Raastas</Text>
              </View>
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
    paddingTop: 20,
  },
  serviceCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
    height: 100,
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 10,

    borderRadius: 10,
  },
  serviceCardImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  serviceCardVerticalDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  serviceCardTextWrapper: {
    backgroundColor: '#8d7070',
    flex: 1,
  },
  serviceCardText: {
    flex: 1,
  },
});
