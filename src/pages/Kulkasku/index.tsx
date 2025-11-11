import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

// Mock data for fridge items based on the image
const initialFridgeItems = [
  { id: '1', name: 'Wortel', quantity: '1 kg', category: 'Sayuran & Buah', icon: '🥕', color: '#D1FAE5' },
  { id: '2', name: 'Kentang', quantity: '500 gram', category: 'Sayuran & Buah', icon: '🥔', color: '#D1FAE5' },
  { id: '3', name: 'Tomat', quantity: '3 buah', category: 'Sayuran & Buah', icon: '🍅', color: '#D1FAE5' },
  { id: '4', name: 'Bawang Bombay', quantity: '2 buah', category: 'Sayuran & Buah', icon: '🧅', color: '#D1FAE5' },

  { id: '5', name: 'Ayam Fillet', quantity: '500 gram', category: 'Daging & Protein', icon: '🍗', color: '#FEE2E2' },
  { id: '6', name: 'Daging Sapi', quantity: '300 gram', category: 'Daging & Protein', icon: '🥩', color: '#FEE2E2' },
  { id: '7', name: 'Telur ayam', quantity: '12 butir', category: 'Daging & Protein', icon: '🥚', color: '#FEE2E2' },
  { id: '8', name: 'Ikan Salmon', quantity: '200 gram', category: 'Daging & Protein', icon: '🐟', color: '#FEE2E2' },

  { id: '9', name: 'Bawang Merah', quantity: '250 gram', category: 'Bumbu Dapur', icon: '🧅', color: '#FFFBEB' },
  { id: '10', name: 'Bawang Putih', quantity: '100 gram', category: 'Bumbu Dapur', icon: '🧄', color: '#FFFBEB' },
  { id: '11', name: 'Cabai Rawit', quantity: '50 gram', category: 'Bumbu Dapur', icon: '🌶️', color: '#FFFBEB' },
  { id: '12', name: 'Kecap Manis', quantity: '1 botol', category: 'Bumbu Dapur', icon: '🍯', color: '#FFFBEB' },

  { id: '13', name: 'Beras', quantity: '1 kg', category: 'Bahan kering', icon: '🍚', color: '#F0F9FF' },
  { id: '14', name: 'Tepung terigu', quantity: '750 gram', category: 'Bahan kering', icon: '🌾', color: '#F0F9FF' },
  { id: '15', name: 'Gula Pasir', quantity: '400 gram', category: 'Bahan kering', icon: '🍬', color: '#F0F9FF' },
  { id: '16', name: 'Mie Instan', quantity: '5 bungkus', category: 'Bahan kering', icon: '🍜', color: '#F0F9FF' },

  { id: '17', name: 'Susu cair', quantity: '1 liter', category: 'Susu & Olahan', icon: '🥛', color: '#E0F2FE' },
  { id: '18', name: 'Keju Cheddar', quantity: '1 blok', category: 'Susu & Olahan', icon: '🧀', color: '#E0F2FE' },
  { id: '19', name: 'Yogurt', quantity: '2 cup', category: 'Susu & Olahan', icon: '🍦', color: '#E0F2FE' },

  { id: '20', name: 'Nugget Ayam', quantity: '1 pack', category: 'Makanan Beku', icon: '🍟', color: '#DBEAFE' },
  { id: '21', name: 'Sosis', quantity: '500 gram', category: 'Makanan Beku', icon: '🌭', color: '#DBEAFE' },
];

