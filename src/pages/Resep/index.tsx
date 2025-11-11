//src/pages/Resep/index.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Resep = () => {
  return (
    <View style={styles.container}>
      <Text>Halaman Resep</Text>
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
