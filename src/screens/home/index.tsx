import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateVerticalScale} from 'react-native-size-matters';
import CommonHeaderComponent from '../../component/CommonHeaderComponent';
import {add_post_ic, bell_ic, comment_ic} from '../../utils/images';
import VectorImage from 'react-native-vector-image';

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
});

export default HomeScreen;
