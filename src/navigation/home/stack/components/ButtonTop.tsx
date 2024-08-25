import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const ButtonTop = ({navigation}: any) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
      <Text>IR A DRAWER</Text>
    </TouchableOpacity>
  );
};
