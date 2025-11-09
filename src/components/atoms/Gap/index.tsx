import React from 'react';
import {View} from 'react-native';

type Props = {
  height?: number;
  width?: number;
};

const Gap = ({height, width}: Props) => {
  return <View style={{height, width}} />;
};

export default Gap;
