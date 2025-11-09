import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoBox}>
      <Image
        source={require('../../../assets/images/chef-hat.png')}
        style={styles.logoImage}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoBox: {
    width: 110,
    height: 110,
    borderRadius: 24,
    backgroundColor: '#FBBF24',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  logoImage: {
    width: 64,
    height: 64,
    tintColor: '#fff',
  },
});
