// App.js (atau App.tsx tapi tanpa type)
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from './src/pages/GetStarted';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {BottomTabNavigator} from './src/components/organisms/BottomNavbar/BottomTabNavigator';
import Profile from './src/pages/Profile';
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator(); // ← tanpa <RootStackParamList>

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
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
