// src/pages/Detail/index.js
import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Alert} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {getDatabase, ref, push} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import BackButton from '../../components/atoms/BackButton';
import ButtonYellow from '../../components/atoms/ButtonYellow';
import RecipeHeader from '../../components/molecules/RecipeHeader';
import StatCard from '../../components/molecules/StatCard';
import TabSelector from '../../components/molecules/TabSelector';
import IngredientItem from '../../components/molecules/IngredientItem';
import CookingStep from '../../components/molecules/CookingStep';

const DEFAULT_RECIPE = {
  name: 'Nasi Goreng Spesial',
  description: 'Nasi goreng klasik Indonesia...',
  time: '20 min',
  servings: '2 porsi',
  ingredients: [],
  steps: [],
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

  const addRecipeToShoppingList = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      Alert.alert('Error', 'Anda harus login terlebih dahulu');
      return;
    }

    const db = getDatabase();
    const shoppingListRef = ref(db, `shopping_list/${user.uid}`);

    try {
      const promises = ingredients.map(ing => {
        return push(shoppingListRef, {
          name: ing.name,
          qty: ing.qty || '',
          unit: ing.unit || '',
          source: name,
          isChecked: false,
          createdAt: Date.now(),
        });
      });

      await Promise.all(promises);

      Alert.alert(
        'Sukses!',
        `${ingredients.length} bahan telah ditambahkan ke Daftar Belanja.`,
        [
          {
            text: 'Lihat Daftar Belanja',
            onPress: () => navigation.navigate('MainApp', {screen: 'Belanja'}),
          },
          {text: 'Oke', style: 'cancel'},
        ],
      );
    } catch (error) {
      console.log(error);
      Alert.alert('Gagal', 'Terjadi kesalahan saat menyimpan data.');
    }
  };

  const toggleStep = id => {
    setCompletedSteps(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={goBack} size={24} color="#000" bgColor="#FFC727" />
        <View style={styles.headerContent}>
          <RecipeHeader title={name} description={description} />
          <StatCard time={time} servings={servings} />
        </View>
      </View>

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
