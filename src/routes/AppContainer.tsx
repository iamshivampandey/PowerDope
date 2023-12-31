import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View} from 'react-native';
import SplashScreen from '../screens/auth/SplashScreen';
import TabContainer from './TabContainer';
import AuthStackContainer from './AuthStack';
import MyStatusBar from '../component/MyStatusBar';

const Stack = createNativeStackNavigator();

function AppContainer() {
  return (
    <View style={{flex:1}}>
      <MyStatusBar backgroundColor="#ABFFD5" barStyle="dark-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthStackContainer"
          component={AuthStackContainer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabContainer"
          component={TabContainer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </View>
  );
}

export default AppContainer;
const styles = StyleSheet.create({
  toastView: {
    height: 50,
    width: '90%',
    backgroundColor: '#343a40',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toastText: {
    color: '#fff',
  },
});
