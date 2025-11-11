// src/components/molecules/MenuCard/index.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MenuCard = ({icon, time, meal, duration, calories}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{icon}</Text>
      <View style={{flex: 1}}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.meal}>{meal}</Text>
        <Text style={styles.info}>
          ⏱ {duration} · 🔥 {calories}
        </Text>
      </View>
      <Text style={styles.plus}>＋</Text>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF3E0',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  icon: {fontSize: 30, marginRight: 12},
  time: {fontSize: 13, color: '#999'},
  meal: {fontSize: 16, fontWeight: '700', color: '#333'},
  info: {fontSize: 12, color: '#777'},
  plus: {fontSize: 22, color: '#FF7043', fontWeight: '600'},
});
