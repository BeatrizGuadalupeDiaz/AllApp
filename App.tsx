import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/screens/Home';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
}

export default App;
