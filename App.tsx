import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackHome from './src/navigation/home/stack';
import {Prueba} from './src/screens/Prueba';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Prueba />
    </NavigationContainer>
  );
}

export default App;
