//src/components/molecules/QuickButton/index.tsx
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const QuickButton = ({icon, title, text, onPress, color}) => {
  return (
    <TouchableOpacity
      style={[styles.card, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default QuickButton;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },
  icon: {fontSize: 28, marginBottom: 6},
  title: {fontSize: 15, fontWeight: '700', color: '#333'},
  text: {fontSize: 12, color: '#777'},
});
