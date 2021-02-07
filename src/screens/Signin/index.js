import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { AuthContext } from '../../context/auth';

import styles from './styles.js';
import imagem from '../../assets/wp.png';

export default function signin() {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const { logar } = useContext(AuthContext);
  const navigation = useNavigation();

  function handleSignim(){
    logar(email, senha);
  }

  return (
    <View style={styles.re}>

      <ImageBackground source={imagem} style={styles.walp} >
        <View style={styles.background}>
          <Image style={styles.image} source={require('../../assets/logoLanche.png')} />

          <TextInput style={styles.input}
          placeholder="Email"
          placeholderTextColor="#fff"
          autoCapitalize="none"
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

          <TouchableOpacity style={styles.button} onPress={handleSignim}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
            <Text style={styles.buttonCadastrar}>Cadastre-se agora!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

    </View>
  );
}