// src/components/atoms/Icon/index.tsx
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const iconNames = {
  chef: 'smile',
  calendar: 'calendar',
  cart: 'shopping-cart',
  clock: 'clock',
  user: 'user',
  search: 'search',
  plus: 'plus',
  fridge: 'archive',
  check: 'check',
};

const Icon = ({name, size = 24, color = '#000'}) => {
  const iconName = iconNames[name] || 'circle';
  return <Feather name={iconName} size={size} color={color} />;
};

export default Icon;
