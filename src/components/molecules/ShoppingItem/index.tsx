//src/components/molecules/ShoppingItem/index.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CheckedIcon from '../../../assets/images/checked.svg';
import UncheckedIcon from '../../../assets/images/unchecked.svg';
import TrashIcon from '../../../assets/images/trash.svg';

const ShoppingItem = ({item, checked, onToggle, onRemove}) => {
  return (
    <View style={[styles.row, checked && styles.rowChecked]}>
      <TouchableOpacity style={styles.iconContainer} onPress={onToggle}>
        {checked ? (
          <CheckedIcon width={28} height={28} />
        ) : (
          <UncheckedIcon width={28} height={28} />
        )}
      </TouchableOpacity>

      <View style={styles.details}>
        <Text style={[styles.name, checked && styles.nameChecked]}>
          {item.name}
        </Text>
        <View style={styles.meta}>
          <View style={[styles.badge, checked && styles.badgeChecked]}>
            <Text
              style={[styles.badgeText, checked && styles.badgeTextChecked]}>
              {item.amount}
            </Text>
          </View>
          <Text style={styles.from}>• dari {item.from}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onRemove}>
        <TrashIcon width={24} height={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  rowChecked: {
    backgroundColor: '#dcfce7',
  },
  iconContainer: {
    marginRight: 12, // ⭐️ INI YANG BISA ANDA UBAH — coba 16, 20, 24, dst
  },
  details: {
    flex: 1,
  },
  name: {
    fontWeight: '600',
    color: '#1f2937',
  },
  nameChecked: {
    color: '#16a34a',
    textDecorationLine: 'line-through',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  badge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    backgroundColor: '#fef3c7',
    borderRadius: 4,
  },
  badgeChecked: {
    backgroundColor: '#dcfce7',
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#d97706',
  },
  badgeTextChecked: {
    color: '#16a34a',
  },
  from: {
    fontSize: 11,
    color: '#6b7280',
  },
});
