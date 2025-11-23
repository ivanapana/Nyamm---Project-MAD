//src/pages/SignIn/index.tsx
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
import BackButton from '../../components/atoms/BackButtonSign';
import Icon from '../../components/atoms/Icon';
import {ButtonYellow} from '../../components/atoms';
import {TextField} from '../../components/molecules';
import Card from '../../components/organisms/Card';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSignIn = () => {
    console.log('Sign In:', {username, password, rememberMe});
    if (navigation && navigation.navigate) {
      navigation.navigate('Main', {screen: 'home'});
    }
  };

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

          <Text style={styles.title}>Selamat datang!</Text>
          <Text style={styles.subtitle}>
            Masuk untuk melanjutkan perjalanan memasakmu
          </Text>

          <View style={styles.form}>
            <TextField
              label="Nama pengguna"
              placeholder="Nama pengguna"
              value={username}
              onChangeText={setUsername}
              keyboardType="default"
              leftIcon={<Icon name="mail" size={18} color="#9AA0A6" />}
            />

            <TextField
              label="Kata sandi"
              placeholder="Kata sandi"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              leftIcon={<Icon name="lock" size={18} color="#9AA0A6" />}
              rightIcon={
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setShowPassword(!showPassword)}>
                  <Icon
                    name={showPassword ? 'eyeOff' : 'eye'}
                    size={18}
                    color="#9AA0A6"
                  />
                </TouchableOpacity>
              }
            />

            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                activeOpacity={0.8}
                onPress={() => setRememberMe(!rememberMe)}>
                <View
                  style={[
                    styles.checkbox,
                    rememberMe && styles.checkboxChecked,
                  ]}>
                  {rememberMe && <Text style={styles.checkboxMark}>✓</Text>}
                </View>
                <Text style={styles.checkboxLabel}>Ingat saya</Text>
              </TouchableOpacity>

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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 24,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#FDB022',
    borderColor: '#FDB022',
  },
  checkboxMark: {
    color: '#111827',
    fontSize: 12,
    fontWeight: '700',
  },
  checkboxLabel: {
    fontSize: 13,
    color: '#4B5563',
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
