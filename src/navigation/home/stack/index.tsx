/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../../../screens/Home';
import BottomTab from '../BottonTab';
import {ButtonTop} from './components/ButtonTop';

type RootStackParamList = {
  Home: undefined;
  BottomTab: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function StackHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerRight: () => <ButtonTop navigation={navigation} />,
        })}
      />
      <Stack.Screen name="BottomTab" component={BottomTab} />
    </Stack.Navigator>
  );
}
