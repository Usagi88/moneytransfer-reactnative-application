import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


interface ServiceCard {
  image: ImageSourcePropType;
  title: string;
}

const ServiceCard = (props: ServiceCard) => {
  return (
    <View style={styles.serviceCard}>
      <Image
        style={styles.serviceCardImage}
        source={props.image}
      />
      <View style={styles.serviceCardVerticalDivider} />
      <Text style={styles.serviceCardText}>{props.title}</Text>
    </View>
  );
};

export default ServiceCard;

const styles = EStyleSheet.create({
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
