// src/components/molecules/RecipeAction/index.tsx
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

const RecipeActions = ({onAddToMenu, onViewDetail}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.primaryButton]}
        activeOpacity={0.8}
        onPress={onAddToMenu}>
        <Text style={styles.primaryText}>Tambah ke Menu</Text>
      </TouchableOpacity>

      <View style={styles.gap} />

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        activeOpacity={0.8}
        onPress={onViewDetail}>
        <Text style={styles.secondaryText}>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#FBBF24',
  },
  secondaryButton: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  primaryText: {
    color: '#1F2937',
    fontWeight: '600',
    fontSize: 14,
  },
  secondaryText: {
    color: '#1F2937',
    fontWeight: '600',
    fontSize: 14,
  },
  gap: {
    width: 8,
  },
});
