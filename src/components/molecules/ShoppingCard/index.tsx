// src/components/molecules/ShoppingCard/index.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TextAtom from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const ShoppingCard = ({item, checked, onToggle}) => {
  return (
    <View style={[styles.container, checked && styles.checkedContainer]}>
      <TouchableOpacity
        onPress={() => onToggle(item.id)}
        style={[
          styles.checkbox,
          checked ? styles.checkboxChecked : styles.checkboxUnchecked,
        ]}>
        {checked && <Icon name="check" size={16} color="#fff" />}
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={[styles.name, checked && styles.nameChecked]}>
          {item.name}
        </Text>

        <View style={styles.meta}>
          <View style={styles.amountBadge}>
            <Text style={styles.amountText}>{item.amount}</Text>
          </View>
          <Text style={styles.fromText}>• dari {item.from}</Text>
        </View>
      </View>
    </View>
  );
};

export default ShoppingCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#fff',
  },
  checkedContainer: {
    backgroundColor: '#F0FDF4',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxUnchecked: {
    borderWidth: 2,
    borderColor: '#D1D5DB',
    backgroundColor: '#fff',
  },
  checkboxChecked: {
    backgroundColor: '#16A34A',
    borderWidth: 0,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  nameChecked: {
    color: '#16A34A',
    textDecorationLine: 'line-through',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  amountBadge: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight: 8,
  },
  amountText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#D97706',
  },
  fromText: {
    fontSize: 12,
    color: '#6B7280',
  },
});
