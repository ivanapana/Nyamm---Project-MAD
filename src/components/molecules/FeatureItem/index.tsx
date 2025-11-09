import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FeatureItem = ({emoji, label}) => {
  return (
    <View style={styles.featureItem}>
      <View style={styles.featureIcon}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <Text style={styles.featureText}>{label}</Text>
    </View>
  );
};

export default FeatureItem;

const styles = StyleSheet.create({
  featureItem: {
    alignItems: 'center',
  },
  featureIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(251,191,36,0.2)',
    borderColor: 'rgba(251,191,36,0.3)',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  emoji: {
    fontSize: 22,
  },
  featureText: {
    fontSize: 12,
    color: '#D4D4D4',
    fontWeight: '600',
  },
});
