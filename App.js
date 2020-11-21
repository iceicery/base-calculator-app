import React, { useState } from 'react';
import { baseContext } from './contexts/baseContext';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import Calculator from './components/Calculator';

const Stack = createStackNavigator();

export default function App() {
  const [base, setBase] = useState('Binary');

  function changeBase(base) {
    setBase(base);
  }
  return (
    <baseContext.Provider value={{ changeBase, base }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Calculator" component={Calculator} />
        </Stack.Navigator>
      </NavigationContainer>
    </baseContext.Provider>
  )
}

