//src/components/molecules/ShoppingCategory/index.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Card from '../Card';
import ShoppingItem from '../ShoppingItem';
import DownIcon from '../../../assets/images/down.svg';
import DownRealIcon from '../../../assets/images/downreal.svg';

const ShoppingCategory = ({
  id,
  name,
  icon,
  color,
  items,
  expanded,
  checkedItems,
  onToggleCategory,
  onToggleItem,
}) => {
  const checkedInCat = items.filter(item =>
    checkedItems.includes(item.id),
  ).length;

  return (
    <Card padding={0} rounded={20} style={styles.card}>
      <TouchableOpacity style={styles.header} onPress={onToggleCategory}>
        <View style={styles.info}>
          <View style={[styles.iconBox, {backgroundColor: color}]}>{icon}</View>
          <View>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.count}>
              {checkedInCat}/{items.length} selesai
            </Text>
          </View>
        </View>
        {expanded ? (
          <DownIcon width={24} height={24} />
        ) : (
          <DownRealIcon width={24} height={24} />
        )}
      </TouchableOpacity>
      {expanded && (
        <View style={styles.items}>
          {items.map(item => (
            <ShoppingItem
              key={item.id}
              item={item}
              checked={checkedItems.includes(item.id)}
              onToggle={() => onToggleItem(item.id)}
              onRemove={() => {}}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

export default ShoppingCategory;

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    color: '#1f2937',
    fontSize: 16,
  },
  count: {
    fontSize: 12,
    color: '#6b7280',
  },
  items: {
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    backgroundColor: '#f9fafb',
  },
});
