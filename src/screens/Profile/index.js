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
        <View style={styles.background}>
            <LinearGradient colors={['#FEBA67', '#f87b0f', '#d63b5d']} style={styles.card}>
                <Text>Perfil</Text>
                <View style={styles.Profile}>
                    <Text>Nome: {user.nome}</Text>
                    <Text>Email: {user.email}</Text>
                </View>
            </LinearGradient>
            <View style={styles.containerButtons}>
                <TouchableOpacity style={styles.deslogarUsuario} onPress={() => deslogarUsuario()}>
                    <Text style={styles.fontButton}>SAIR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deslogarUsuario} >
                    <Text style={styles.fontButton}>ALTERAR NOME</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
