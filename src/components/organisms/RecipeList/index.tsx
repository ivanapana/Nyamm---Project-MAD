import React from 'react';
import {FlatList, View, StyleSheet, ActivityIndicator} from 'react-native';
import RecipeCard from '../RecipeCard';
import Text from '../../atoms/Text';

const RecipeList = ({recipes, onPressItem, onAddToMenu, loading}) => {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FBBF24" />
      </View>
    );
  }

  if (!recipes || recipes.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text type="body">Tidak ada resep yang ditemukan</Text>
      </View>
    );
  }

  const renderItem = ({item}) => (
    <View style={{marginBottom: 16}}>
      <RecipeCard 
        recipe={item} 
        onViewDetail={() => onPressItem(item)} 
        onAddToMenu={() => onAddToMenu(item)} 
      />
    </View>
  );

  return (
    <FlatList
      data={recipes}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  listContainer: { paddingHorizontal: 16, paddingBottom: 24 },
  emptyContainer: { paddingVertical: 48, alignItems: 'center' },
  loadingContainer: { paddingVertical: 48, alignItems: 'center', justifyContent: 'center' },
});