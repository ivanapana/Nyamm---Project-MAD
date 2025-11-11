import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const days = [
  {day: 'S', date: '9'},
  {day: 'S', date: '10', active: true},
  {day: 'R', date: '11'},
  {day: 'K', date: '12'},
  {day: 'J', date: '13'},
  {day: 'S', date: '14'},
  {day: 'M', date: '15'},
];

const Calendar = () => {
  return (
    <View style={styles.container}>
      {days.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.day, item.active && styles.activeDay]}>
          <Text style={[styles.dayText, item.active && styles.activeDayText]}>
            {item.day}
          </Text>
          <Text style={[styles.dateText, item.active && styles.activeDateText]}>
            {item.date}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  day: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  activeDay: {
    backgroundColor: '#FBBF24',
  },
  dayText: {
    fontSize: 14,
    color: '#6B7280',
  },
  activeDayText: {
    color: '#fff',
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  activeDateText: {
    color: '#fff',
  },
});