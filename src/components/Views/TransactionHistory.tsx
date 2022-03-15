import React from 'react';
import {ScrollView} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import BannerAmount from '../common/BannerAmount';
import FPCard from '../common/FPCard';

import NavbarWithBackBtn from '../common/NavbarWithBackBtn';
import TitleHorizonDivider from '../common/TitleHorizonDivider';

const TransactionHistory = () => {
  return (
    <>
      <NavbarWithBackBtn />
      <ScrollView style={styles.column}>
        <BannerAmount />
        <TitleHorizonDivider name={'Transaction History'} />

        <ScrollView style={styles.listBox} nestedScrollEnabled={true}>
          <FPCard
            backgroundColor={'#E03838'}
            description={'Refunded Transaction'}
            date={'19 June 2021 - 17:30'}
            amount={'532.00'}
            currency={'MVR'}
            icon={require('../../assets/icons/refund.png')}
          />
          <FPCard
            backgroundColor={'#0CAF39'}
            description={'Cash Deposit'}
            date={'19 June 2021 - 17:30'}
            amount={'31,912.90'}
            currency={'MVR'}
            icon={require('../../assets/icons/addcash.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={'Service Recharge'}
            date={'19 June 2021 - 17:30'}
            amount={'120.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={'Dhiraagu Reload'}
            date={'19 June 2021 - 17:30'}
            amount={'31,912.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={'Service Recharge'}
            date={'19 June 2021 - 17:30'}
            amount={'120.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={'Dhiraagu Reload'}
            date={'19 June 2021 - 17:30'}
            amount={'31,912.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#E03838'}
            description={'Refunded Transaction'}
            date={'19 June 2021 - 17:30'}
            amount={'532.00'}
            currency={'MVR'}
            icon={require('../../assets/icons/refund.png')}
          />
          <FPCard
            backgroundColor={'#0CAF39'}
            description={'Cash Deposit'}
            date={'19 June 2021 - 17:30'}
            amount={'31,912.90'}
            currency={'MVR'}
            icon={require('../../assets/icons/addcash.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={'Service Recharge'}
            date={'19 June 2021 - 17:30'}
            amount={'120.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={'Dhiraagu Reload'}
            date={'19 June 2021 - 17:30'}
            amount={'31,912.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={'Service Recharge'}
            date={'19 June 2021 - 17:30'}
            amount={'120.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
          <FPCard
            backgroundColor={'#FFA26B'}
            description={'Dhiraagu Reload'}
            date={'19 June 2021 - 17:30'}
            amount={'31,912.50'}
            currency={'MVR'}
            icon={require('../../assets/icons/services.png')}
          />
        </ScrollView>
      </ScrollView>
    </>
  );
};

export default TransactionHistory;

const styles = EStyleSheet.create({
  column: {
    flex: 1,
    backgroundColor: 'white',
  },
  listBox: {
    width: '100%',
    maxHeight: '100% - 38%',
  },
});
