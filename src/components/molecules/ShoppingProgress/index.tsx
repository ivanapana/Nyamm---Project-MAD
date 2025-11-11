//src/molecules/ShoppingProgress/index.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../Card';
import SvgUri from 'react-native-svg';

const ShoppingProgress = ({checkedItems}) => {
  const totalItems = 20;
  const checkedCount = checkedItems.length;
  const progressPercentage = Math.round((checkedCount / totalItems) * 100);

  return (
    <Card padding={16} rounded={20} style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.label}>Progress Belanja</Text>
        <Text style={styles.count}>
          {checkedCount}/{totalItems} item
        </Text>
      </View>
      <View style={styles.barBg}>
        <View style={[styles.barFill, {width: `${progressPercentage}%`}]} />
        {progressPercentage > 10 && (
          <Text style={styles.percent}>{progressPercentage}%</Text>
        )}
      </View>
      <Text style={styles.hint}>
        {checkedCount === totalItems
          ? '🎉 Semua item sudah dibeli!'
          : `Masih ada ${totalItems - checkedCount} item`}
      </Text>
    </Card>
  );
};

export default ShoppingProgress;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: '600',
    color: '#1f2937',
  },
  count: {
    fontWeight: '600',
    color: '#f59e0b',
    fontSize: 12,
  },
  barBg: {
    height: 16,
    backgroundColor: '#e5e7eb',
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#fbbf24',
    borderRadius: 8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 6,
  },
  percent: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  hint: {
    fontSize: 11,
    color: '#6b7280',
    marginTop: 6,
  },
});
