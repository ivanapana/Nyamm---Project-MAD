//src/components/molecules/CookingStep/index.tsx
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function CookingStep({
  step,
  index,
  completed = false,
  onToggle,
}) {
  return (
    <TouchableOpacity
      style={[styles.stepItem, completed && styles.stepItemCompleted]}
      onPress={onToggle}
      activeOpacity={0.8}>
      <View
        style={[
          styles.stepNumber,
          completed ? styles.stepNumberCompleted : styles.stepNumberTodo,
        ]}>
        <Text style={styles.stepNumberText}>{completed ? '✓' : index + 1}</Text>
      </View>
      <Text style={[styles.stepText, completed && styles.stepTextCompleted]}>
        {step.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 16,
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  stepItemCompleted: {
    backgroundColor: '#DCFCE7',
    borderColor: '#A7F3D0',
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  stepNumberTodo: {
    backgroundColor: '#FBBF24',
  },
  stepNumberCompleted: {
    backgroundColor: '#16A34A',
  },
  stepNumberText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  stepText: {
    fontSize: 15,
    color: '#1F2937',
    flex: 1,
    lineHeight: 20,
  },
  stepTextCompleted: {
    color: '#16A34A',
    textDecorationLine: 'line-through',
  },
});
