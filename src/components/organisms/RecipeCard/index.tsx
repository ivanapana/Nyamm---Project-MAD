// src/components/organisms/RecipeCard/index.tsx
import React from 'react';
import {View, StyleSheet, Alert, Image} from 'react-native';
import RecipeInfo from '../../molecules/RecipeInfo';
import RecipeActions from '../../molecules/RecipeAction';
import Spacing from '../../atoms/Spacing';

const RecipeCard = ({recipe, onViewDetail}) => {
  const handleAddToMenu = () => {
    Alert.alert('Berhasil', `${recipe.title} ditambahkan ke menu`);
  };

  const handleDetail = () => {
    if (onViewDetail) onViewDetail(recipe);
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {recipe.image ? (
          <Image
            source={{uri: recipe.image}}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.placeholder}>
            <View style={styles.iconOuter}>
              <View style={styles.iconInner} />
            </View>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <RecipeInfo
          title={recipe.title}
          description={recipe.description}
          cookTime={recipe.cookTime}
        />

        <Spacing size="md" />

        <RecipeActions
          onAddToMenu={handleAddToMenu}
          onViewDetail={handleDetail}
        />
      </View>
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 16,
  },
  imageContainer: {
    height: 144,
    backgroundColor: '#FDE68A',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconOuter: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#7C3AED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconInner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FBBF24',
  },
  content: {
    padding: 16,
  },
});
