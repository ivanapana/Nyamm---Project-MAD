import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Header(props) {
  const {title, onBack} = props || {};
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.back}>
        <Text style={styles.backText}>back</Text>
      </TouchableOpacity>
      {title ? <Text style={styles.title}>{title}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    // keep layout row so left 'back' sits at left
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    padding: 6,
    marginRight: 6,
  },
  backText: {
    color: '#666',
    fontSize: 14,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});