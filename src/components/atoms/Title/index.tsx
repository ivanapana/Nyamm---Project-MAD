//src/components/atoms/Title/index.tsx
import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = () => {
  return (
    <>
      <Text style={styles.title}>
        nyamm<Text style={styles.highlight}>!</Text>
      </Text>
      <Text style={styles.subtitle}>Rencanakan Menu Harianmu</Text>
      <Text style={styles.description}>
        Kelola resep, buat rencana menu mingguan, dan belanja lebih terorganisir
        dengan nyamm!
      </Text>
    </>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  highlight: {
    color: '#FBBF24',
  },
  subtitle: {
    fontSize: 18,
    color: '#E5E5E5',
    marginTop: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    color: '#A3A3A3',
    fontSize: 14,
    marginVertical: 12,
    marginHorizontal: 20,
  },
});
