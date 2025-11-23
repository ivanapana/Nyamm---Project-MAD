import React, {useState, useEffect} from 'react';
import {
  View, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, ActivityIndicator, Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, onValue, remove} from 'firebase/database';
import {getAuth} from 'firebase/auth';

import Text from '../../components/atoms/Text';
import Card from '../../components/organisms/Card';
import MiniButtonYellow from '../../components/atoms/MiniBottonYellow';

const Rencana = () => {
  const navigation = useNavigation();
  const [selectedDay, setSelectedDay] = useState(6);
  const [dailyMeals, setDailyMeals] = useState({}); 
  const [loading, setLoading] = useState(false);

  const days = [
    {number: 6, label: 'Sen'}, {number: 7, label: 'Sel'}, {number: 8, label: 'Rab'},
    {number: 9, label: 'Kam'}, {number: 10, label: 'Jum'}, {number: 11, label: 'Sab'},
    {number: 12, label: 'Min'},
  ];

  const categories = [
    {id: 'Sarapan', label: 'Sarapan', time: '07:00', emoji: '🌅'},
    {id: 'Makan Siang', label: 'Makan Siang', time: '12:00', emoji: '🥘'},
    {id: 'Makan Malam', label: 'Makan Malam', time: '18:00', emoji: '🌙'},
  ];

  useEffect(() => {
    setLoading(true);
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const db = getDatabase();
      const mealsRef = ref(db, `users/${user.uid}/mealPlans/${selectedDay}`);

      const unsubscribe = onValue(mealsRef, snapshot => {
        const data = snapshot.val();
        setDailyMeals(data || {});
        setLoading(false);
      });

      return () => unsubscribe();
    } else {
       setLoading(false);
    }
  }, [selectedDay]);

  const goToSelection = (categoryLabel) => {
    navigation.navigate('KumpulanResep', {
      targetDate: selectedDay,
      targetCategory: categoryLabel,
    });
  };

  const handleRemoveMeal = (categoryLabel) => {
    Alert.alert(
      'Hapus Menu',
      'Yakin ingin menghapus menu ini?',
      [
        {text: 'Batal', style: 'cancel'},
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: async () => {
            const auth = getAuth();
            const user = auth.currentUser;
            if (user) {
              try {
                const db = getDatabase();
                const itemRef = ref(db, `users/${user.uid}/mealPlans/${selectedDay}/${categoryLabel}`);
                await remove(itemRef);
              } catch (err) {
                console.log(err);
                Alert.alert("Error", "Gagal menghapus menu");
              }
            }
          }
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Perencana Menu</Text>
          <Text style={styles.headerSubtitle}>Oktober 2025</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.daySelectorContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.dayScrollContent}>
            {days.map(day => (
              <TouchableOpacity
                key={day.number}
                onPress={() => setSelectedDay(day.number)}
                style={[styles.dayButton, selectedDay === day.number && styles.dayButtonActive]}>
                
                <Text style={[styles.dayLabel, selectedDay === day.number && styles.dayLabelActive]}>
                    {day.label}
                </Text>

              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.mealsContainer}>
          <View style={styles.mealHeader}>
            <Text style={styles.sectionTitle}>
                {days.find(d => d.number === selectedDay)?.label} - {selectedDay} Oktober
            </Text>
          </View>

          {loading ? (
             <ActivityIndicator size="large" color="#FBBF24" style={{marginTop: 50}} />
          ) : (
            categories.map((cat) => {
              const currentMeal = dailyMeals ? dailyMeals[cat.id] : null;
              return (
                <View key={cat.id} style={styles.mealSection}>
                  
                  <View style={styles.mealCategoryHeader}>
                    <Text style={styles.mealEmoji}>{cat.emoji}</Text>
                    <View style={styles.mealCategoryInfo}>
                      <Text style={styles.mealCategory}>{cat.label}</Text>
                      <Text style={styles.mealTime}>{cat.time}</Text>
                    </View>

                    {currentMeal && (
                      <TouchableOpacity 
                        style={styles.deleteButtonHeader} 
                        onPress={() => handleRemoveMeal(cat.id)}
                        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
                      >
                         <Text style={styles.deleteButtonText}>✕</Text>
                      </TouchableOpacity>
                    )}
                  </View>

                  {currentMeal ? (
                    <Card style={styles.mealCard} padding={16}>
                      <View style={styles.mealCardContent}>
                        <View style={styles.mealIconContainer}>
                          <Text style={styles.mealItemEmoji}>{currentMeal.emoji || '🍲'}</Text>
                        </View>
                        <View style={styles.mealInfo}>
                          <Text style={styles.mealName}>{currentMeal.name}</Text>
                          <View style={styles.durationContainer}>
                            <Text style={styles.clockIcon}>🕐</Text>
                            <Text style={styles.duration}>{currentMeal.duration}</Text>
                          </View>
                        </View>
                        <MiniButtonYellow onPress={() => goToSelection(cat.id)} text="Ganti" />
                      </View>
                    </Card>
                  ) : (
                    <TouchableOpacity onPress={() => goToSelection(cat.id)}>
                      <Card style={styles.emptyCard} padding={40} center>
                        <Text style={styles.emptyText}>+ Tambah Menu {cat.label}</Text>
                      </Card>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rencana;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  header: { 
    backgroundColor: '#FBBF24', 
    paddingHorizontal: 20, 
    paddingVertical: 16, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  headerTextContainer: { alignItems: 'center' },
  headerTitle: { fontSize: 18, fontWeight: '600', color: '#FFFFFF' },
  headerSubtitle: { fontSize: 12, color: '#FFFFFF', opacity: 0.8, marginTop: 2 },
  
  content: { flex: 1 },
  daySelectorContainer: { backgroundColor: '#FBBF24', paddingVertical: 16 },
  dayScrollContent: { paddingHorizontal: 12 },
  
  dayButton: { 
      backgroundColor: 'rgba(255, 255, 255, 0.3)', 
      paddingHorizontal: 16, 
      paddingVertical: 12, 
      borderRadius: 12, 
      marginHorizontal: 6, 
      minWidth: 60, 
      alignItems: 'center' 
  },
  dayButtonActive: { backgroundColor: '#FFFFFF' },
  
  dayLabel: { fontSize: 14, color: '#FFFFFF', fontWeight: '600' },
  dayLabelActive: { color: '#92400E' },

  mealsContainer: { padding: 20, paddingBottom: 100 },
  mealHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#1F2937' },
  mealSection: { marginBottom: 24 },
  mealCategoryHeader: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FEF3C7', padding: 12, borderRadius: 12, marginBottom: 12 },
  mealEmoji: { fontSize: 24, marginRight: 12 },
  mealCategoryInfo: { flex: 1 },
  mealCategory: { fontSize: 14, fontWeight: '600', color: '#1F2937' },
  mealTime: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  mealCard: { marginTop: 0 },
  mealCardContent: { flexDirection: 'row', alignItems: 'center' },
  mealIconContainer: { width: 48, height: 48, borderRadius: 12, backgroundColor: '#F3F4F6', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  mealItemEmoji: { fontSize: 24 },
  mealInfo: { flex: 1 },
  mealName: { fontSize: 14, fontWeight: '600', color: '#1F2937', marginBottom: 4 },
  durationContainer: { flexDirection: 'row', alignItems: 'center' },
  clockIcon: { fontSize: 14, marginRight: 4 },
  duration: { fontSize: 12, color: '#9CA3AF' },
  emptyCard: { marginTop: 0, borderStyle: 'dashed', borderWidth: 1.5, borderColor: '#D1D5DB', backgroundColor: 'transparent' },
  emptyText: { fontSize: 14, color: '#6B7280', textAlign: 'center', fontWeight: '500' },
  
  deleteButtonHeader: {
    backgroundColor: '#FEE2E2', 
    width: 28,
    height: 28,
    borderRadius: 14, 
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12, 
  },
  deleteButtonText: {
    color: '#EF4444', 
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: -2,
  },
});