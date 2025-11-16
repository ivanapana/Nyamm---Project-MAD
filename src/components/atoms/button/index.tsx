// src/components/atoms/Button/index.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({
  label,
  onPress,
  color = '#007AFF',
  textColor = '#fff',
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: color},
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}>
      <Text style={[styles.text, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
