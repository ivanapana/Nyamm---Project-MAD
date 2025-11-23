// src/pages/Dashboard/index.tsx

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getDatabase, ref, onValue} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import Text from '../../components/atoms/Text';
import MenuCard from '../../components/molecules/MenuCard';
import QuickActionCard from '../../components/molecules/QuickActionCard';
import Icon from '../../components/atoms/Icon';

export default function Dashboard() {
  const navigation = useNavigation();
  const today = new Date();
  const options = {weekday: 'long', day: 'numeric', month: 'short'};
  const formattedDate = today.toLocaleDateString('id-ID', options);
  const [menuHariIni, setMenuHariIni] = useState([]);
  const [shoppingCount, setShoppingCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) return;

    const db = getDatabase();
    const shoppingRef = ref(db, `shopping_list/${user.uid}`);
    const unsubscribeShop = onValue(shoppingRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const count = Object.values(data).filter(
          item => !item.isChecked,
        ).length;
        setShoppingCount(count);
      } else {
        setShoppingCount(0);
      }
    });
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayKey = `${year}-${month}-${day}`;

    const mealRef = ref(db, `users/${user.uid}/mealPlans/${todayKey}`);

    const unsubscribeMeal = onValue(mealRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const formattedMenu = Object.keys(data).map(key => ({
          time: key,
          meal: data[key].name,
          duration: data[key].duration,
          emoji: data[key].emoji || '🍳',
        }));

        const order = {Sarapan: 1, 'Makan Siang': 2, 'Makan Malam': 3};
        formattedMenu.sort(
          (a, b) => (order[a.time] || 4) - (order[b.time] || 4),
        );

        setMenuHariIni(formattedMenu);
      } else {
        setMenuHariIni([]);
      }
      setLoading(false);
    });

    return () => {
      unsubscribeShop();
      unsubscribeMeal();
    };
  }, [user]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FBBF24" />
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image
            source={require('../../assets/images/logoo.png')}
            style={{
              width: 130,
              height: 70,
              resizeMode: 'contain',
            }}
          />

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('Profile')}>
            <Icon name="user" size={48} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.titleRow}>
              <Text type="body" style={{fontSize: 20, color: '#FBBF24'}}>
                👨‍🍳
              </Text>
              <Text type="subtitle" style={styles.sectionTitle}>
                Menu Hari Ini
              </Text>
            </View>
            <Text type="caption" style={styles.date}>
              {formattedDate}
            </Text>
          </View>
          {loading ? (
            <ActivityIndicator size="small" color="#FBBF24" />
          ) : menuHariIni.length > 0 ? (
            menuHariIni.map((item, i) => (
              <MenuCard
                key={i}
                time={item.time}
                meal={item.meal}
                duration={item.duration}
                emoji={item.emoji}
              />
            ))
          ) : (
            <View style={styles.emptyState}>
              <Text type="caption" style={{color: '#9CA3AF'}}>
                Belum ada menu direncakan hari ini.
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Rencana')}>
                <Text style={styles.createLink}>+ Buat Rencana</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.actions}>
          <QuickActionCard
            title="Perencana Menu"
            subtitle="Atur menu mingguan"
            icon="calendar"
            variant="primary"
            onPress={() => navigation.navigate('Rencana')}
          />

          <QuickActionCard
            title="Daftar Belanja"
            subtitle={`${shoppingCount} item menunggu`}
            icon="cart"
            variant="secondary"
            onPress={() => navigation.navigate('Belanja')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    backgroundColor: '#FBBF24',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileButton: {padding: 8},
  content: {
    paddingHorizontal: 20,
    paddingBottom: 80,
    marginTop: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleRow: {flexDirection: 'row', alignItems: 'center'},
  sectionTitle: {marginLeft: 8, color: '#1F2937'},
  date: {color: '#6B7280'},
  actions: {flexDirection: 'row', gap: 16},

  emptyState: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
  },
  createLink: {
    color: '#FBBF24',
    fontWeight: 'bold',
    marginTop: 8,
  },
});
