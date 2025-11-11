import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({label, onPress, color, style}) => {
  return (
    <TouchableOpacity
      style={[styles.button, color && {backgroundColor: color}, style]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FBBF24',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginTop: 10,
  },
  text: {
    color: '#ffffffff',
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});