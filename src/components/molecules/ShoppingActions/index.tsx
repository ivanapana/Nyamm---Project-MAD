//src/components/molecules/ShoppingActions/index.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Gap} from '../../atoms';
import PlusIcon from '../../../assets/images/plus.svg';
import TrashIcon from '../../../assets/images/trashred.svg';

const ShoppingActions = ({onAddPress, onClearPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton} onPress={onAddPress}>
        <PlusIcon width={20} height={20} />
        <Text style={styles.addText}>Tambah Item</Text>
      </TouchableOpacity>
      <Gap width={12} />
      <TouchableOpacity style={styles.clearButton} onPress={onClearPress}>
        <View style={styles.trashIconContainer}>
          <TrashIcon width={35} height={35} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  addButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addText: {
    fontWeight: '600',
    color: '#1f2937',
  },
  clearButton: {
    width: 80,
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trashIconContainer: {
    padding: 12,
    // paddingHorizontal: 10,
    // paddingVertical: 8,
    // margin: 5,
    // backgroundColor: 'lightblue', // un-comment untuk lihat area container
  },
});
