// src/components/atoms/PrimaryButton/index.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const PrimaryButton = ({label, onPress, variant = 'primary', style}) => {
  const baseStyle = [
    styles.button,
    variant === 'primary' ? styles.primary : styles.secondary,
    style,
  ];
  const textStyle =
    variant === 'primary' ? styles.textPrimary : styles.textSecondary;

  return (
    <TouchableOpacity style={baseStyle} onPress={onPress} activeOpacity={0.8}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#FBBF24',
  },
  secondary: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FED7AA',
  },
  textPrimary: {
    color: '#000',
    fontWeight: '700',
    fontSize: 16,
  },
  textSecondary: {
    color: '#F59E0B',
    fontWeight: '700',
    fontSize: 16,
  },
});
