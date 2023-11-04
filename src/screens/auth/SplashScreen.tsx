import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {BALCK_COLOR, PD_THEME_COLOR} from '../../utils/colors';
import FastImage from 'react-native-fast-image';
import {powerdopLogo} from '../../utils/images';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils';

const SplashScreen = ({navigation}) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isUserAuthenticated) {
        navigation.replace('TabContainer');
      } else {
        navigation.replace('AuthStackContainer');
      }
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <FastImage source={powerdopLogo} style={styles.pdLogo} />
      <Text style={styles.splashText}>PowerDope</Text>
      <ActivityIndicator color={PD_THEME_COLOR} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BALCK_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  pdLogo: {
    width: WINDOW_WIDTH * 0.2,
    height: WINDOW_HEIGHT * 0.1,
  },
  splashText: {
    fontSize: 30,
    fontWeight: '800',
    color: PD_THEME_COLOR,
  },
});

export default SplashScreen;
