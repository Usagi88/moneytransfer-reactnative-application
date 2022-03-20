import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

interface ServiceCard {
  image: ImageSourcePropType;
  title: string;
  link: string;
  paramsId?: number;
}
let {width} = Dimensions.get('window');

const ServiceCard = (props: ServiceCard) => {
  const {i18n} = useTranslation();
  let deviceLocale = i18n.language;
  const navigation = useNavigation<any>();

  const styles = EStyleSheet.create({
    serviceCardWrapper: {
      backgroundColor: 'white',
      flex: 1,
      height: width > 320 ? 100 : 80,
      marginHorizontal: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    serviceCard: {
      flexDirection: deviceLocale == 'dv' ? 'row-reverse' : 'row',
      backgroundColor: 'white',
      flex: 1,
      height: '100%',
      alignItems: 'center',
      padding: 10,
      borderRadius: 10,
      overflow: 'hidden',
    },
    serviceCardImage: {
      width: width > 320 ? 50 : 30,
      height: width > 320 ? 50 : 30,
      resizeMode: 'contain',
    },
    serviceCardVerticalDivider: {
      width: 1,
      height: 55,
      backgroundColor: '#ccc',
      marginHorizontal: 10,
    },
    serviceCardTextWrapper: {
      backgroundColor: '#8d7070',
      flex: 1,
    },
    serviceCardText: {
      flex: 1,
      fontSize: width > 320 ? 14 : 12,
      fontFamily: deviceLocale == 'dv' ? 'Faruma' : null
   
      
    },
  });

  return (
    <View style={styles.serviceCardWrapper}>
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate(props.link, {
            tabId: props.paramsId,
          });
        }}
        useForeground={true}>
        <View style={styles.serviceCard}>
          <Image style={styles.serviceCardImage} source={props.image} />
          <View style={styles.serviceCardVerticalDivider} />
          <Text style={styles.serviceCardText}>{props.title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ServiceCard;
