import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import RecipeInfo from '../../molecules/RecipeInfo';
import RecipeActions from '../../molecules/RecipeAction';
import Spacing from '../../atoms/Spacing';

const RecipeCard = ({recipe, onViewDetail, onAddToMenu}) => {
  
  const handleAddToMenuPress = () => {
    if (onAddToMenu) {
      onAddToMenu(recipe);
    }
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
        ) : null}
      </View>

      <View style={styles.content}>
        <RecipeInfo
          title={recipe.title}
          description={recipe.description}
          cookTime={recipe.cookTime || recipe.time || recipe.duration} 
        />

        <Spacing size="md" />

        <RecipeActions
          onAddToMenu={handleAddToMenuPress} 
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
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 16,
  },
});