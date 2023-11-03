import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import VectorImage from 'react-native-vector-image';
import {
  community_tab_ic,
  home_tab_ic,
  profile_tab_img,
  reels_tab_ic,
  search_tab_ic,
} from '../utils/images';
import CommunityScreen from '../screens/community';
import ReelsScreen from '../screens/reels';
import SearchScreen from '../screens/search';
import ProfileScreen from '../screens/profile';
import FastImage from 'react-native-fast-image';
import {StyleSheet, View} from 'react-native';
import HomeScreen from '../screens/home';

const Tab = createBottomTabNavigator();

function TabContainer() {
  const hideTabBar = route => {
    const focusedRoute = getFocusedRouteNameFromRoute(route);

    return focusedRoute &&
      [
        // "SearchScreen",
        // 'GeneresDetailScreen',
        // "AllGeneres",
      ].includes(focusedRoute)
      ? 'none'
      : 'flex';
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let bgColor = 'transparent';
          if (route.name === 'CommunityScreen') {
            color = focused ? '#FFFFFF' : '#B1A9A9';
            bgColor = focused ? '#00CC66' : '#FFFFFF';
            return (
              <View
                style={[
                  styles.tabItems,
                  {
                    paddingHorizontal: 20,
                    paddingVertical: 26,
                    backgroundColor: bgColor,
                  },
                ]}>
                <VectorImage source={community_tab_ic} tintColor={color} />
              </View>
            );
          }
          if (route.name === 'ReelsScreen') {
            color = focused ? '#FFFFFF' : '#B1A9A9';
            bgColor = focused ? '#00CC66' : '#FFFFFF';
            return (
              <View
                style={[
                  styles.tabItems,
                  {
                    // paddingHorizontal: 25,
                    // paddingVertical: 25,
                    backgroundColor: bgColor,
                  },
                ]}>
                <VectorImage source={reels_tab_ic} tintColor={color} />
              </View>
            );
          }
          if (route.name === 'HomeScreen') {
            color = focused ? '#FFFFFF' : '#B1A9A9';
            bgColor = focused ? '#00CC66' : '#FFFFFF';
            return (
              <View
                style={[
                  styles.tabItems,
                  {
                    // paddingHorizontal: 25,
                    // paddingVertical: 25,
                    backgroundColor: bgColor,
                  },
                ]}>
                <VectorImage source={home_tab_ic} tintColor={color} />
              </View>
            );
          }
          if (route.name === 'SearchScreen') {
            color = focused ? '#FFFFFF' : '#B1A9A9';
            bgColor = focused ? '#00CC66' : '#FFFFFF';
            return (
              <View
                style={[
                  styles.tabItems,
                  {
                    // paddingHorizontal: 25,
                    // paddingVertical: 25,
                    backgroundColor: bgColor,
                  },
                ]}>
                <VectorImage source={search_tab_ic} tintColor={color} />
              </View>
            );
          }
          if (route.name === 'ProfileScreen') {
            color = focused ? '#FFFFFF' : '#B1A9A9';
            bgColor = focused ? '#00CC66' : '#FFFFFF';

            return (
              <View
                style={[
                  styles.tabItems,
                  {
                    // paddingHorizontal: 20,
                    // paddingVertical: 20,
                    backgroundColor: bgColor,
                  },
                ]}>
                <FastImage
                  source={profile_tab_img}
                  style={{width: 30, height: 30}}
                />
              </View>
            );
          }
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: styles.tabBarStyle,
        tabBarItemStyle: {
          height: 66,
          // marginHorizontal: 3,
        },
        tabBarLabel: () => {
          return null;
        },
      })}>
      <Tab.Screen
        name="CommunityScreen"
        component={CommunityScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ReelsScreen"
        component={ReelsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
export default TabContainer;

const styles = StyleSheet.create({
  BlurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    overflow: 'hidden',
    bottom: 30,
    width: '90%',
    position: 'absolute',
    left: 20,
    height: '7.8%',
    alignItems: 'center',
    alignSelf: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  tabItems: {
    width: '100%',
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 45,
  },
});
