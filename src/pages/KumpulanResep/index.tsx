import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {getDatabase, ref, onValue, set} from 'firebase/database';
import {getAuth} from 'firebase/auth';

import RecipePageLayout from '../../Templates/RecipePageLayout';
import RecipeList from '../../components/organisms/RecipeList';

const KumpulanResep = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {targetDate, targetCategory} = route.params || {};

  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const recipesRef = ref(db, 'recipes/');

    onValue(recipesRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const allRecipes = Object.keys(data).map(key => {
          const rawPhoto = data[key].photo || data[key].image;
          const cleanImage =
            rawPhoto && typeof rawPhoto === 'string'
              ? rawPhoto.trim()
              : 'https://via.placeholder.com/150';

          return {
            ...data[key],
            id: key,
            title: data[key].name || data[key].title,
            image: cleanImage, // Masukkan link yang sudah bersih
          };
        });
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

  const handleAddToMenu = async recipe => {
    if (!targetDate || !targetCategory) {
      Alert.alert(
        'Info',
        "Silakan buka menu ini melalui halaman 'Perencana Menu' untuk menjadwalkan.",
      );
      return;
    }

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      try {
        const db = getDatabase();
        const mealRef = ref(
          db,
          `users/${user.uid}/mealPlans/${targetDate}/${targetCategory}`,
        );

        await set(mealRef, {
          id: recipe.id,
          name: recipe.title,
          emoji: '🍲',
          duration: recipe.time || recipe.duration || '20 Min',
        });

        navigation.goBack();
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Gagal menyimpan menu.');
      }
    }
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
        onAddToMenu={handleAddToMenu}
        loading={loading}
      />
    </RecipePageLayout>
  );
};

export default KumpulanResep;
