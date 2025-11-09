import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Logo, Title, Background, Button} from '../../components/atoms';
import {FeatureItem, Footer} from '../../components/molecules';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Background />

      <View style={styles.content}>
        <Logo />
        <Title />

        <View style={styles.featuresContainer}>
          <FeatureItem emoji="🍳" label="Ribuan Resep" />
          <FeatureItem emoji="📅" label="Menu Planner" />
          <FeatureItem emoji="🛒" label="Smart List" />
        </View>

        <Button
          label="Get Started →"
          onPress={() => navigation.navigate('SignUp')}
        />

        <Footer navigation={navigation} />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 24,
    width: '90%',
  },
});
