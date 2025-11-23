// File: src/pages/Bahan/index.tsx

import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BahanBahan from '../../components/atoms/BahanBahan';
import LangkahMemasak from '../../components/atoms/LangkahMemasak';
import TambahKeDaftarBelanja from '../../components/atoms/TambahKeDaftarBelanja';

const Bahan = () => {
  const [activeTab, setActiveTab] = useState('bahan');

  return (
    <ScrollView
      className="flex-1 bg-white"
      showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="dark-content" backgroundColor="#facc15" />
      <View className="bg-yellow-400 h-48 pt-10 px-5 relative">
        <TouchableOpacity className="absolute top-12 left-5 z-10 p-2">
          <Feather name="chevron-left" size={28} color="#3F3F46" />
        </TouchableOpacity>

        <View className="items-center justify-center mt-4">
          <View className="bg-purple-600 w-16 h-16 rounded-full items-center justify-center shadow-lg">
            <MaterialCommunityIcons name="frying-pan" size={36} color="white" />
            <View
              className="bg-white w-6 h-5 rounded-full absolute"
              style={{top: 20}}
            />
            <View
              className="bg-yellow-400 w-3 h-3 rounded-full absolute"
              style={{top: 24}}
            />
          </View>
        </View>
      </View>

      {/* == Bagian Konten Putih == */}
      <View className="bg-white -mt-10 rounded-t-3xl p-5 pt-6 pb-10">
        {/* Info Resep */}
        <Text className="text-2xl font-bold text-gray-900">
          Nasi Goreng Spesial
        </Text>
        <Text className="text-gray-600 mt-2 text-sm leading-5">
          Nasi goreng klasik Indonesia dengan bumbu spesial yang nikmat dan
          mudah dibuat di rumah
        </Text>

        {/* Info Waktu & Porsi */}
        <View className="flex-row justify-between items-center mt-4">
          <View className="flex-row items-center">
            <View className="bg-yellow-100 p-2 rounded-full">
              <Feather name="clock" size={20} color="#f59e0b" />
            </View>
            <Text className="ml-2 text-gray-700 font-medium">20 min</Text>
          </View>

          <View className="flex-row items-center">
            <View className="bg-blue-100 p-2 rounded-full">
              <Feather name="users" size={20} color="#3b82f6" />
            </View>
            <Text className="ml-2 text-gray-700 font-medium">2 porsi</Text>
          </View>

          <Text className="text-gray-500 text-sm">oleh Chef Berta</Text>
        </View>

        {/* == Tombol Tab == */}
        <View className="flex-row mt-6 space-x-3">
          {/* Tombol Bahan-bahan */}
          <TouchableOpacity
            onPress={() => setActiveTab('bahan')}
            className={`flex-1 p-3 rounded-xl items-center justify-center ${
              activeTab === 'bahan' ? 'bg-yellow-400' : 'bg-gray-100'
            }`}>
            <Text
              className={`font-semibold text-sm ${
                activeTab === 'bahan' ? 'text-gray-900' : 'text-gray-500'
              }`}>
              Bahan-bahan
            </Text>
          </TouchableOpacity>

          {/* Tombol Langkah Memasak */}
          <TouchableOpacity
            onPress={() => setActiveTab('langkah')}
            className={`flex-1 p-3 rounded-xl items-center justify-center ${
              activeTab === 'langkah' ? 'bg-yellow-400' : 'bg-gray-100'
            }`}>
            <Text
              className={`font-semibold text-sm ${
                activeTab === 'langkah' ? 'text-gray-900' : 'text-gray-500'
              }`}>
              Langkah Memasak
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-1">
          {activeTab === 'bahan' ? <BahanBahan /> : <LangkahMemasak />}
        </View>
        <TambahKeDaftarBelanja />
      </View>
    </ScrollView>
  );
};

export default Bahan;
