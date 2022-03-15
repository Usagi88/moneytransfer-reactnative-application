import React from 'react';
import {View, Dimensions, Image, ImageSourcePropType} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

//import Carousel, {Pagination} from 'react-native-snap-carousel';
import Carousel from 'pinar';
import {Pagination} from 'react-native-snap-carousel';

interface ItemProps {
  title: string;
  text: string;
}

// interface Props {
//   carouselItems?: ItemProps;
// }

interface CarouselType {
  images: ImageSourcePropType[];
}

const WIDTH = Dimensions.get('window').width;
/*
const images = [
  require('../../../assets/carousel/bannerOne.png'),
  require('../../../assets/carousel/bannerTwo.png'),
  require('../../../assets/carousel/bannerThree.png'),
];
*/
type carouselCardItem = {
  item: ImageSourcePropType;
  index: number;
};
function carouselCardItem({item, index}: carouselCardItem) {
  return (
    <View style={styles.cardCarousel} key={index}>
      <Image style={styles.image} source={item} />
    </View>
  );
}

const CarouselBanner = (props: CarouselType) => {
  return (
    <View style={styles.container}>
      <Carousel
        loop={true}
        autoplay={true}
        showsControls={false}
        dotsContainerStyle={styles.dotsWrapper}
        dotStyle={styles.dots}
        activeDotStyle={styles.dotActive}>
        {props.images.map((img: ImageSourcePropType, index: number) => {
          return (
            <View style={styles.cardCarousel} key={index}>
              <Image style={styles.image} source={img} />
            </View>
          );
        })}
      </Carousel>
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
    resizeMode: 'cover',
  },
  dotsWrapper: {
    justifyContent: 'flex-end',
    bottom: 20,
    flexDirection: 'row',
  },
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: 'white',
  },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#25BFA3',
  },
});

export default CarouselBanner;
