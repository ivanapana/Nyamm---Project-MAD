// src/pages/Profile/index.tsx
// Sekarang menjadi: Kumpulan Resep Page

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackButton from '../../components/atoms/BackButton';
import SearchBar from '../../components/molecules/SearchBar';

const RecipeCollection = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={styles.headerRow}>
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Kumpulan Resep</Text>
        </View>

        <View style={styles.searchWrapper}>
          <SearchBar placeholder="Cari resep, bahan, atau kategori..." />
        </View>
      </View>

      <View style={styles.content}>
        {/* nanti kamu isi card resep di sini */}
      </View>

    </SafeAreaView>
  );
};

export default RecipeCollection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEF',
  },

  headerBackground: {
    backgroundColor: '#FFC727',
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 110,
    borderRadius: 10,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 10,
  },

  searchWrapper: {
    marginTop: 30,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: -70,
  },
});
