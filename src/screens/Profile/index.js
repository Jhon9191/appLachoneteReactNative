import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
import { LinearGradient } from 'react-native-linear-gradient'
import styles from './styles.js';

export default function Profile() {

    const { user, deslogarUsuario } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.cardProfile}>

                <Text>{user.nome}</Text>

                <TouchableOpacity onPress={() => deslogarUsuario()}>
                    <Text>Sair</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}