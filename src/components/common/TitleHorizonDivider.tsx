import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

let {width} = Dimensions.get('window');

interface TitleHorizonDividerType {
  name: string;
}

const TitleHorizonDivider = (props: TitleHorizonDividerType) => {
  return (
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>{props.name}</Text>
      <View style={styles.divider} />
    </View>
  );
};

export default TitleHorizonDivider;

const styles = EStyleSheet.create({
  titleWrapper: {
    width: width,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    marginLeft: 10,
    marginRight: 10,
  },
});
