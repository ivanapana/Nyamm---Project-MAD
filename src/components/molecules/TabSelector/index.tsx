import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function TabSelector({activeTab, onTabChange}) {
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        onPress={() => onTabChange('bahan')}
        style={[styles.tabButton, activeTab === 'bahan' && styles.activeTab]}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'bahan' && styles.activeTabText,
          ]}>
          Bahan-bahan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onTabChange('langkah')}
        style={[styles.tabButton, activeTab === 'langkah' && styles.activeTab]}>
        <Text
          style={[
            styles.tabText,
            activeTab === 'langkah' && styles.activeTabText,
          ]}>
          Langkah Memasak
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 4,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 16,
  },
  activeTab: {
    backgroundColor: '#FBBF24',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
});
