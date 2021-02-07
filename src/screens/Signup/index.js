import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import { AuthContext } from '../../context/auth';
import styles from './styles.js';
import imagem from '../../assets/wp.png';


export default function signin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaIgual, setSenhaIgual] = useState('');
  const { cadastrar } = useContext(AuthContext);

  function signup(){
    cadastrar(name, email, senha);
  }

  return (
    <View style={styles.re}>

      <ImageBackground source={imagem} style={styles.walp} >
        <View style={styles.background}>
          <Image style={styles.image} source={require('../../assets/logoLanche.png')} />

          <TextInput style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#fff"
            autoCorrect={false}
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <TextInput style={styles.input}
            placeholder="Email"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            tvParallaxShiftDistanceY={26}
            autoCorrect={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            autoCorrect={false}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />
         

          <TextInput style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            autoCorrect={false}
            value={senhaIgual}
            onChangeText={(text) => setSenhaIgual(text)}
          />

          <TouchableOpacity style={styles.button} onPress={signup}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>


        </View>
      </ImageBackground>

    </View>
  );
}