export const Kulkasku = ({ navigation }) => {
  const [fridgeItems, setFridgeItems] = useState(initialFridgeItems);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategories, setExpandedCategories] = useState({}); // To manage collapsible categories

  // Group items by category
  const groupedItems = fridgeItems.reduce((acc, item) => {
    (acc[item.category] = acc[item.category] || []).push(item);
    return acc;
  }, {});

  // Filter items based on search query
  const filteredGroupedItems = Object.keys(groupedItems).reduce((acc, category) => {
    const filtered = groupedItems[category].filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[category] = filtered;
    }
    return acc;
  }, {});

  const totalItems = fridgeItems.length;

  const handleAddItem = () => {
    Alert.alert('Tambah Bahan', 'Fungsi untuk menambah bahan baru akan diimplementasikan.');
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleFilter = () => {
    Alert.alert('Filter', 'Fungsi filter akan diimplementasikan.');
  };

  const handleEditItem = (itemId) => {
    Alert.alert('Edit Bahan', `Mengedit item dengan ID: ${itemId}`);
  };

  const handleDeleteItem = (itemId) => {
    Alert.alert('Hapus Bahan', `Menghapus item dengan ID: ${itemId}`);
    setFridgeItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.headerTitle}>Kulkasku</Text>
          <TouchableOpacity 
            style={styles.addButtonHeader}
            onPress={handleAddItem}
          >
            <Icon name="plus" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerSubtitle}>Inventaris dapur digital 🧑‍🍳</Text>

        {/* Total Items Card */}
        <View style={styles.totalItemsCard}>
          <View style={styles.totalItemsIcon}>
            <Icon name="package" size={24} color="#FBBF24" />
          </View>
          <View>
            <Text style={styles.totalItemsCount}>{totalItems}</Text>
            <Text style={styles.totalItemsLabel}>Total item di Kulkas</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Icon name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Cari bahan di Kulkas..."
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={handleSearch}
          />
          <TouchableOpacity onPress={handleFilter} style={styles.filterIcon}>
            <Icon name="filter" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Content Area */}
      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {Object.keys(filteredGroupedItems).map(category => (
          <View key={category} style={styles.categorySection}>
            <TouchableOpacity 
              style={styles.categoryHeader}
              onPress={() => toggleCategory(category)}
            >
              <View style={styles.categoryTitleContainer}>
                {/* Icon based on category, using a generic one for now */}
                <View style={[styles.categoryIconBg, { backgroundColor: filteredGroupedItems[category][0]?.color || '#E0F2FE' }]}>
                  <Text style={styles.categoryEmoji}>{filteredGroupedItems[category][0]?.icon || '📦'}</Text>
                </View>
                <Text style={styles.categoryTitle}>{category}</Text>
                <Text style={styles.categoryItemCount}>{filteredGroupedItems[category].length} item</Text>
              </View>
              <Icon 
                name={expandedCategories[category] ? "chevron-up" : "chevron-down"} 
                size={20} 
                color="#9CA3AF" 
              />
            </TouchableOpacity>

            {expandedCategories[category] && (
              <View style={styles.categoryItemsList}>
                {filteredGroupedItems[category].map(item => (
                  <View key={item.id} style={styles.itemCard}>
                    <View style={[styles.itemIconBg, { backgroundColor: item.color }]}>
                      <Text style={styles.itemEmoji}>{item.icon}</Text>
                    </View>
                    <View style={styles.itemInfo}>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <Text style={styles.itemQuantity}>{item.quantity}</Text>
                    </View>
                    <View style={styles.itemActions}>
                      <TouchableOpacity onPress={() => handleEditItem(item.id)} style={styles.actionButton}>
                        <Icon name="edit-2" size={16} color="#F59E0B" />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleDeleteItem(item.id)} style={styles.actionButton}>
                        <Icon name="trash-2" size={16} color="#EF4444" />
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8', // Light grey background for content
  },
  header: {
    backgroundColor: '#FBBF24',
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 20,
  },
  addButtonHeader: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalItemsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  totalItemsIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFFBEB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalItemsCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  totalItemsLabel: {
    fontSize: 13,
    color: '#6B7280',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1F2937',
  },
  filterIcon: {
    marginLeft: 8,
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  categorySection: {
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  categoryTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  categoryIconBg: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryEmoji: {
    fontSize: 18,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  categoryItemCount: {
    fontSize: 13,
    color: '#6B7280',
    marginLeft: 8,
  },
  categoryItemsList: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  itemIconBg: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemEmoji: {
    fontSize: 22,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1F2937',
  },
  itemQuantity: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  itemActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 6,
  },
  bottomSpacer: {
    height: 40,
  },
});