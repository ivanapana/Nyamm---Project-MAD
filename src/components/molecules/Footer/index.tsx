import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Footer = ({navigation}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    marginTop: 40,
  },
  footerText: {
    color: '#A3A3A3',
    fontSize: 14,
  },
  link: {
    color: '#FBBF24',
    fontWeight: '700',
  },
});
