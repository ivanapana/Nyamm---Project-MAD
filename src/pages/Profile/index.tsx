// src/pages/Profile/index.tsx

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Card from '../../components/organisms/Card';
import Button from '../../components/atoms/Button';
import PopUP from '../../components/organisms/PopUP';
import BackButton from '../../components/atoms/BackButton';

// 1. Import Firebase
import {getAuth, signOut} from 'firebase/auth';
import {getDatabase, ref, onValue} from 'firebase/database';

const Profile = () => {
  const navigation = useNavigation();
  const [showPopUp, setShowPopUp] = useState(false);

  // 2. State untuk menampung data user
  const [profile, setProfile] = useState({
    fullName: 'Loading...', // Default saat loading
    email: '',
    photo: '', // Jika nanti ada fitur upload foto
  });

  // 3. Ambil data dari Firebase saat halaman dibuka
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      // Ambil data dari Realtime Database berdasarkan UID user yang sedang login
      const db = getDatabase();
      const userRef = ref(db, 'users/' + user.uid);

      onValue(userRef, snapshot => {
        const data = snapshot.val();
        if (data) {
          setProfile(data);
        }
      });
    }
  }, []);

  const handleLogout = async () => {
    try {
      // 4. Logout dari Firebase juga (PENTING)
      const auth = getAuth();
      await signOut(auth);

      // Hapus token lokal
      await AsyncStorage.removeItem('userToken');

      setShowPopUp(false);

      // Reset navigasi ke SignIn agar tidak bisa di-back
      navigation.reset({
        index: 0,
        routes: [{name: 'SignIn'}],
      });
    } catch (error) {
      console.error('Gagal logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={styles.headerRow}>
          <BackButton
            onPress={() => navigation.navigate('Main', {screen: 'home'})}
          />
          <Text style={styles.title}>Profil Saya</Text>
        </View>
      </View>

      <Card style={styles.profileCard} center>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            {/* Jika nanti ada foto, bisa diganti Image. Sekarang pakai inisial */}
            <Text style={styles.avatarIcon}>
              {profile.fullName
                ? profile.fullName.charAt(0).toUpperCase()
                : '👤'}
            </Text>
          </View>
        </View>

        {/* 5. Tampilkan Data Dinamis */}
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.memberText}>{profile.email}</Text>
        {/* Atau jika mau tanggal, cek penjelasan di bawah */}

        <Button
          color="#ff714a"
          colorText="#ffffffff"
          label="Logout"
          onPress={() => setShowPopUp(true)}
        />
      </Card>

      <PopUP
        visible={showPopUp}
        onClose={() => setShowPopUp(false)}
        onConfirm={handleLogout}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFBEF',
  },
  headerBackground: {
    backgroundColor: '#FFC727',
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 110,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#fff',
  },
  profileCard: {
    marginHorizontal: 12,
    marginTop: -80,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 3},
    elevation: 5,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarCircle: {
    backgroundColor: '#FACC15',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarIcon: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
  },
  memberText: {
    fontSize: 13,
    color: '#777',
    marginBottom: 15,
    marginTop: 4,
    textAlign: 'center',
  },
});
