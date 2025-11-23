//src/components/molecules/TextInputSign/index.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const InputField = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  leftIcon,
  rightIcon,
  keyboardType = 'default',
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={styles.inputWrapper}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9AA0A6"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />

        {rightIcon && (
          <TouchableOpacity style={styles.rightIcon}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    color: '#4B5563',
    marginBottom: 6,
    fontSize: 14,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
  },
  leftIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },
  rightIcon: {
    marginLeft: 8,
  },
});

export default InputField;
