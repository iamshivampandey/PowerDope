const {Dimensions} = require('react-native');

export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;

export const RANDOM_IMAGE =
  'https://source.unsplash.com/random/?sig=${Math.random()';
