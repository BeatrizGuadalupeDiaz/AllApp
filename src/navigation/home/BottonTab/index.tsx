import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Calculator, ToDo, Water} from '../../../screens/Home';

type RootTabParamList = {
  ToDo: undefined;
  Water: undefined;
  Calculator: undefined;
};
const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ToDo" component={ToDo} />
      <Tab.Screen name="Water" component={Water} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
}
