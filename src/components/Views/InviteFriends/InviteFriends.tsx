import React, {useState} from 'react';
import {
  Text,
  View,
  useWindowDimensions,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {TabView, SceneMap} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';

import Navbar from '../../common/Navbar';
import Invite from './Invite';
import Referrals from './Referrals';

const FirstRoute = () => {
  return <Invite />;
};

const SecondRoute = () => {
  return <Referrals />;
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const InviteFriends = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Dhiraagu'},
    {key: 'second', title: 'Ooredoo'},
  ]);

  const _renderTabBar = () => {
    return (
      <View style={styles.tabBar}>
        <TouchableNativeFeedback
          onPress={() => setIndex(0)}
          useForeground={true}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={index == 0 ? ['#3AC170', '#25BFA3'] : ['white', 'white']}
            style={index == 0 ? styles.tabItemActive : styles.tabItemOne}>
            <Text
              style={{
                ...styles.tabTitle,
                color: index == 0 ? 'white' : 'black',
              }}>
              Invite
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => setIndex(1)}
          useForeground={true}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            colors={index == 1 ? ['#3AC170', '#25BFA3'] : ['white', 'white']}
            style={index == 1 ? styles.tabItemActiveTwo : styles.tabItemTwo}>
            <Text
              style={{
                ...styles.tabTitle,
                color: index == 1 ? 'white' : 'black',
              }}>
              Referrals
            </Text>
          </LinearGradient>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (
    <>
      <Navbar />
      <View style={styles.column}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../../assets/images/inviteFriends.png')}
          />
        </View>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={_renderTabBar}
        />
      </View>
    </>
  );
};

export default InviteFriends;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
  tabItemOne: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    left: 10,
  },
  tabItemTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    right: 10,
  },
  tabItemActive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    left: 10,
    zIndex: 2,
  },
  tabItemActiveTwo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    right: 10,
    zIndex: 2,
  },
  tabTitle: {
    fontSize: 14,
  },

  imageWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    width: '100%',
    height: 132,
    resizeMode: 'cover',
  },
});
