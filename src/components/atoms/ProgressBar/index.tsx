import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProgressBar = ({percentage, checkedCount, totalCount}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Progress Belanja</Text>
        <Text style={styles.counter}>
          {checkedCount}/{totalCount} item
        </Text>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, {width: `${percentage}%`}]} />
        {percentage > 10 && (
          <Text style={styles.progressText}>{percentage}%</Text>
        )}
      </View>
      <Text style={styles.statusText}>
        {checkedCount === totalCount
          ? '🎉 Selamat! Semua item sudah dibeli!'
          : `Masih ada ${totalCount - checkedCount} item yang perlu dibeli`}
      </Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontWeight: '700',
    fontSize: 16,
    color: '#1F2937',
  },
  counter: {
    fontWeight: '700',
    fontSize: 14,
    color: '#F59E0B',
  },
  progressBar: {
    height: 16,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
    position: 'relative',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FBBF24',
    borderRadius: 8,
  },
  progressText: {
    position: 'absolute',
    right: 8,
    top: 2,
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  statusText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});
