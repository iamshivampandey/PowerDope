import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Story = ({user, image}) => {
  const colors = ['#00CC66', '#00CC6600'];

  return (
    <View style={styles.container}>
      <LinearGradient colors={colors} style={styles.gradient}>
        <Image source={{uri: image}} style={styles.image} />
      </LinearGradient>
      <Text style={styles.username}>{user}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
  },
  gradient: {
    width: 50,
    height: 50,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  username: {
    marginTop: 1,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Story;
