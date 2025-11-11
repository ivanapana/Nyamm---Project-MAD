import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Resep = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Halaman Resep</Text>
      
      {/* Temporary button to navigate to Bahan screen */}
      <TouchableOpacity 
        style={styles.tempButton}
        onPress={() => navigation.navigate('Bahan')}
      >
        <Text style={styles.tempButtonText}>Lihat UI Bahan (Sementara)</Text>
      </TouchableOpacity>
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
  tempButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#E5E7EB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  tempButtonText: {
    color: '#4B5563',
    fontSize: 12,
  },
});