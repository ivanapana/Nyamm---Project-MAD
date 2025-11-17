import React from 'react';
import Svg, {Path, Circle, Polyline, Line} from 'react-native-svg';

const Icon = ({name, size = 20, color = '#000000'}) => {
  const icons = {
    clock: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" />
        <Polyline points="12 6 12 12 16 14" stroke={color} strokeWidth="2" />
      </Svg>
    ),
    plus: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Line x1="12" y1="5" x2="12" y2="19" stroke={color} strokeWidth="2" />
        <Line x1="5" y1="12" x2="19" y2="12" stroke={color} strokeWidth="2" />
      </Svg>
    ),
    search: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Circle cx="11" cy="11" r="8" stroke={color} strokeWidth="2" />
        <Path d="M21 21l-4.35-4.35" stroke={color} strokeWidth="2" />
      </Svg>
    ),
    back: (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path d="M19 12H5M12 19l-7-7 7-7" stroke={color} strokeWidth="2" />
      </Svg>
    ),
  };

  return icons[name] || null;
};

export default Icon;