// src/pages/SignIn/index.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SignIn = ({navigation}) => (
  <View style={styles.page}>
    <Text style={styles.text}>DashBoard</Text>

    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Main')}>
      {' '}
      {/* <-- ke BottomTabNavigator */}
      <Text style={styles.buttonText}>Masuk SignIn</Text>
    </TouchableOpacity>
  </View>
);

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  button: {
    backgroundColor: '#FBBF24',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});