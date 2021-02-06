import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { AuthContext } from '../../context/auth';

import styles from './styles.js';

export default function Home() {
  return (
    <View >
        <Text>Home</Text>
    </View>
  );
}