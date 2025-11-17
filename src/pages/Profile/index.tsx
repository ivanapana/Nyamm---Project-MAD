// src/pages/Profile/index.tsx

import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Card from '../../components/molecules/Card';
import Button from '../../components/atoms/Button';
import PopUP from '../../components/organisms/PopUP';
import BackButton from '../../components/atoms/BackButton';

const Profile = () => {
  const navigation: any = useNavigation();
  const [showPopUp, setShowPopUp] = useState(false);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setShowPopUp(false);
      navigation.replace('SignIn');
    } catch (error) {
      console.error('Gagal logout:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}>
        <View style={styles.headerRow}>
          <BackButton
            onPress={() =>
              navigation.navigate('Main' as never, {screen: 'home'} as never)
            }
          />
          <Text style={styles.title}>Profil Saya</Text>
        </View>
      </View>

      <Card style={styles.profileCard} center>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarIcon}>👤</Text>
          </View>
        </View>

        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.memberText}>Member sejak 18 Juli 2005</Text>

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
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  memberText: {
    fontSize: 13,
    color: '#777',
    marginBottom: 15,
  },
});
