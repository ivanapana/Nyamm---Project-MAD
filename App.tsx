import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from './src/pages/GetStarted'; // Pastikan Anda punya file ini
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp'; // Pastikan Anda punya file ini
import Dashboard from './src/pages/Dashboard';

// (Opsional tapi disarankan) Definisikan tipe-tipe layar Anda
export type RootStackParamList = {
  GetStarted: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="SignIn">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;