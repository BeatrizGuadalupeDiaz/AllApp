import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Calculator, Movies, ToDo, Water} from '../../../screens/Home';

type RootTabParamList = {
  ToDo: undefined;
  Water: undefined;
  Calculator: undefined;
  Movies: undefined;
};
const Tab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="ToDo" component={ToDo} />
      <Tab.Screen name="Water" component={Water} />
      <Tab.Screen name="Calculator" component={Calculator} />
      <Tab.Screen name="Movies" component={Movies} />
    </Tab.Navigator>
  );
}
