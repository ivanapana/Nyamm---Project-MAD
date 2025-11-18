// File: src/components/atoms/BahanBahan/index.tsx
// (Komponen ini BUKAN halaman, tapi isi tab "Bahan-bahan")

import React from 'react';
import { View, Text } from 'react-native';

// Data bahan-bahan sesuai gambar (hardcoded untuk contoh ini)
const ingredients = [
  'Cabai rawit', 'Cabai rawit', 'Cabai rawit',
  'Minyak goreng', 'Minyak goreng', 'Garam',
  'Merica bubuk', 'Daun bawang', 'Daun bawang',
  'Ayam suwir (opsional)', 'Ayam suwir (opsional)', 'Ayam suwir (opsional)'
];

const BahanBahan = () => {
  return (
    <View className="mt-5">
      {ingredients.map((item, index) => (
        <View 
          key={index} 
          // Style item persis seperti di design
          className="bg-white p-4 rounded-xl mb-3 shadow-sm border border-gray-100"
        >
          <Text className="text-gray-800 text-sm">{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default BahanBahan;