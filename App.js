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
  const [number, setNumber] = useState('');
  const [numberStr, setNumberStr] = useState('');
  const [equStr, setEquStr] = useState('');
  const [n, setN] = useState(0);
  const [result, setResult] = useState(0);

  function changeBase(base) {
    setBase(base);
  }

  function changeNumber(number) {
    setNumber(number);
  }

  function changeNumberStr(str) {
    setNumberStr(str);
  }

  function changeEquStr(str) {
    setEquStr(str);
  }

  function changeN(n) {
    setN(n);
  }

  function changeResult(n) {
    setResult(n);
  }

  return (
    <baseContext.Provider value={{ changeBase, changeNumber, changeNumberStr, changeEquStr, changeN, changeResult, base, number, numberStr, equStr, n, result }}>
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

