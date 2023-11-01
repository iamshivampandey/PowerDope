import React, {useEffect} from 'react';
import {Alert, SafeAreaView, StyleSheet, Text} from 'react-native';

const SignUpScreen = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>SignUpScreen Screen</Text>
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

export default SignUpScreen;
