//src/pages/GetStarted/index.tsx

import React from 'react';

import {View, StyleSheet} from 'react-native';

import {Background, Title, ButtonYellow} from '../../components/atoms';

import {FeatureCard, Footer} from '../../components/molecules';



const GetStarted = ({navigation}) => {

  return (

    <View style={styles.container}>

      <Background />

      <View style={styles.content}>

        <Title />



        <View style={styles.featuresContainer}>

          <FeatureCard emoji="🍳" label="Resep Pilihan" />

          <FeatureCard emoji="📅" label="Perencana Menu" />

          <FeatureCard emoji="🛒" label="Daftar Belanja Cerdas" />

        </View>



        <ButtonYellow

          label="Mulai Sekarang →"

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

    width: '100%',

  },

  featuresContainer: {

    flexDirection: 'row',

    justifyContent: 'space-between',

    marginTop: 24,

    marginBottom: 24,

    width: '90%',

  },

});