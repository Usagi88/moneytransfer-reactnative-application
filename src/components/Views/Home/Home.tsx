import {ScrollView, View, Text, Dimensions} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {IconButton} from 'react-native-paper';
import QuestionIcon from '../../SvgIconComponents/QuestionIcon';
import ServiceIcon from '../../SvgIconComponents/ServiceIcon';
import WalletIcon from '../../SvgIconComponents/WalletIcon';
import BannerAmount from '../../common/BannerAmount';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import FPCard from '../../common/FPCard';

let {height, width} = Dimensions.get('window');
const styles = EStyleSheet.create({
  column: {
    width: width,
    minHeight: height,
    backgroundColor: 'white',
  },
  carousel: {
    width: '100%',
    height: 120,
    backgroundColor: '#ccc',
  },
  time: {
    width: '100%',
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    color: 'black',
  },
  circleIconRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: width,
    top: 250,
  },
  circleIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  historyWrapper: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  divider: {
    width: '100% - 160',
    height: 1,
    backgroundColor: '#ccc',
    marginLeft: 10,
    marginRight: 10,
  },
  smallBox: {
    borderRadius: 20,
    width: 40,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.column}>
        <View style={styles.carousel} />
        <View style={styles.time}>
          <Text style={styles.timeText}>K.Male - Fajr 04:47</Text>
        </View>
        <BannerAmount />
        <View style={styles.circleIconRow}>
          <View style={styles.circleIcon}>
            <IconButton
              icon={() => (
                <QuestionIcon width={32} height={32} color={'#ffa26b'} />
              )}
              size={40}
              onPress={() => {}}
            />
          </View>
          <View style={styles.circleIcon}>
            <IconButton
              icon={() => (
                <ServiceIcon width={32} height={32} color={'#7b89f9'} />
              )}
              size={40}
              onPress={() => {}}
            />
          </View>
          <View style={styles.circleIcon}>
            <IconButton
              style={{paddingLeft: 6, paddingTop: 6}}
              icon={() => (
                <WalletIcon width={32} height={32} color={'#0caf39'} />
              )}
              size={40}
              onPress={() => {}}
            />
          </View>
        </View>
        <View style={styles.historyWrapper}>
          <Text style={styles.title}>History</Text>
          <View style={styles.divider} />
          <LinearGradient
            colors={['#3AC170', '#25BFA3']}
            style={styles.smallBox}>
            <IconButton
              icon={() => <Icon name="angle-up" size={26} color="white" />}
              size={20}
              onPress={() => {}}
            />
          </LinearGradient>
        </View>
        <FPCard
          backgroundColor={'#E03838'}
          description={'Refunded Transaction'}
          date={'19 June 2021 - 17:30'}
          amount={'532.00'}
          currency={'MVR'}
          icon={require('../../../assets/icons/refund.png')}
        />
        <FPCard
          backgroundColor={'#0CAF39'}
          description={'Cash Deposit'}
          date={'19 June 2021 - 17:30'}
          amount={'31,912.90'}
          currency={'MVR'}
          icon={require('../../../assets/icons/addcash.png')}
        />
        <FPCard
          backgroundColor={'#FFA26B'}
          description={'Service Recharge'}
          date={'19 June 2021 - 17:30'}
          amount={'120.50'}
          currency={'MVR'}
          icon={require('../../../assets/icons/services.png')}
        />
        <FPCard
          backgroundColor={'#FFA26B'}
          description={'Dhiraagu Reload'}
          date={'19 June 2021 - 17:30'}
          amount={'31,912.50'}
          currency={'MVR'}
          icon={require('../../../assets/icons/services.png')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
