// src/pages/SignIn/index.tsx
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
import ButtonYellow from '../../components/atoms/ButtonYellow';
import TextField from '../../components/molecules/TextInputSign';
import Card from '../../components/organisms/Card';

const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBack = () => {
    if (navigation && navigation.navigate) {
      navigation.navigate('GetStarted');
    }
  };

  const handleSignUp = () => {
    console.log('Create Account:', {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });

    if (navigation && navigation.navigate) {
      navigation.navigate('SignIn');
    }
  };

  const isDisabled =
    !firstName || !lastName || !email || !password || !confirmPassword;

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
            {/* --- Bagian Nama --- */}
            <View style={styles.nameRow}>
              <View style={styles.nameFieldWrapper}>
                <TextField
                  label="First Name"
                  placeholder="Marco"
                  value={firstName}
                  onChangeText={setFirstName}
                  keyboardType="default"
                />
              </View>

              <View style={styles.nameFieldWrapper}>
                <TextField
                  label="Last Name"
                  placeholder="Pieter"
                  value={lastName}
                  onChangeText={setLastName}
                  keyboardType="default"
                />
              </View>
            </View>

            {/* --- Kolom Email (Tanpa Ikon) --- */}
            <TextField
              label="Email Address"
              placeholder="name@example.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />

            {/* --- Bagian Password --- */}
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
                  <Text
                    style={{
                      color: '#9AA0A6',
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    {showPassword ? 'X' : 'O'}
                  </Text>
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
                  <Text
                    style={{
                      color: '#9AA0A6',
                      fontSize: 18,
                      fontWeight: '700',
                    }}>
                    {showConfirmPassword ? 'X' : 'O'}
                  </Text>
                </TouchableOpacity>
              }
            />

            <View style={styles.buttonWrapper}>
              <ButtonYellow
                label="Create Account"
                onPress={handleSignUp}
                disabled={isDisabled}
              />
            </View>

            <View style={styles.footerTextContainer}>
              <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text
                  style={styles.footerLink}
                  onPress={() =>
                    navigation && navigation.navigate
                      ? navigation.navigate('SignIn')
                      : null
                  }>
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
});

export default SignUpScreen;
