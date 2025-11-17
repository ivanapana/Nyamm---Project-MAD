import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import BackButton from '../components/atoms/BackButton';
import SearchBar from '../components/molecules/SearchBar';
import Spacing from '../components/atoms/Spacing';
import Text from '../components/atoms/Text';

const RecipePageLayout = ({onSearch, onBack, children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <BackButton 
            onPress={onBack}
            size={24}
            color="#FFFFFF"
            bgColor="#FBBF24"
          />
          <Spacing size="sm" direction="horizontal" />
          <Text type="title" style={styles.headerTitle}>
            Kumpulan Resep
          </Text>
        </View>
        
        <Spacing size="md" />
        
        <SearchBar 
          placeholder="Cari resep, bahan, kategori..."
          onSearch={onSearch}
        />
      </View>

      <Spacing size="lg" />

      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default RecipePageLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDE68A',
  },
  header: {
    backgroundColor: '#FBBF24',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    flex: 1,
  },
  content: {
    flex: 1,
  },
});