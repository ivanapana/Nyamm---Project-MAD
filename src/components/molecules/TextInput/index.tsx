import React from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Input(props) {
  const {label, placeholder, value, onChangeText, secureTextEntry, keyboardType = 'default', rightIcon, leftIcon} = props;
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.row}>
        {leftIcon ? <View style={styles.left}>{leftIcon}</View> : null}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#9aa0a6"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize="none"
        />
        {rightIcon ? <TouchableOpacity style={styles.icon}>{rightIcon}</TouchableOpacity> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 12,
    color: '#444',
    marginBottom: 6,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e6e6e6',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#fff'
  },
  input: {
    flex: 1,
    height: 44,
    color: '#222',
  },
  left: {
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 8,
    padding: 6,
  },
});