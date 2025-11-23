// App.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import './src/config/Firebase';

import GetStarted from './src/pages/GetStarted';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Profile from './src/pages/Profile';
import Detail from './src/pages/Detail';
import KumpulanResep from './src/pages/KumpulanResep';

import {BottomTabNavigator} from './src/components/organisms/BottomNavbar/BottomTabNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={BottomTabNavigator} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="KumpulanResep" component={KumpulanResep} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
