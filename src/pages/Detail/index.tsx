import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, Alert} from 'react-native';
import BackButton from '../../components/atoms/BackButton';
import ButtonYellow from '../../components/atoms/ButtonYellow';
import RecipeHeader from '../../components/molecules/RecipeHeader';
import StatCard from '../../components/molecules/StatCard';
import TabSelector from '../../components/molecules/TabSelector';
import IngredientItem from '../../components/molecules/IngredientItem';
import CookingStep from '../../components/molecules/CookingStep';

// Data resep
const recipe = {
  name: 'Nasi Goreng Spesial',
  description:
    'Nasi goreng klasik Indonesia dengan bumbu spesial yang nikmat dan mudah dibuat di rumah',
  time: '20 min',
  servings: '2 porsi',
};

const ingredients = [
  {id: 0, item: 'Nasi putih dingin'},
  {id: 1, item: 'Telur ayam'},
  {id: 2, item: 'Bawang putih'},
  {id: 3, item: 'Bawang merah'},
  {id: 4, item: 'Cabai rawit'},
  {id: 5, item: 'Kecap manis'},
  {id: 6, item: 'Minyak goreng'},
  {id: 7, item: 'Garam'},
];

const steps = [
  {
    id: 0,
    text: 'Haluskan bawang putih, bawang merah, dan cabai rawit. Sisihkan.',
  },
  {
    id: 1,
    text: 'Panaskan minyak dalam wajan, tumis bumbu halus hingga harum dan matang.',
  },
  {id: 2, text: 'Masukkan telur, orak-arik hingga setengah matang.'},
  {id: 3, text: 'Tambahkan nasi putih, aduk rata dengan bumbu dan telur.'},
  {
    id: 4,
    text: 'Tuang kecap manis, garam, dan merica. Aduk hingga nasi berubah warna merata.',
  },
  {id: 5, text: 'Masukkan daun bawang yang sudah diiris, aduk sebentar.'},
  {id: 6, text: 'Koreksi rasa, angkat dan sajikan selagi hangat.'},
];

export default function DetailPage({navigation}) {
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
      <View style={styles.header}>
        <BackButton onPress={goBack} size={24} color="#000" bgColor="#FFC727" />
        <View style={styles.headerContent}>
          <RecipeHeader title={recipe.name} description={recipe.description} />
          <StatCard time={recipe.time} servings={recipe.servings} />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === 'bahan' ? (
          <>
            {ingredients.map(ing => (
              <IngredientItem key={ing.id} ingredient={ing} />
            ))}
            <ButtonYellow
              label="Tambah Semua ke Daftar Belanja"
              onPress={addRecipeToShoppingList}
            />
          </>
        ) : (
          <>
            {steps.map((step, index) => (
              <CookingStep
                key={step.id}
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
