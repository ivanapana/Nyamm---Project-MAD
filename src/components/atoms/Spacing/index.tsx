import React from 'react';
import {View} from 'react-native';

const Spacing = ({size = 'md', direction = 'vertical'}) => {
  const sizes = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  };

  const style = direction === 'vertical' 
    ? {height: sizes[size]} 
    : {width: sizes[size]};

  return <View style={style} />;
};

export default Spacing;