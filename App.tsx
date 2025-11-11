// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from './src/pages/GetStarted';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import {Bahan} from './src/pages/bahan';
import {BottomTabNavigator} from './src/navigation/BottomTabNavigator';

import PerencanaMenu from './src/pages/perencanaMenu';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Bahan" component={Bahan} />
        <Stack.Screen name="PerencanaMenu" component={PerencanaMenu} />
        {/* Gabungkan 5 halaman utama ke dalam satu tab navigator */}
        <Stack.Screen name="BottomTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
