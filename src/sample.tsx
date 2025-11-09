import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Button, Gap, Header, TextInput, Card } from '../../components';
import ChefHat from '../../assets/images/Hat_Image.svg';

const { width } = Dimensions.get('window');

const SignUp = ({ navigation }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name, value) => {
    setFormData({...formData, [name]: value});
  };

  return (
    <View style={styles.screen}>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Header label="Create Account" backButton onPress={() => navigation.goBack()} />

        <Gap height={12} />

        <Card style={styles.card} padding={26} rounded={22}>
          <View style={styles.logoArea}>
            <View style={styles.logoBox}>
              <Image source={ChefHat} style={styles.logo} />
            </View>
            <Text style={styles.cardTitle}>Create Account</Text>
            <Text style={styles.cardSubtitle}>Join nyamm! and start cooking smarter</Text>
          </View>

          <Gap height={18} />

          <View>
            <View style={styles.row}>
              <View style={styles.half}>
                <TextInput
                  label="First Name"
                  placeholder="John"
                  value={formData.firstName}
                  onChangeText={text => handleChange('firstName', text)}
                />
              </View>
              <Gap width={12} />
              <View style={styles.half}>
                <TextInput
                  label="Last Name"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChangeText={text => handleChange('lastName', text)}
                />
              </View>
            </View>

            <Gap height={16} />
            <TextInput
              label="Email Address"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChangeText={text => handleChange('email', text)}
            />

            <Gap height={16} />
            <TextInput
              label="Password"
              placeholder="••••••••"
              secureTextEntry
              value={formData.password}
              onChangeText={text => handleChange('password', text)}
            />

            <Gap height={16} />
            <TextInput
              label="Confirm Password"
              placeholder="••••••••"
              secureTextEntry
              value={formData.confirmPassword}
              onChangeText={text => handleChange('confirmPassword', text)}
            />

            <Gap height={24} />
            <Button label="Create Account" onPress={() => navigation.navigate('SignIn')} />

            <Gap height={12} />
            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text style={styles.link} onPress={() => navigation.navigate('SignIn')}>
                Sign In
              </Text>
            </Text>
          </View>
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
  },
});
