// src/pages/Dashboard/index.tsx
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import Text from '../../components/atoms/Text';
import SearchBar from '../../components/molecules/SearchBar';
import MenuCard from '../../components/molecules/MenuCard';
import QuickActionCard from '../../components/molecules/QuickActionCard';
import BottomNavBar from '../../components/organisms/BottomNavbar';

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

const Dashboard = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    
    // Navigate ke PerencanaMenu ketika tab 'plan' diklik
    if (tab === 'plan') {
      navigation.navigate('PerencanaMenu');
    }
  };

  const handlePerencanaMenuPress = () => {
    navigation.navigate('PerencanaMenu');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FBBF24" />

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Image
            source={require('../../assets/images/logoo.png')}
            style={{
              position: 'absolute',
              left: 0,
              top: -25,
              width: 120,
              height: 44,
              resizeMode: 'contain',
            }}
          />
        </View>
        <SearchBar placeholder="Cari resep favorit..." />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.titleRow}>
              <Text type="icon" style={{fontSize: 20, color: '#FBBF24'}}>
                👨‍🍳
              </Text>
              <Text type="subtitle" style={styles.sectionTitle}>
                Menu Hari Ini
              </Text>
            </View>
            <Text type="caption" style={styles.date}>
              Minggu, 5 Okt
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
            onPress={handlePerencanaMenuPress}
          />
          <QuickActionCard
            title="Daftar Belanja"
            subtitle="12 item menunggu"
            icon="cart"
            variant="secondary"
          />
        </View>
      </ScrollView>

      <BottomNavBar activeTab={activeTab} onTabPress={handleTabPress} />
    </SafeAreaView>
  );
};

export default Dashboard;

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
  logo: {
    width: 120,
    height: 24,
    resizeMode: 'contain',
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
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