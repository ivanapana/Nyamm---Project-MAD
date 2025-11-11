import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Button, PopUP, Header} from '../../components';

const Profile = () => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleLogout = () => {
    setShowPopUp(false);
    console.log('Logout Berhasil');
  };

  return (
    <View style={styles.container}>
        {/* <Header backButton/> belum pake navigation */}
      <View style={styles.headerBackground}>
        <Text style={styles.title}>Profil Saya</Text>
        <Text style={styles.subtitle}>Informasi akun anda</Text>
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
          label="Logout"
          colorText="#ffffffff"
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
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  subtitle: {
    fontSize: 13,
    color: '#fff',
    marginTop: 4,
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
    fontSize: 17,
    fontWeight: '700',
    color: '#000',
  },
  memberText: {
    fontSize: 13,
    color: '#777',
    marginBottom: 15,
  },
});
