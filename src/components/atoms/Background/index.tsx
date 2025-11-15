// src/components/atoms/Background.js
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Background = () => {
  return (
    <View style={styles.container} pointerEvents="none">
      <View style={styles.background} />
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#342d07ff',
  },
});
