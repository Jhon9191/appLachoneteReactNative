import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import styles from './styles.js';
import imagem from '../../assets/walp.png';

export default function signin() {
  return (
    <View>

      <ImageBackground source={imagem} style={styles.walp} >
        <View style={styles.background}>
          <Image style={styles.image} source={require('../../assets/logoLanche.png')} />

          <TextInput style={styles.input} />

          <TextInput style={styles.input} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.buttonCadastrar}>Cadastre-se agora!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>
  );
}