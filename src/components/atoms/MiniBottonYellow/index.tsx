//src/components/atoms/MiniBottonYellow/index.tsx
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../Text';

const MiniButtonYellow = ({onPress, children = 'Edit'}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MiniButtonYellow;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
  },
  buttonText: {
    color: '#92400E',
    fontSize: 12,
    fontWeight: '500',
  },
});
