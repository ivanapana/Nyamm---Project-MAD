// src/components/atoms/Button/index.tsx
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

/**
 * Custom Button component for React Native
 * @param {Object} props
 * @param {string} props.label
 * @param {() => void} [props.onPress]
 * @param {'primary' | 'secondary'} [props.variant='primary']
 * @param {boolean} [props.disabled=false]
 * @param {object} [props.style]
 */
const Button = ({
  label,
  onPress,
  variant = 'primary',
  disabled = false,
  style,
}) => {
  const buttonStyle = [
    styles.base,
    variant === 'primary' ? styles.primary : styles.secondary,
    disabled && styles.disabled,
    style,
  ];

  const textStyle =
    variant === 'primary' ? styles.textPrimary : styles.textSecondary;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled}
      style={buttonStyle}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  base: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: '#FDB022',
  },
  secondary: {
    backgroundColor: '#E5E7EB',
  },
  textPrimary: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  textSecondary: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 16,
  },
  disabled: {
    opacity: 0.6,
  },
});
