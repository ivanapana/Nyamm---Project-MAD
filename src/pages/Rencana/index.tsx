import React from 'react';
import {View, StyleSheet} from 'react-native';
import ButtonYellow from '../../components/atoms/ButtonYellow';

export default function Rencana({navigation}) {
  const handleGoToDetail = () => {
    navigation.navigate('Detail');
  };

  return (
    <View style={styles.container}>
      <ButtonYellow label="Lihat Detail Resep" onPress={handleGoToDetail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
});
