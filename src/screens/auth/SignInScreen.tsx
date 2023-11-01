import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const SignInScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignInScreen Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFFFFF',
  },
});

export default SignInScreen;
