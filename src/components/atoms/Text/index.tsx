//src/components/atoms/Text/index.tsx
import React from 'react';
import {Text as RNText} from 'react-native';

const Text = ({children, type = 'body', style}) => {
  const textStyles = {
    title: {fontSize: 20, fontWeight: 'bold', color: '#1f2937'},
    subtitle: {fontSize: 16, fontWeight: '600', color: '#374151'},
    body: {fontSize: 14, color: '#4b5563'},
    caption: {fontSize: 12, color: '#6b7280'},
    highlight: {color: '#FBBF24'},
  };

  return <RNText style={[textStyles[type], style]}>{children}</RNText>;
};

export default Text;
