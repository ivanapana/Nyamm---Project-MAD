import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Alert} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import BackButton from '../../components/atoms/BackButton';
import ButtonYellow from '../../components/atoms/ButtonYellow';
import RecipeHeader from '../../components/molecules/RecipeHeader';
import StatCard from '../../components/molecules/StatCard';
import TabSelector from '../../components/molecules/TabSelector';
import IngredientItem from '../../components/molecules/IngredientItem';
import CookingStep from '../../components/molecules/CookingStep';

const DEFAULT_RECIPE = {
  name: 'Nasi Goreng Spesial',
  description: 'Nasi goreng klasik Indonesia dengan bumbu spesial...',
  time: '20 min',
  servings: '2 porsi',
  ingredients: [
    {id: 0, name: 'Nasi putih dingin', qty: '2', unit: 'piring'},
    {id: 1, name: 'Telur ayam', qty: '1', unit: 'butir'},
    {id: 2, name: 'Bawang putih', qty: '3', unit: 'siung'},
    {id: 3, name: 'Kecap manis', qty: '2', unit: 'sdm'},
    {id: 4, name: 'Minyak goreng', qty: '1', unit: 'sdm'},
  ],
  steps: [
    {
      id: 0,
      text: 'Haluskan bawang putih, bawang merah, dan cabai rawit. Sisihkan.',
    },
    {
      id: 1,
      text: 'Panaskan minyak dalam wajan, tumis bumbu halus hingga harum.',
    },
    {id: 2, text: 'Masukkan telur, orak-arik hingga setengah matang.'},
    {id: 3, text: 'Tambahkan nasi putih, aduk rata.'},
    {id: 4, text: 'Koreksi rasa, angkat dan sajikan.'},
  ],
};

export default function DetailPage() {
  const route = useRoute();
  const navigation = useNavigation();

  const recipeData = route.params?.recipe || DEFAULT_RECIPE;

  const {
    name,
    description,
    time,
    servings,
    ingredients = [],
    steps = [],
  } = recipeData;

  const [activeTab, setActiveTab] = useState('bahan');
  const [completedSteps, setCompletedSteps] = useState([]);
  const toggleStep = id => {
    setCompletedSteps(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  };
  const addRecipeToShoppingList = () => {
    Alert.alert(
      'Berhasil!',
      'Bahan resep telah ditambahkan ke daftar belanja.',
    );
    navigation.navigate('Belanja');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* --- HEADER --- */}
      <View style={styles.header}>
        <BackButton onPress={goBack} size={24} color="#000" bgColor="#FFC727" />
        <View style={styles.headerContent}>
          <RecipeHeader title={name} description={description} />
          <StatCard time={time} servings={servings} />
        </View>
      </View>

      {/* --- CONTENT --- */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'bahan' ? (
          <>
            {ingredients.map((ing, index) => {
              let displayText = ing.item || '';
              if (ing.name) {
                displayText = `${ing.qty || ''} ${ing.unit || ''} ${
                  ing.name
                }`.trim();
              }
              const modifiedIngredient = {
                ...ing,
                item: displayText,
              };

              return (
                <IngredientItem
                  key={ing.id || index}
                  ingredient={modifiedIngredient}
                />
              );
            })}

            <ButtonYellow
              label="Tambah Semua ke Daftar Belanja"
              onPress={addRecipeToShoppingList}
            />
          </>
        ) : (
          <>
            {steps.map((step, index) => (
              <CookingStep
                key={step.id || index}
                step={step}
                index={index}
                completed={completedSteps.includes(step.id)}
                onToggle={() => toggleStep(step.id)}
              />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF4',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerContent: {
    flex: 1,
    marginLeft: 16,
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
});
