import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignIn = () => (
  <View style={styles.page}>
    <Text style={styles.text}>Sign In Screen</Text>
  </View>
);

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, fontWeight: 'bold'},
});
