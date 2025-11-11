// src/components/molecules/QuickRecipes/index.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const QuickRecipes = () => {
  const recipes = [
    {img: '🥬', name: 'Tumis Kangkung', time: '15 min', difficulty: 'Mudah'},
    {img: '🍳', name: 'Omelette Keju', time: '10 min', difficulty: 'Mudah'},
    {
      img: '🍜',
      name: 'Mie Goreng Tek-Tek',
      time: '20 min',
      difficulty: 'Mudah',
    },
    {img: '🦐', name: 'Capcay Seafood', time: '25 min', difficulty: 'Sedang'},
  ];

  return (
    <View style={styles.card}>
      <Text style={styles.title}>⏱️ Resep Cepat {'<'} 30 Menit</Text>
      <View style={styles.grid}>
        {recipes.map((r, idx) => (
          <View key={idx} style={styles.recipeBox}>
            <Text style={styles.img}>{r.img}</Text>
            <Text style={styles.name}>{r.name}</Text>
            <Text style={styles.info}>
              {r.time} • {r.difficulty}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default QuickRecipes;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 16,
    elevation: 2,
  },
  title: {fontSize: 18, fontWeight: 'bold', color: '#1F2937', marginBottom: 12},
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  recipeBox: {
    width: '47%',
    backgroundColor: '#FFFAE5',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
  },
  img: {fontSize: 32, textAlign: 'center'},
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
  },
  info: {fontSize: 12, color: '#6B7280', textAlign: 'center'},
});
