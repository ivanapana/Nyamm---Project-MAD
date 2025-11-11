// src/screens/Belanja.js

import React, {useState} from 'react';
import {View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Gap} from '../../components/atoms';
import ShoppingProgress from '../../components/molecules/ShoppingProgress';
import ShoppingActions from '../../components/molecules/ShoppingActions';
import ShoppingCategory from '../../components/molecules/ShoppingCategory';
import {categories} from '../../data/shoppingData'; //

const {width} = Dimensions.get('window');

const Belanja = () => {
  const [expandedCategories, setExpandedCategories] = useState([
    'vegetables',
    'meat',
    'spices',
  ]);
  const [checkedItems, setCheckedItems] = useState([0, 3, 5, 8]);

  const toggleCategory = id => {
    setExpandedCategories(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  };

  const toggleItem = id => {
    setCheckedItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  };

  const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.headerTitle}>Daftar Belanja</Text>
          <Text style={styles.headerSubtitle}>
            Belanja lebih terorganisir 🛒
          </Text>
        </View>
      </View>

      <View style={styles.contentWrapper}>
        <ShoppingProgress checkedItems={checkedItems} totalItems={totalItems} />
        <Gap height={16} />

        <ShoppingActions
          onAddPress={() => {}}
          onClearPress={() => setCheckedItems([])}
        />
        <Gap height={24} />

        <ScrollView contentContainerStyle={styles.scroll}>
          {categories.map(cat => (
            <ShoppingCategory
              key={cat.id}
              id={cat.id}
              name={cat.name}
              icon={cat.icon}
              color={cat.color}
              items={cat.items}
              expanded={expandedCategories.includes(cat.id)}
              checkedItems={checkedItems}
              onToggleCategory={() => toggleCategory(cat.id)}
              onToggleItem={toggleItem}
            />
          ))}
          <Gap height={120} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Belanja;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fffdf7'},
  header: {
    backgroundColor: '#FFC72C',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 180,
    position: 'relative',
  },
  titleContainer: {marginTop: 0},
  headerTitle: {fontSize: 28, fontWeight: 'bold', color: '#ffffffff'},
  headerSubtitle: {fontSize: 14, color: '#ffffffff', marginTop: 4},
  contentWrapper: {
    flex: 1,
    marginTop: -170,
    marginHorizontal: 10,
  },
  scroll: {
    paddingBottom: 50,
  },
});
