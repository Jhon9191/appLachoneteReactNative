import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
import LinearGradient from 'react-native-linear-gradient'
import styles from './styles.js';

export default function Profile() {

    const { user, deslogarUsuario } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#FEBA67', '#f87b0f', '#d63b5d']} style={styles.background}>
            <View style={styles.card}>

                <Text>Perfil</Text>

                <View style={styles.Profile}>

                    <Text>Nome: {user.nome}</Text>
                    <Text>Email: {user.email}</Text>

                    <TouchableOpacity style={styles.deslogarUsuario} onPress={() => deslogarUsuario()}>
                        <Text style={styles.fontButton}>SAIR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.deslogarUsuario} >
                        <Text style={styles.fontButton}>ALTERAR NOME</Text>
                    </TouchableOpacity>

                </View>
                </View>
            </LinearGradient>

    );
}

var styless = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});