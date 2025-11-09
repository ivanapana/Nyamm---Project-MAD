import React from 'react';
import {View, StyleSheet} from 'react-native';

const Background = () => {
  return <View style={styles.gradientBackground} />;
};

export default Background;

const styles = StyleSheet.create({
  gradientBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffb30020',
  },
});
