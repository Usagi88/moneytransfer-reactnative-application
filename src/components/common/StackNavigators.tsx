import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import AddCash from '../Views/AddCash';

import Home from '../Views/Home';

import Services from '../Views/Services';
import DhiraaguReload from '../Views/Services/DhiraaguReload';

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
        name="DhiraaguReload"
        component={DhiraaguReload}
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
