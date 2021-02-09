import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles.js';

export default function Home() {
  const { deslogarUsuario } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("Info")}>
            <Icon
              color="#E98000"
              name="bars"
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.header}>

        <View style={styles.conteudo}></View>

      </View>
      {/* <Button title="Deslogar" onPress={()=>deslogarUsuario()}/> */}
    </View>
  );
}