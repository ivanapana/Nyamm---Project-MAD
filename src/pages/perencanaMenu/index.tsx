import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const PerencanaMenu = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(7);
  
  // Data menu untuk setiap tanggal
  const [menuData, setMenuData] = useState({
    6: { sarapan: null, makanSiang: null, makanMalam: null },
    7: { 
      sarapan: { name: 'Nasi Goreng Spesial', time: '30 min', icon: '🍳', color: '#E9D5FF' },
      makanSiang: null,
      makanMalam: { name: 'Ayam Geprek + Lalapan', time: '30 min', icon: '🍗', color: '#FECACA' }
    },
    8: { sarapan: null, makanSiang: null, makanMalam: null },
    9: { sarapan: null, makanSiang: null, makanMalam: null },
    10: { sarapan: null, makanSiang: null, makanMalam: null },
    11: { sarapan: null, makanSiang: null, makanMalam: null },
    12: { sarapan: null, makanSiang: null, makanMalam: null },
  });

  const days = [
    { label: 'Sen', date: 6 },
    { label: 'Sel', date: 7 },
    { label: 'Rab', date: 8 },
    { label: 'Kam', date: 9 },
    { label: 'Jum', date: 10 },
    { label: 'Sab', date: 11 },
    { label: 'Min', date: 12 },
  ];

  const stats = [
    { value: 12, label: 'Hari Tercatat', color: '#F97316' },
    { value: 9, label: 'Mulai Lengkap', color: '#10B981' },
    { value: 3, label: 'Sisa Kosong', color: '#3B82F6' },
  ];

  const mealSlots = [
    { id: 'sarapan', name: 'Sarapan', time: '07:00', icon: '☕', color: '#E9D5FF' },
    { id: 'makanSiang', name: 'Makan Siang', time: '12:00', icon: '🍽️', color: '#FED7AA' },
    { id: 'makanMalam', name: 'Makan Malam', time: '18:00', icon: '🌙', color: '#DBEAFE' },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddMenu = (slotId) => {
    // Fungsi untuk menambah menu - akan dihubungkan dengan navigasi ke halaman tambah menu
    console.log('Tambah menu untuk:', slotId, 'pada tanggal:', selectedDate);
    // navigation.navigate('AddMenu', { date: selectedDate, slot: slotId });
  };

  const handleEditMenu = (slotId) => {
    console.log('Edit menu:', slotId, 'pada tanggal:', selectedDate);
    // navigation.navigate('EditMenu', { date: selectedDate, slot: slotId });
  };

  const handleRemoveMenu = (slotId) => {
    setMenuData(prev => ({
      ...prev,
      [selectedDate]: {
        ...prev[selectedDate],
        [slotId]: null
      }
    }));
  };

  const currentDayMenu = menuData[selectedDate];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.headerLeft}>
            <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Icon name="chevron-left" size={28} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Perencana Menu</Text>
          </View>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>
        </View>

        {/* Calendar Days */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.calendarContainer}
        >
          {days.map((day) => (
            <TouchableOpacity
              key={day.date}
              onPress={() => handleDateChange(day.date)}
              style={[
                styles.dayButton,
                selectedDate === day.date && styles.dayButtonActive
              ]}
            >
              <Text style={[
                styles.dayLabel,
                selectedDate === day.date && styles.dayLabelActive
              ]}>
                {day.label}
              </Text>
              <Text style={[
                styles.dayDate,
                selectedDate === day.date && styles.dayDateActive
              ]}>
                {day.date}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Scroll Indicator */}
        <View style={styles.scrollIndicator}>
          <View style={styles.scrollIndicatorLine} />
        </View>
      </View>

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Meals List - 3 Slot Tetap */}
        <View style={styles.mealsList}>
          {mealSlots.map((slot) => {
            const menuItem = currentDayMenu[slot.id];
            
            return (
              <View key={slot.id} style={styles.mealCard}>
                <View style={[styles.mealIcon, { backgroundColor: menuItem ? menuItem.color : slot.color }]}>
                  <Text style={styles.mealEmoji}>{menuItem ? menuItem.icon : slot.icon}</Text>
                </View>
                
                <View style={styles.mealInfo}>
                  <Text style={styles.mealName}>
                    {menuItem ? menuItem.name : slot.name}
                  </Text>
                  <View style={styles.mealTimeContainer}>
                    <Icon name="clock" size={12} color="#9CA3AF" />
                    <Text style={styles.mealTime}>
                      {menuItem ? menuItem.time : slot.time}
                    </Text>
                  </View>
                </View>

                <View style={styles.mealActions}>
                  {menuItem ? (
                    <>
                      <TouchableOpacity 
                        style={styles.editButton}
                        onPress={() => handleEditMenu(slot.id)}
                      >
                        <Icon name="edit-2" size={12} color="#F59E0B" />
                        <Text style={styles.editButtonText}>Edit</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => handleRemoveMenu(slot.id)}>
                        <Icon name="x" size={20} color="#9CA3AF" />
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity onPress={() => handleAddMenu(slot.id)}>
                      <Icon name="x" size={20} color="#E5E7EB" />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            );
          })}
        </View>

        {/* Add Menu Button - hanya muncul jika ada slot kosong */}
        {(!currentDayMenu.sarapan || !currentDayMenu.makanSiang || !currentDayMenu.makanMalam) && (
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => {
              // Cari slot kosong pertama
              if (!currentDayMenu.sarapan) handleAddMenu('sarapan');
              else if (!currentDayMenu.makanSiang) handleAddMenu('makanSiang');
              else if (!currentDayMenu.makanMalam) handleAddMenu('makanMalam');
            }}
          >
            <Text style={styles.addButtonText}>
              Tambah Menu {!currentDayMenu.sarapan ? 'Sarapan' : !currentDayMenu.makanSiang ? 'Makan Siang' : 'Makan Malam'}
            </Text>
          </TouchableOpacity>
        )}

        {/* Stats */}
        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statItem}>
              <Text style={[styles.statValue, { color: stat.color }]}>
                {stat.value}
              </Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3C7',
  },
  header: {
    backgroundColor: '#FBBF24',
    paddingTop: 50,
    paddingHorizontal: 24,
    paddingBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  saveButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  calendarContainer: {
    gap: 8,
    paddingVertical: 4,
  },
  dayButton: {
    width: 56,
    height: 64,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayButtonActive: {
    backgroundColor: '#FFFFFF',
    transform: [{ scale: 1.05 }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  dayLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  dayLabelActive: {
    color: '#F59E0B',
  },
  dayDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  dayDateActive: {
    color: '#F59E0B',
  },
  scrollIndicator: {
    alignItems: 'center',
    marginTop: 12,
  },
  scrollIndicatorLine: {
    width: 48,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 2,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  mealsList: {
    gap: 12,
    marginBottom: 16,
  },
  mealCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  mealIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  mealEmoji: {
    fontSize: 28,
  },
  mealInfo: {
    flex: 1,
    marginRight: 12,
  },
  mealName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  mealTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mealTime: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  mealActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginLeft: 'auto',
  },
  editButton: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginRight: 4,
  },
  editButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#F59E0B',
  },
  addButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  addButtonText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 11,
    color: '#6B7280',
    marginTop: 4,
  },
  bottomSpacer: {
    height: 40,
  },
});

export default PerencanaMenu;