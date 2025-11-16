// src/components/atoms/Icon/index.tsx
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MailIcon from '../../../assets/images/mail.svg';
import LockIcon from '../../../assets/images/lock.svg';
import ChefHatIcon from '../../../assets/images/chef-hat-svgrepo-com.svg';
import eye from '../../../assets/images/eye.svg';

const iconNames = {
  chef: 'smile',
  calendar: 'calendar',
  cart: 'shopping-cart',
  clock: 'clock',
  user: 'user',
  mail: 'mail',
  lock: 'lock',
  eye: 'eye',
  eyeOff: 'eye-off',
  search: 'search',
  plus: 'plus',
  fridge: 'archive',
};

const Icon = ({name, size = 24, color = '#000'}) => {
  if (name === 'chef') {
    return <ChefHatIcon width={size} height={size} fill={color} />;
  }

  if (name === 'mail') {
    return <MailIcon width={size} height={size} fill={color} />;
  }

  if (name === 'lock') {
    return <LockIcon width={size} height={size} fill={color} />;
  }

  if (name === 'eye') {
    return <LockIcon width={size} height={size} fill={color} />;
  }

  const iconName = iconNames[name] || 'circle';
  return <Feather name={iconName} size={size} color={color} />;
};

export default Icon;
