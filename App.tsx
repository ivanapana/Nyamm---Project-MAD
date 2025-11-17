// File: App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from './src/pages/GetStarted';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Dashboard from './src/pages/Dashboard';
import PerencanaMenu from './src/pages/PerencanaMenu';
import Bahan from './src/pages/Bahan';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Bahan"
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PerencanaMenu" component={PerencanaMenu} />
        <Stack.Screen name="Bahan" component={Bahan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
