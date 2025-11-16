// src/components/molecules/SearchBar/index.tsx
import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from '../../atoms/Icon';

const SearchBar = ({placeholder = 'Cari sesuatu...'}) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#9CA3AF" />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#9CA3AF"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffcc',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ffffff',
    width: '100%',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
});
