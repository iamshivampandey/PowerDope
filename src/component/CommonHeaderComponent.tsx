import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {powerdopLogo} from '../utils/images';
import {moderateVerticalScale} from 'react-native-size-matters';
import {WHITE_COLOR} from '../utils/colors';

const CommonHeaderComponent = ({rightContentView}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerLeftView}>
        <FastImage source={powerdopLogo} style={styles.logoImage} />
        <Text>POWERDOPE</Text>
      </View>
      <View style={styles.rightContainer}>{rightContentView}</View>
    </View>
  );
};
export default CommonHeaderComponent;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: WHITE_COLOR,
    alignItems: 'center',
    height: moderateVerticalScale(48),
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    shadowColor: '#B1A5A540',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  headerLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  logoImage: {
    width: moderateVerticalScale(19),
    height: moderateVerticalScale(19),
  },
  rightContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});
