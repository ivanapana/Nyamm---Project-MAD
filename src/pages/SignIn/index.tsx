import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';
import { Button, Gap, Header, TextInput, Card } from '../../components';
import ChefHat from '../../assets/images/Hat_Image.svg';

const SignIn = () => {
  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        <Header backButton />

        <Gap height={12} />

        <Card style={styles.card} padding={26} rounded={22}>
          <View style={styles.logoArea}>
            <View style={styles.logoBox}>
              <Image source={ChefHat} style={styles.logo} />
            </View>
            <Text style={styles.cardTitle}>Welcome Back!</Text>
            <Text style={styles.cardSubtitle}>Sign in to continue your cooking journey</Text>
          </View>

          <Gap height={18} />

          <TextInput label="Username" placeholder="marco" />

          <Gap height={16} />
          <TextInput label="Password" placeholder="••••••••" secureTextEntry />

          <Gap height={16} />
          <View style={styles.forgotPasswordRow}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </View>

          <Gap height={16} />
          <View style={styles.rememberMeRow}>
            <View style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
            </View>
            <Text style={styles.rememberMeText}>Remember me</Text>
          </View>

          <Gap height={24} />
          <Button label="Sign In" />

          <Gap height={12} />
          <View style={styles.orDivider}>
            <View style={styles.dividerLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.dividerLine} />
          </View>

          <Gap height={12} />
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text style={styles.link}>Sign Up</Text>
          </Text>
        </Card>

        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FEFDF8',
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 60,
  },

  card: {
    alignSelf: 'center',
    width: 360,
    height: 580, // Adjusted height for Sign In form
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },

  logoArea: {
    alignItems: 'center',
    marginBottom: 6,
  },
  logoBox: {
    backgroundColor: '#FACC15',
    width: 72,
    height: 72,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 36,
    height: 36,
    tintColor: '#fff',
  },

  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#1F2937',
    marginTop: 20,
  },

  cardSubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#6B7280',
    marginTop: 6,
  },

  forgotPasswordRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgotPasswordText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#FACC15',
  },

  rememberMeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginRight: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 4,
  },
  rememberMeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B7280',
  },

  orDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  orText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#9CA3AF',
    marginHorizontal: 12,
  },

  footerText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 18,
  },

  link: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FACC15',
  },
});