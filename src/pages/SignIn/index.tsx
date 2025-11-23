import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigationState } from '@react-navigation/native'; // 1. Tambah Import ini
import BackButton from '../../components/atoms/BackButtonSign';
import Icon from '../../components/atoms/Icon';
import {ButtonYellow} from '../../components/atoms';
import {TextField} from '../../components/molecules';
import Card from '../../components/organisms/Card';

import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // 2. Ambil index screen saat ini dari state navigasi
  // Jika index === 0, berarti ini adalah halaman paling awal (root), tidak ada history sebelumnya.
  const navIndex = useNavigationState(state => state.index);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignIn = () => {
    if (!email || !password) {
      showMessage({
        message: 'Email dan Password tidak boleh kosong',
        type: 'danger',
      });
      return;
    }

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        
        showMessage({
          message: 'Berhasil Masuk',
          description: 'Selamat datang kembali!',
          type: 'success',
        });

        if (navigation && navigation.navigate) {
          navigation.reset({
            index: 0,
            routes: [{name: 'Main', params: {screen: 'home', uid: user.uid}}],
          });
        }
      })
      .catch(error => {
        const errorCode = error.code;
        let errorMessage = error.message;

        if (errorCode === 'auth/invalid-email') {
          errorMessage = 'Format email salah.';
        } else if (errorCode === 'auth/user-not-found') {
          errorMessage = 'Pengguna tidak ditemukan.';
        } else if (errorCode === 'auth/wrong-password') {
          errorMessage = 'Password salah.';
        }

        showMessage({
          message: 'Gagal Masuk',
          description: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        
        {/* 3. Gunakan navIndex > 0 sebagai kondisi. 
            Ini reaktif (langsung update) saat navigasi di-reset. */}
        {navIndex > 0 ? (
          <View style={styles.headerRow}>
            <BackButton onPress={handleBack} />
            <Text style={styles.headerBackText}>Kembali</Text>
          </View>
        ) : (
          // Spacer agar layout tidak loncat ke atas
          <View style={{ marginBottom: 16 }} />
        )}

        <Card padding={32} rounded={32} style={styles.card}>
          <View style={styles.logoContainer}>
            <View style={styles.logoInner}>
              <Icon name="chef" size={32} color="#FFFFFF" />
            </View>
          </View>

          <Text style={styles.title}>Selamat datang!</Text>
          <Text style={styles.subtitle}>
            Masuk untuk melanjutkan perjalanan memasakmu
          </Text>

          <View style={styles.form}>
            <TextField
              label="Email"
              placeholder="Masukkan alamat email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              leftIcon={<Icon name="mail" size={18} color="#9AA0A6" />}
            />

            <TextField
              label="Kata sandi"
              placeholder="Masukkan kata sandi"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              leftIcon={<Icon name="lock" size={18} color="#9AA0A6" />}
              rightIcon={
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Image
                    source={{
                      uri: showPassword
                        ? 'https://img.icons8.com/material-outlined/24/9AA0A6/invisible.png'
                        : 'https://img.icons8.com/material-outlined/24/9AA0A6/visible.png',
                    }}
                    style={{width: 24, height: 24}}
                  />
                </TouchableOpacity>
              }
            />

            {/* Opsi Ingat Saya Dihapus */}
            <View style={styles.optionsRow}>
              <TouchableOpacity activeOpacity={0.7}>
                <Text style={styles.forgotPassword}>Lupa kata sandi?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonWrapper}>
              <ButtonYellow label="Masuk" onPress={handleSignIn} />
            </View>

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.dividerText}>ATAU</Text>
              <View style={styles.divider} />
            </View>

            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>
                Belum punya akun?{' '}
                <Text
                  style={styles.footerLink}
                  onPress={() =>
                    navigation && navigation.navigate
                      ? navigation.navigate('SignUp')
                      : null
                  }>
                  Daftar
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
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Diubah ke flex-end agar Lupa Password ke kanan
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  forgotPassword: {
    fontSize: 13,
    color: '#F59E0B',
    fontWeight: '600',
  },
  buttonWrapper: {
    marginBottom: 24,
    marginTop: 8,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  footerTextContainer: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#6B7280',
  },
  footerLink: {
    color: '#F59E0B',
    fontWeight: '700',
  },
});

export default SignInScreen;