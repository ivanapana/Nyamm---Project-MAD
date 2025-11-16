// src/pages/Rencana/index.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Rencana() {
  return (
    <View style={styles.container}>
      <Text>Halaman Rencana</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
