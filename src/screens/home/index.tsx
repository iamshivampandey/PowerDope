import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateVerticalScale} from 'react-native-size-matters';
import CommonHeaderComponent from '../../component/CommonHeaderComponent';
import {
  add_post_ic,
  add_with_ellipse_ic,
  bell_ic,
  comment_ic,
} from '../../utils/images';
import VectorImage from 'react-native-vector-image';
import StoriesList from '../../component/storyComponent/StoriesList';
import FastImage from 'react-native-fast-image';
import {RANDOM_IMAGE} from '../../utils';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeaderComponent
        rightContentView={
          <View style={styles.headerActionViewContainer}>
            <TouchableOpacity onPress={() => {}}>
              <VectorImage
                source={add_post_ic}
                style={styles.headerActionButton}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <VectorImage source={bell_ic} style={styles.headerActionButton} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
              <VectorImage
                source={comment_ic}
                style={styles.headerActionButton}
              />
            </TouchableOpacity>
          </View>
        }
      />
      <View style={styles.storyView}>
        <View style={styles.myStoryView}>
          <LinearGradient
            colors={['#000000', '#00000000']}
            style={styles.storyBgGradient}>
            <FastImage
              source={{uri: RANDOM_IMAGE}}
              style={styles.myStoryImage}
            />
          </LinearGradient>
          <VectorImage
            source={add_with_ellipse_ic}
            style={styles.addStoryIcon}
          />
        </View>
        <View style={styles.storyContainer}>
          <StoriesList />
        </View>
      </View>
      <View style={styles.divder} />
      <LinearGradient
        colors={['#00000000', '#000000']}
        style={styles.gradient}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: moderateVerticalScale(120),
  },
  headerActionViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerActionButton: {
    marginHorizontal: 10,
  },
  myStoryView: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  storyView: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(15),
    paddingLeft: 10,
  },
  storyBgGradient: {
    width: 68,
    height: 68,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myStoryImage: {
    width: 60,
    height: 60,
    borderRadius: 35,
  },
  divder: {
    height: 1,
    width: '100%',
    backgroundColor: '#EFEFEF',
    alignSelf: 'center',
    marginTop: 15,
  },
  addStoryIcon: {
    position: 'absolute',
    bottom: -9,
    left: 'auto',
  },
  storyContainer: {flex: 1, marginTop: 5},
});

export default HomeScreen;
