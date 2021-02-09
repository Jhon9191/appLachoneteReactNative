import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';

import styles from './styles.js';

export default function Home() {
  const { deslogarUsuario } = useContext(AuthContext);
  const navigation = useNavigation(); 

  return (
    <View style={styles.background}>

      {/* <Button title="Deslogar" onPress={()=>deslogarUsuario()}/> */}
    </View>
  );
}