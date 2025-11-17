// src/pages/KumpulanResep/index.js
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import RecipePageLayout from '../../Templates/RecipePageLayout';
import RecipeList from '../../components/organisms/RecipeList';
import {recipesData} from '../../Data/recipesData';

const KumpulanResep = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleViewDetail = recipe => {
    navigation.navigate('Detail', {recipe});
  };

  const filteredRecipes = recipesData.filter(
    recipe =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <RecipePageLayout onSearch={handleSearch} onBack={handleBack}>
      <RecipeList recipes={filteredRecipes} onPressItem={handleViewDetail} />
    </RecipePageLayout>
  );
};

export default KumpulanResep;
