import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const meals = [
  {
    time: 'Pagi',
    meal: 'Nasi Goreng',
    image: require('../../../assets/images/mie.png'),
  },
  {
    time: 'Siang',
    meal: 'Ayam Bakar',
    image: require('../../../assets/images/udang.png'),
  },
  {
    time: 'Malam',
    meal: 'Sate Ayam',
    image: require('../../../assets/images/kangkung.png'),
  },
];

const MealList = () => {
  return (
    <View style={styles.container}>
      {meals.map((item, index) => (
        <TouchableOpacity key={index} style={styles.mealItem}>
          <Image source={item.image} style={styles.mealImage} />
          <View style={styles.mealDetails}>
            <Text style={styles.mealTime}>{item.time}</Text>
            <Text style={styles.mealName}>{item.meal}</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.changeButton}>Ganti</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#FFEDB3',
    marginBottom: 12,
  },
  mealImage: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginRight: 12,
  },
  mealDetails: {
    flex: 1,
  },
  mealTime: {
    fontSize: 11,
    fontWeight: '600',
    color: '#D97706',
    marginBottom: 4,
  },
  mealName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
  },
  changeButton: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FBBF24',
  },
});