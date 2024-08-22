import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/navigation/home/BottonTab';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}

export default App;
