// src/components/molecules/QuickActionCard.tsx
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const QuickActionCard = ({title, subtitle, icon, variant = 'primary'}) => {
  return (
    <View
      style={[
        styles.card,
        variant === 'primary' ? styles.primary : styles.secondary,
      ]}>
      <View style={styles.iconBox}>
        <Icon
          name={icon}
          size={24}
          color={variant === 'primary' ? '#fff' : '#F59E0B'}
        />
      </View>
      <Text
        style={[
          styles.title,
          variant === 'primary' ? styles.titlePrimary : styles.titleSecondary,
        ]}>
        {title}
      </Text>
      <Text
        type="caption"
        style={
          variant === 'primary'
            ? styles.subtitlePrimary
            : styles.subtitleSecondary
        }>
        {subtitle}
      </Text>
    </View>
  );
};

export default QuickActionCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 24,
    flex: 1,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  primary: {
    backgroundColor: '#FBBF24',
  },
  secondary: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#FED7AA',
  },
  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  titlePrimary: {
    color: '#fff',
  },
  titleSecondary: {
    color: '#1F2937',
  },
  subtitlePrimary: {
    color: '#FEF3C7',
    marginTop: 4,
  },
  subtitleSecondary: {
    color: '#6B7280',
    marginTop: 4,
  },
});
