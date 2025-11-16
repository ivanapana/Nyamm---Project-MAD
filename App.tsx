import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Impor semua layar Anda
import GetStarted from './src/pages/GetStarted';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Dashboard from './src/pages/Dashboard';
import PerencanaMenu from './src/pages/PerencanaMenu';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{headerShown: false}} 
        initialRouteName="Get"
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="PerencanaMenu" component={PerencanaMenu} />
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;