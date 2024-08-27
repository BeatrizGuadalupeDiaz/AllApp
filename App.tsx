import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackHome from './src/navigation/home/stack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StackHome />
    </NavigationContainer>
  );
}

export default App;
