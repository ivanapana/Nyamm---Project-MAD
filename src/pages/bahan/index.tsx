import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const initialIngredients = [
  { id: '1', name: 'Nasi putih dingin', checked: true },
  { id: '2', name: 'Nasi putih dingin', checked: true },
  { id: '3', name: 'Cabai rawit', checked: false },
  { id: '4', name: 'Minyak goreng', checked: false },
  { id: '5', name: 'Bawang Putih', checked: true },
  { id: '6', name: 'Garam', checked: false },
  { id: '7', name: 'Merica bubuk', checked: false },
  { id: '8', name: 'Daun bawang', checked: false },
  { id: '9', name: 'Daun bawang', checked: false },
  { id: '10', name: 'Ayam suwir (opsional)', checked: false },
];

export const Bahan = ({ navigation }) => {
  const [ingredients, setIngredients] = useState(initialIngredients);
  const [activeTab, setActiveTab] = useState('Bahan'); // 'Bahan' or 'Langkah'

  const toggleIngredient = (id) => {
    setIngredients(
      ingredients.map(ing =>
        ing.id === id ? { ...ing, checked: !ing.checked } : ing
      )
    );
  };

  const handleAddToShoppingList = () => {
    Alert.alert('Sukses', 'Bahan-bahan yang belum diceklis telah ditambahkan ke daftar belanja.');
  };

  const handleAddToMenu = () => {
    Alert.alert('Sukses', 'Resep telah ditambahkan ke perencana menu Anda.');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.headerIconContainer}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Image
          source={require('../../assets/images/omlet.png')}
          style={styles.headerImage}
        />
        <TouchableOpacity style={styles.headerIconContainer}>
          <Icon name="heart" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.recipeInfoCard}>
          <Text style={styles.recipeTitle}>Nasi Goreng Spesial</Text>
          <Text style={styles.recipeDescription}>
            Nasi goreng klasik Indonesia dengan bumbu spesial yang nikmat dan mudah dibuat di rumah.
          </Text>
          <View style={styles.recipeMetaContainer}>
            <View style={styles.metaItem}>
              <Image source={require('../../assets/images/clock.png')} style={styles.metaIcon} />
              <Text style={styles.metaLabel}>Durasi</Text>
              <Text style={styles.metaValue}>20 min</Text>
            </View>
            <View style={styles.metaItem}>
              <Icon name="users" size={24} color="#3B82F6" />
              <Text style={styles.metaLabel}>Porsi</Text>
              <Text style={styles.metaValue}>2 porsi</Text>
            </View>
            <View style={styles.metaItem}>
              <Image source={require('../../assets/images/chef-hat.png')} style={styles.metaIcon} />
              <Text style={styles.metaLabel}>Level</Text>
              <Text style={styles.metaValue}>Mudah</Text>
            </View>
          </View>
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Bahan' && styles.tabButtonActive]}
            onPress={() => setActiveTab('Bahan')}
          >
            <Text style={[styles.tabText, activeTab === 'Bahan' && styles.tabTextActive]}>
              Bahan-bahan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'Langkah' && styles.tabButtonActive]}
            onPress={() => setActiveTab('Langkah')}
          >
            <Text style={[styles.tabText, activeTab === 'Langkah' && styles.tabTextActive]}>
              Langkah Memasak
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'Bahan' ? (
          <View style={styles.ingredientsCard}>
            <Text style={styles.cardTitle}>Bahan-bahan</Text>
            {ingredients.map(ingredient => (
              <TouchableOpacity
                key={ingredient.id}
                style={[
                  styles.ingredientRow,
                  ingredient.checked && styles.ingredientRowChecked,
                ]}
                onPress={() => toggleIngredient(ingredient.id)}
              >
                <View style={[
                  styles.checkbox,
                  ingredient.checked && styles.checkboxChecked
                ]}>
                  {ingredient.checked && <Icon name="check" size={14} color="#FFFFFF" />}
                </View>
                <Text style={[
                  styles.ingredientText,
                  ingredient.checked && styles.ingredientTextChecked
                ]}>
                  {ingredient.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.ingredientsCard}>
            <Text style={styles.cardTitle}>Langkah Memasak</Text>
            <Text style={styles.placeholderText}>Langkah-langkah memasak akan ditampilkan di sini.</Text>
          </View>
        )}

        <TouchableOpacity 
          style={styles.primaryButton}
          onPress={handleAddToShoppingList}
        >
          <Icon name="shopping-cart" size={20} color="#FFFFFF" />
          <Text style={styles.primaryButtonText}>Tambah ke Daftar Belanja</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.secondaryButton}
          onPress={handleAddToMenu}
        >
          <Image source={require('../../assets/images/planner.png')} style={styles.secondaryButtonIcon} />
          <Text style={styles.secondaryButtonText}>Tambah ke Menu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    backgroundColor: '#FBBF24',
    height: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 24,
  },
  headerIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -20,
  },
  contentContainer: {
    marginTop: -80,
    paddingHorizontal: 16,
  },
  recipeInfoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  recipeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 8,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 20,
  },
  recipeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 16,
  },
  metaItem: {
    alignItems: 'center',
  },
  metaIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  metaLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  metaValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 4,
    marginVertical: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
  },
  tabButtonActive: {
    backgroundColor: '#FBBF24',
  },
  tabText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  ingredientsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  ingredientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    marginBottom: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  ingredientRowChecked: {
    backgroundColor: '#D1FAE5',
    borderColor: '#10B981',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: '#10B981',
    borderColor: '#10B981',
  },
  ingredientText: {
    fontSize: 15,
    color: '#374151',
  },
  ingredientTextChecked: {
    textDecorationLine: 'line-through',
    color: '#065F46',
  },
  placeholderText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    paddingVertical: 20,
  },
  primaryButton: {
    backgroundColor: '#FBBF24',
    borderRadius: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  secondaryButton: {
    backgroundColor: '#FEF3C7',
    borderRadius: 24,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FBBF24',
  },
  secondaryButtonIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  bottomSpacer: {
    height: 40,
  },
});
