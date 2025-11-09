import React from 'react';
import { View, StyleSheet, ViewStyle, Platform } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  rounded?: number;
  center?: boolean;
};

const Card: React.FC<Props> = ({ children, style, padding = 20, rounded = 18, center = false }) => {
  return (
    <View style={[styles.card, { padding, borderRadius: rounded }, center && styles.center, style]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    
  },
  center: {
    alignItems: 'center',
  },
});
