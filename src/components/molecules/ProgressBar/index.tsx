//src/components/molecules/ProgressBar/index.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function ProgressBar({progress}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Progress Memasak</Text>
        <Text style={styles.percent}>{progress}%</Text>
      </View>
      <View style={styles.barBackground}>
        <View style={[styles.barFill, {width: `${progress}%`}]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  title: {
    fontWeight: '600',
    color: '#1F2937',
  },
  percent: {
    fontWeight: '600',
    color: '#F59E0B',
  },
  barBackground: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#FBBF24',
  },
});
