import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AuthProvider from './src/context/auth.js';

import firebase from './src/services/firebase.js'
import Routes from './src/routes/index';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content" hidden={true}/>
        <Routes />
      </AuthProvider>
    </NavigationContainer>

  );
}


