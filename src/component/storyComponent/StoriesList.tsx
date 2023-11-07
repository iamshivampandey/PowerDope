import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Story from './Story';
import {RANDOM_IMAGE} from '../../utils';

const StoriesList = () => {
  const stories = [
    {
      user: 'user1',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user1',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user1',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user2',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user3',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user4',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user25',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user25',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user25',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user25',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user25',
      image: RANDOM_IMAGE,
    },
    {
      user: 'user25',
      image: RANDOM_IMAGE,
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {stories.map((story, index) => (
          <Story key={index} user={story.user} image={story.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 5,
  },
});

export default StoriesList;
