import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import AddCash from '../Views/AddCash';

import Home from '../Views/Home';

import Services from '../Views/Services';
import BillPay from '../Views/Services/BillPay/BillPay';
import MWSCBillPay from '../Views/Services/MWSCBillPay';
import OrderGas from '../Views/Services/OrderGas';
import PackageRecharge from '../Views/Services/PackageRecharge/PackageRecharge';
import PUBGBuyPackage from '../Views/Services/PUBGBuyPackage';
import ReloadRaastas from '../Views/Services/ReloadRaastas/ReloadRaastas';
import ROLBillPay from '../Views/Services/ROLPayBill';

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
        name="AddCash"
        component={AddCash}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigators;
