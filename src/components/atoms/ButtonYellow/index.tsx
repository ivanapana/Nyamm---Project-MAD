import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonYellow = ({label, onPress, disabled = false}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonYellow;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FBBF24',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
});
