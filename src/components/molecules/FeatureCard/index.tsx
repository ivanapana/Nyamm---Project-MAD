import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FeatureCard = ({emoji, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBox}>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default FeatureCard;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(251, 191, 36, 0.2)',
    borderColor: 'rgba(251, 191, 36, 0.3)',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  emoji: {
    fontSize: 22,
  },
  label: {
    fontSize: 12,
    color: '#D4D4D4',
    fontWeight: '600',
    textAlign: 'center',
  },
});
