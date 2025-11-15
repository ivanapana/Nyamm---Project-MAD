// src/components/molecules/MenuCard.tsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextAtom from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const MenuCard = ({time, emoji, meal, duration}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <View style={styles.content}>
        <TextAtom type="caption" style={{color: '#D97706', fontWeight: '600'}}>
          {time}
        </TextAtom>
        <TextAtom type="subtitle" style={styles.meal}>
          {meal}
        </TextAtom>
        <View style={styles.meta}>
          <Icon name="clock" size={14} color="#6B7280" />
          <TextAtom type="caption" style={{marginLeft: 4, color: '#6B7280'}}>
            {duration}
          </TextAtom>
        </View>
      </View>
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF9C4',
    borderRadius: 20,
    padding: 16,
    borderWidth: 2,
    borderColor: '#FED7AA',
    marginBottom: 12,
    alignItems: 'center',
  },
  emoji: {
    fontSize: 32,
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  meal: {
    marginTop: 4,
    color: '#1F2937',
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
});
