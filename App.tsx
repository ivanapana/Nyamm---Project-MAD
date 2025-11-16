import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import KumpulanResep from './src/pages/KumpulanResep';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="KumpulanResep" component={KumpulanResep} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}