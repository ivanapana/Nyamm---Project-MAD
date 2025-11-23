//src/components/atoms/SaveButton/index.tsx
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const SaveButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: '#FFD700', // Warna kuning solid
          borderRadius: 12,
          paddingVertical: 12,
          paddingHorizontal: 24,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
            marginRight: 8,
          }}>
          ✓ {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SaveButton;
