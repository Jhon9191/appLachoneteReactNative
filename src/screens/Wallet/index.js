import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';

import styles from './styles.js';

export default function signin() {

    const { } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <Text style={styles.textSeuPedido}>Seu pedido!</Text>

            <View style={styles.conteudo}>
                <View style={styles.line}></View>
            </View>

        </View>
    );
}