/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
import AppContainer from './src/routes/AppContainer';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
}

export default App;
