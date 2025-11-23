//src/components/molecules/IngredientItem/index.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function IngredientItem({ingredient}) {
  return (
    <View style={styles.ingredientItem}>
      <Text style={styles.ingredientName}>{ingredient.item}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ingredientItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 8,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  ingredientName: {
    fontSize: 15,
    color: '#1F2937',
    flex: 1,
  },
  ingredientAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#F59E0B',
  },
});
