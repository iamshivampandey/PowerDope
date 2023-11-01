import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
