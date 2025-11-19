// File: src/components/atoms/TambahKeDaftarBelanja/index.tsx

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const TambahKeDaftarBelanja = () => {
  return (
    // Tombol ini ada di paling bawah, di dalam container putih
    <TouchableOpacity className="flex-row items-center justify-center bg-yellow-400 p-4 rounded-xl mt-6">
      <Feather name="shopping-cart" size={20} color="#3F3F46" /> 
      <Text className="ml-3 text-gray-900 font-semibold text-base">
        Tambah ke Daftar Belanja
      </Text>
    </TouchableOpacity>
  );
};

export default TambahKeDaftarBelanja;