import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // ← Added
import { Button, Gap, Header, TextInput, Card } from '../../components';
import ChefHat from '../../assets/images/Hat_Image.svg';

const SignUp = () => {
  const navigation = useNavigation(); // 

  const handleSignInPress = () => {
    navigation.navigate('SignIn'); //
  };

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>

        <Header label="Create Account" backButton />

        <Gap height={12} />

        <Card style={styles.card} padding={26} rounded={22}>
          <View style={styles.logoArea}>
            <View style={styles.logoBox}>
              <Image source={ChefHat} style={styles.logo} />
            </View>
            <Text style={styles.cardTitle}>Create Account</Text>
            <Text style={styles.cardSubtitle}>Join Nyamm! and start cooking smarter</Text>
          </View>

          <Gap height={18} />

          <View style={styles.row}>
            <View style={styles.half}>
              <TextInput label="First Name" placeholder="John" />
            </View>
            <Gap width={12} />
            <View style={styles.half}>
              <TextInput label="Last Name" placeholder="Doe" />
            </View>
          </View>

          <Gap height={16} />
          <TextInput label="Email Address" placeholder="john.doe@example.com" />

          <Gap height={16} />
          <TextInput label="Password" placeholder="••••••••" secureTextEntry />

          <Gap height={16} />
          <TextInput label="Confirm Password" placeholder="••••••••" secureTextEntry />

          <Gap height={24} />
          <Button label="Create Account" />

          <Gap height={12} />
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <TouchableOpacity onPress={handleSignInPress}>
              <Text style={styles.link}>Sign In</Text>
            </TouchableOpacity>
          </Text>
        </Card>

        <Gap height={40} />
      </ScrollView>
    </View>
  );
};

export default SignUp;


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
    height: 700,
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

  row: { flexDirection: 'row' },
  half: { flex: 1 },

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
    textDecorationLine: 'underline', 
  },
});