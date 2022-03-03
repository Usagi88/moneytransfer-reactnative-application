import React, {Component, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Carousel, {Pagination} from 'react-native-snap-carousel';

interface ItemProps {
  title: string;
  text: string;
}

// interface Props {
//   carouselItems?: ItemProps;
// }

interface State {
  activeIndex: number;
  carouselItems: ItemProps[];
}

const WIDTH = Dimensions.get('window').width;
/*
const images = [
  require('../../../assets/carousel/bannerOne.png'),
  require('../../../assets/carousel/bannerTwo.png'),
  require('../../../assets/carousel/bannerThree.png'),
];
*/
type Props = {
  item: {
    imgUrl: string;
  };
  index: number;
};
function carouselCardItem({item, index}: any) {
  return (
    <View style={styles.cardCarousel} key={index}>
      <Image style={styles.image} source={item} />
    </View>
  );
}

const CarouselBanner = (props:any) => {
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef<any>(null);
  return (
    <View style={styles.container}>
      <Carousel
        data={props.images}
        renderItem={carouselCardItem}
        sliderWidth={WIDTH}
        itemWidth={WIDTH}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        sliderHeight={120}
        itemHeight={120}
        loop
        autoplay={true}
        autoplayDelay={3000}
        autoplayInterval={3000}
        ref={isCarousel}
        onSnapToItem={index => setIndex(index)}
      />
      <View style={styles.dotsWrapper}>
        <Pagination
          dotsLength={props.images.length}
          activeDotIndex={index}
          dotStyle={styles.dots}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          
        />
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardCarousel: {
    width: WIDTH,
  },
  image: {
    height: 120,
    resizeMode: 'cover'
  },
  dotsWrapper: {
    position: 'absolute',
    left: WIDTH - 100,
    top: 70
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: 'white',
  },
});

export default CarouselBanner;
