// src/components/organisms/RecipeList/index.tsx
import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import RecipeCard from '../RecipeCard';
import Text from '../../atoms/Text';

const RecipeList = ({recipes, onPressItem}) => {
  if (recipes.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text type="body">Tidak ada resep yang ditemukan</Text>
      </View>
    );
  }

  const renderItem = ({item}) => (
    <RecipeCard recipe={item} onViewDetail={() => onPressItem(item)} />
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
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  emptyContainer: {
    paddingVertical: 48,
    alignItems: 'center',
  },
});
