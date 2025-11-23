import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';

// Import Firebase
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';

// Sesuaikan path import komponen Anda
// Pastikan file-file ini ada di folder yang sesuai di project Anda
import BackButton from '../../components/atoms/BackButtonSign';
import Icon from '../../components/atoms/Icon';
import ButtonYellow from '../../components/atoms/ButtonYellow';
import TextField from '../../components/molecules/TextInputSign';
import Card from '../../components/organisms/Card';

const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State Loading (PENTING: Agar user tidak klik 2x)
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBack = () => {
    if (navigation && navigation.navigate) {
      navigation.navigate('GetStarted');
    }
  };

  const handleSignUp = () => {
    // 1. Validasi Input
    if (password !== confirmPassword) {
      showMessage({
        message: 'Password dan Konfirmasi Password tidak sama',
        type: 'danger',
      });
      return;
    }

    if (password.length < 6) {
      showMessage({
        message: 'Password minimal 6 karakter',
        type: 'danger',
      });
      return;
    }

    // Mulai Loading
    setLoading(true);

    const auth = getAuth();
    const db = getDatabase();

    // 2. Buat Akun di Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;

        // Siapkan Data User
        const dataUser = {
          uid: user.uid,
          firstName: firstName,
          lastName: lastName,
          fullName: `${firstName} ${lastName}`,
          email: email,
          photo: '',
        };

        // 3. Simpan ke Realtime Database (Tunggu sampai sukses)
        set(ref(db, 'users/' + user.uid), dataUser)
          .then(() => {
            // --- SUKSES ---
            setLoading(false);

            showMessage({
              message: 'Registrasi Berhasil',
              description: 'Selamat datang di Nyamm!',
              type: 'success',
              icon: 'success',
            });
            navigation.navigate('SignIn');
          })
          .catch(error => {
            // --- ERROR DATABASE ---
            setLoading(false);
            console.log('Error Simpan DB:', error);
            showMessage({
              message: 'Gagal menyimpan data profil',
              description: error.message,
              type: 'danger',
            });
          });
      })
      .catch(error => {
        // --- ERROR AUTHENTICATION ---
        setLoading(false);
        const errorMessage = error.message;
        console.log('Error Auth:', errorMessage);

        // Pesan error yang lebih user friendly
        let pesan = 'Terjadi kesalahan registrasi';
        if (errorMessage.includes('email-already-in-use')) {
          pesan = 'Email sudah terdaftar';
        } else if (errorMessage.includes('invalid-email')) {
          pesan = 'Format email salah';
        }

        showMessage({
          message: pesan,
          type: 'danger',
        });
      });
  };

  const isDisabled =
    loading ||
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !confirmPassword;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <View style={styles.headerRow}>
          <BackButton onPress={handleBack} />
          <Text style={styles.headerBackText}>Kembali</Text>
        </View>

        <Card padding={32} rounded={32} style={styles.card}>
          <View style={styles.logoContainer}>
            <View style={styles.logoInner}>
              <Icon name="chef" size={32} color="#FFFFFF" />
            </View>
          </View>

          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Join nyamm! and start cooking smarter
          </Text>

          <View style={styles.form}>
            {/* --- Nama --- */}
            <View style={styles.nameRow}>
              <View style={styles.nameFieldWrapper}>
                <TextField
                  label="First Name"
                  placeholder="Marco"
                  value={firstName}
                  onChangeText={setFirstName}
                />
              </View>

              <View style={styles.nameFieldWrapper}>
                <TextField
                  label="Last Name"
                  placeholder="Pieter"
                  value={lastName}
                  onChangeText={setLastName}
                />
              </View>
            </View>

            {/* --- Email --- */}
            <TextField
              label="Email Address"
              placeholder="name@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            {/* --- Password --- */}
            <TextField
              label="Password"
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              leftIcon={<Icon name="lock" size={18} color="#9AA0A6" />}
              rightIcon={
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Text style={styles.eyeIcon}>{showPassword ? 'X' : 'O'}</Text>
                </TouchableOpacity>
              }
            />
            <TextField
              label="Confirm Password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
              leftIcon={<Icon name="lock" size={18} color="#9AA0A6" />}
              rightIcon={
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <Text style={styles.eyeIcon}>
                    {showConfirmPassword ? 'X' : 'O'}
                  </Text>
                </TouchableOpacity>
              }
            />

            {/* --- Tombol Submit --- */}
            <View style={styles.buttonWrapper}>
              <ButtonYellow
                label={loading ? 'Loading...' : 'Create Account'}
                onPress={handleSignUp}
                disabled={isDisabled}
              />
            </View>

            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text
                  style={styles.footerLink}
                  onPress={() => navigation.navigate('SignIn')}>
                  Sign In
                </Text>
              </Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF9EC',
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerBackText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#4B5563',
  },
  card: {
    width: '100%',
    borderRadius: 32,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 30,
    elevation: 8,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoInner: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#FDB022',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 8,
  },
  nameFieldWrapper: {
    flex: 1,
  },
  buttonWrapper: {
    marginTop: 24,
    marginBottom: 16,
  },
  footerTextContainer: {
    alignItems: 'center',
    marginTop: 4,
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  footerLink: {
    color: '#F59E0B',
    fontWeight: '700',
  },
  eyeIcon: {
    color: '#9AA0A6',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default SignUpScreen;
