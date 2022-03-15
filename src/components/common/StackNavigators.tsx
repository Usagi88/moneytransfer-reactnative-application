import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import AddCash from '../Views/AddCash';
import FahiSend from '../Views/FahiSend';

import Home from '../Views/Home';
import LiveChat from '../Views/LiveChat';
import Register from '../Views/Register';
import ResetPassword from '../Views/ResetPassword';
import Registration from '../Views/ResetPassword';

import Services from '../Views/Services';
import BillPay from '../Views/Services/BillPay/BillPay';
import CashIn from '../Views/Services/CashIn/CashIn';
import Donate from '../Views/Services/Donate';
import GiftCards from '../Views/Services/GiftCards';
import MediaNetBillPay from '../Views/Services/MediaNetBillPay';
import MWSCBillPay from '../Views/Services/MWSCBillPay';
import OrderGas from '../Views/Services/OrderGas';
import PackageRecharge from '../Views/Services/PackageRecharge/PackageRecharge';
import PUBGBuyPackage from '../Views/Services/PUBGBuyPackage';
import ReloadRaastas from '../Views/Services/ReloadRaastas/ReloadRaastas';
import ROLBillPay from '../Views/Services/ROLPayBill';
import SchedulePayment from '../Views/Services/SchedulePayment';
import SendSMS from '../Views/Services/SendSMS';
import Wholesale from '../Views/Services/Wholesale/Wholesale';
import Slip from '../Views/Slip';
import TopUpVia from '../Views/TopUpVia/TopUpVia';
import TransactionHistory from '../Views/TransactionHistory';

const Stack = createStackNavigator();

const StackNavigators = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReloadRaastas"
        component={ReloadRaastas}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PackageRecharge"
        component={PackageRecharge}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BillPay"
        component={BillPay}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ROLBillPay"
        component={ROLBillPay}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PUBGBuyPackage"
        component={PUBGBuyPackage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MWSCBillPay"
        component={MWSCBillPay}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderGas"
        component={OrderGas}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MediaNetBillPay"
        component={MediaNetBillPay}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Wholesale"
        component={Wholesale}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CashIn"
        component={CashIn}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SchedulePayment"
        component={SchedulePayment}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Donate"
        component={Donate}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SendSMS"
        component={SendSMS}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GiftCards"
        component={GiftCards}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="LiveChat"
        component={LiveChat}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddCash"
        component={AddCash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TopUpVia"
        component={TopUpVia}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigators;