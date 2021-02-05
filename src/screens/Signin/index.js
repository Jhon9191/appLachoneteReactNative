import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
 

import styles from './styles.js';
import imagem from '../../assets/wp.png';

export default function signin() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const navigation = useNavigation();
  return (
    <View style={styles.re}>

      <ImageBackground source={imagem} style={styles.walp} >
        <View style={styles.background}>
          <Image style={styles.image} source={require('../../assets/logoLanche.png')} />

          <TextInput style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(text) => setEmail(text)}
          />

          <TextInput style={styles.input}
          placeholder="Password"
          autoCorrect={false}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity >
            <Text style={styles.buttonCadastrar}>Cadastre-se agora!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>
  );
}