//src/pages/Dashboard/index.tsx
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Text from '../../components/atoms/Text';
import SearchBar from '../../components/molecules/SearchBar';
import MenuCard from '../../components/molecules/MenuCard';
import QuickActionCard from '../../components/molecules/QuickActionCard';
import Icon from '../../components/atoms/Icon';
import {useNavigation} from '@react-navigation/native';

const DASHBOARD_MENU = [
  {
    time: 'Sarapan',
    emoji: '🌅',
    meal: 'Nasi Goreng Spesial',
    duration: '20 min',
  },
  {
    time: 'Makan Siang',
    emoji: '☀️',
    meal: 'Ayam Geprek + Lalapan',
    duration: '30 min',
  },
  {time: 'Makan Malam', emoji: '🌙', meal: 'Sop Iga Sapi', duration: '45 min'},
];

export default function Dashboard() {
  const today = new Date();
  const options = {weekday: 'long', day: 'numeric', month: 'short'};
  const formattedDate = today.toLocaleDateString('id-ID', options);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FBBF24" />

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image
            source={require('../../assets/images/logoo.png')}
            style={{
              width: 120,
              height: 44,
              resizeMode: 'contain',
            }}
          />

          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('Profile')}>
            <Icon name="user" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <SearchBar placeholder="Cari resep favorit..." />
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
          {DASHBOARD_MENU.map((item, i) => (
            <MenuCard key={i} {...item} />
          ))}
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
            subtitle="12 item menunggu"
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
    paddingBottom: 32,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    zIndex: 10,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileButton: {padding: 8},
  content: {paddingHorizontal: 20, paddingBottom: 80},
  section: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    elevation: 2,
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
});
