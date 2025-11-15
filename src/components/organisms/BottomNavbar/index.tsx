// src/components/organisms/BottomNavBar.js
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const BottomNavBar = ({activeTab, onTabPress}) => {
  const tabs = [
    {key: 'home', label: 'Beranda', icon: 'chef'},
    {key: 'plan', label: 'Rencana', icon: 'calendar'},
    {key: 'cart', label: 'Belanja', icon: 'cart'},
    {key: 'fridge', label: 'Kulkas', icon: 'fridge'},
  ];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.key}
          onPress={() => onTabPress(tab.key)}
          style={styles.tab}>
          <Icon
            name={tab.icon}
            size={24}
            color={activeTab === tab.key ? '#FBBF24' : '#9CA3AF'}
          />
          <Text
            type="caption"
            style={[styles.label, activeTab === tab.key && styles.activeLabel]}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  activeLabel: {
    color: '#FBBF24',
    fontWeight: '600',
  },
});
