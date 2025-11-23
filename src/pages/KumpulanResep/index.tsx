import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, onValue} from 'firebase/database';
import RecipePageLayout from '../../Templates/RecipePageLayout';
import RecipeList from '../../components/organisms/RecipeList';

const KumpulanResep = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const recipesRef = ref(db, 'recipes/');

    onValue(recipesRef, snapshot => {
      const data = snapshot.val();

      if (data) {
        const allRecipes = Object.keys(data).map(key => ({
          ...data[key],
          id: key,

          title: data[key].name || data[key].title,
        }));

        setRecipes(allRecipes);
      } else {
        setRecipes([]);
      }
      setLoading(false);
    });
  }, []);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleViewDetail = recipe => {
    navigation.navigate('Detail', {recipe});
  };
  const filteredRecipes = recipes.filter(recipe => {
    const titleText = recipe.title || '';
    const descText = recipe.description || '';
    const query = searchQuery.toLowerCase();

    return (
      titleText.toLowerCase().includes(query) ||
      descText.toLowerCase().includes(query)
    );
  });

  return (
    <RecipePageLayout onSearch={handleSearch} onBack={handleBack}>
      <RecipeList
        recipes={filteredRecipes}
        onPressItem={handleViewDetail}
        loading={loading}
      />
    </RecipePageLayout>
  );
};

export default KumpulanResep;
