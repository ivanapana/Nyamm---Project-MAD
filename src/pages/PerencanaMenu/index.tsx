import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Text from '../../components/atoms/Text';
import Card from '../../components/organisms/Card';
import BottomNavBar from '../../components/organisms/BottomNavbar';
import MiniButtonYellow from '../../components/atoms/MiniBottonYellow';

const PerencanaMenu = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('plan');
  const [selectedDay, setSelectedDay] = useState(6);

  const days = [
    {number: 6, label: 'Sen'},
    {number: 7, label: 'Sel'},
    {number: 8, label: 'Rab'},
    {number: 9, label: 'Kam'},
    {number: 10, label: 'Jum'},
    {number: 11, label: 'Sab'},
    {number: 12, label: 'Min'},
  ];

  const meals = [
    {
      id: 1,
      category: 'Sarapan',
      time: '07:00',
      emoji: '🌅',
      items: [
        {
          name: 'Nasi Goreng Spesial',
          duration: '20 min',
          emoji: '🍳',
        },
      ],
    },
    {
      id: 2,
      category: 'Makan Siang',
      time: '12:00',
      emoji: '🥘',
      items: [
        {
          name: 'Ayam Geprek + Lalapan',
          duration: '30 min',
          emoji: '🍗',
        },
      ],
    },
    {
      id: 3,
      category: 'Makan Malam',
      time: '18:00',
      emoji: '🌙',
      items: [],
    },
  ];

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Perencana Menu</Text>
          <Text style={styles.headerSubtitle}>Oktober 2025</Text>
        </View>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {/* Day Selector */}
        <View style={styles.daySelectorContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dayScrollContent}>
            {days.map((day) => (
              <TouchableOpacity
                key={day.number}
                onPress={() => setSelectedDay(day.number)}
                style={[
                  styles.dayButton,
                  selectedDay === day.number && styles.dayButtonActive,
                ]}>
                <Text
                  style={[
                    styles.dayLabel,
                    selectedDay === day.number && styles.dayLabelActive,
                  ]}>
                  {day.label}
                </Text>
                <Text
                  style={[
                    styles.dayNumber,
                    selectedDay === day.number && styles.dayNumberActive,
                  ]}>
                  {day.number}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View style={styles.scrollIndicator}>
            <View style={styles.scrollIndicatorBar} />
          </View>
        </View>

        {/* Meals Container */}
        <View style={styles.mealsContainer}>
          <View style={styles.mealHeader}>
            <Text style={styles.sectionTitle}>Senin</Text>
            <Text style={styles.dateText}>6 Oktober</Text>
          </View>

          {meals.map((meal) => (
            <View key={meal.id} style={styles.mealSection}>
              {/* Meal Category Header */}
              <View style={styles.mealCategoryHeader}>
                <Text style={styles.mealEmoji}>{meal.emoji}</Text>
                <View style={styles.mealCategoryInfo}>
                  <Text style={styles.mealCategory}>{meal.category}</Text>
                  <Text style={styles.mealTime}>{meal.time}</Text>
                </View>
                <TouchableOpacity>
                  <Text style={styles.closeIcon}>✕</Text>
                </TouchableOpacity>
              </View>

              {/* Meal Items */}
              {meal.items.length > 0 ? (
                meal.items.map((item, index) => (
                  <Card key={index} style={styles.mealCard} padding={16}>
                    <View style={styles.mealCardContent}>
                      <View style={styles.mealIconContainer}>
                        <Text style={styles.mealItemEmoji}>{item.emoji}</Text>
                      </View>
                      <View style={styles.mealInfo}>
                        <Text style={styles.mealName}>{item.name}</Text>
                        <View style={styles.durationContainer}>
                          <Text style={styles.clockIcon}>🕐</Text>
                          <Text style={styles.duration}>{item.duration}</Text>
                        </View>
                      </View>
                      <MiniButtonYellow
                        onPress={() => console.log('Edit', item.name)}
                      />
                    </View>
                  </Card>
                ))
              ) : (
                <Card style={styles.emptyCard} padding={40} center>
                  <Text style={styles.emptyText}>
                    Tambah Menu {meal.category}
                  </Text>
                </Card>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
};

export default PerencanaMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    backgroundColor: '#FBBF24',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  headerTextContainer: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
    marginTop: 2,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  daySelectorContainer: {
    backgroundColor: '#FBBF24',
    paddingVertical: 16,
  },
  dayScrollContent: {
    paddingHorizontal: 12,
  },
  dayButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 6,
    minWidth: 60,
    alignItems: 'center',
  },
  dayButtonActive: {
    backgroundColor: '#FFFFFF',
  },
  dayLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
    marginBottom: 4,
  },
  dayLabelActive: {
    color: '#92400E',
  },
  dayNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  dayNumberActive: {
    color: '#92400E',
  },
  scrollIndicator: {
    alignItems: 'center',
    marginTop: 12,
  },
  scrollIndicatorBar: {
    width: 40,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 2,
  },
  mealsContainer: {
    padding: 20,
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  dateText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  mealSection: {
    marginBottom: 24,
  },
  mealCategoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
  },
  mealEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  mealCategoryInfo: {
    flex: 1,
  },
  mealCategory: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  mealTime: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  closeIcon: {
    fontSize: 20,
    color: '#9CA3AF',
  },
  mealCard: {
    marginTop: 0,
  },
  mealCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mealIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  mealItemEmoji: {
    fontSize: 24,
  },
  mealInfo: {
    flex: 1,
  },
  mealName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    fontSize: 14,
    marginRight: 4,
  },
  duration: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  emptyCard: {
    marginTop: 0,
  },
  emptyText: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
  },
});