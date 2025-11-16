import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import BackButtonIcon from '../../../assets/images/BackButton.svg';

const BackButton = ({
  onPress,
  size = 24,
  color = '#000',
  bgColor = '#FFC727',
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container(bgColor)}>
      <BackButtonIcon width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: bgColor => ({
    backgroundColor: bgColor,
    padding: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
