// File: src/components/atoms/BahanBahan/index.tsx
import React from 'react';
import {View, Text} from 'react-native';

const ingredients = [
  'Cabai rawit',
  'Cabai rawit',
  'Cabai rawit',
  'Minyak goreng',
  'Minyak goreng',
  'Garam',
  'Merica bubuk',
  'Daun bawang',
  'Daun bawang',
  'Ayam suwir (opsional)',
  'Ayam suwir (opsional)',
  'Ayam suwir (opsional)',
];

const BahanBahan = () => {
  return (
    <View className="mt-5">
      {ingredients.map((item, index) => (
        <View
          key={index}
          className="bg-white p-4 rounded-xl mb-3 shadow-sm border border-gray-100">
          <Text className="text-gray-800 text-sm">{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default BahanBahan;
