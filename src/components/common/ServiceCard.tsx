import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useNavigation} from '@react-navigation/native';

interface ServiceCard {
  image: ImageSourcePropType;
  title: string;
  link: string;
}

const ServiceCard = (props: ServiceCard) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableNativeFeedback
      onPress={() => {
        navigation.navigate(props.link);
      }}>
      <View style={styles.serviceCard}>
        <Image style={styles.serviceCardImage} source={props.image} />
        <View style={styles.serviceCardVerticalDivider} />
        <Text style={styles.serviceCardText}>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
    
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
