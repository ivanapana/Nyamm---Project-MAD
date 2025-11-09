import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SignUp = () => (
  <View style={styles.page}>
    <Text style={styles.text}>Sign Up Screen</Text>
  </View>
);

export default SignUp;

const styles = StyleSheet.create({
  page: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, fontWeight: 'bold'},
});
