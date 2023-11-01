import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyStatusBar from '../../component/MyStatusBar';

const DarkTheme = () => {
  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="#ABFFD5" barStyle="dark-content" />
      <View style={styles.content} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});

export default DarkTheme;
