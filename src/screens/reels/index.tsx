import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const ReelsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Reels Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReelsScreen;
