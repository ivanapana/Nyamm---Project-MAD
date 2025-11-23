
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Card from '../../components/organisms/Card';
import Button from '../../components/atoms/Button';
import PopUP from '../../components/organisms/PopUP';
import BackButton from '../../components/atoms/BackButton';

import {getAuth, signOut} from 'firebase/auth';
import {getDatabase, ref, onValue} from 'firebase/database';

const Profile = () => {
  const navigation = useNavigation();
  const [showPopUp, setShowPopUp] = useState(false);

  const [profile, setProfile] = useState({
    fullName: 'Loading...',
    email: '',
    photo: '',
  });

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
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
      const auth = getAuth();
      await signOut(auth);

      await AsyncStorage.removeItem('userToken');

      setShowPopUp(false);

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
            onPress={() => navigation.navigate('MainApp', {screen: 'home'})}
          />
          <Text style={styles.title}>Profil Saya</Text>
        </View>
      </View>

      <Card style={styles.profileCard} center>
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarIcon}>
              {profile.fullName
                ? profile.fullName.charAt(0).toUpperCase()
                : '👤'}
            </Text>
          </View>
        </View>

        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.memberText}>{profile.email}</Text>

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
