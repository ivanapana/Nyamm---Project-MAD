//src/pages/Belanja/index.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Belanja = () => {
  return (
    <View style={styles.container}>
      <Text>Halaman Belanja</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
