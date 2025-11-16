import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, padding = 20, rounded = 18, center = false, style }) => {
  return (
    <View
      style={[
        styles.card(padding, rounded),
        center && styles.center,
        style
      ]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: (padding, rounded) => ({
    backgroundColor: '#FFFFFF',
    padding: padding,
    borderRadius: rounded,
  }),
  center: {
    alignItems: 'center',
  },
});