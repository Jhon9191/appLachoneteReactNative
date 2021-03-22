import React, { useState, useContext } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
// import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles.js';

export default function Profile() {

    const { user, deslogarUsuario } = useContext(AuthContext);
    const navigation = useNavigation();

    return (
        <View style={styles.background}>

            <View style={styles.profileContainerPhoto}>
                <Image style={styles.profilePhoto} source={{ uri: "https://www.construtoracesconetto.com.br/wp-content/uploads/2020/03/blank-profile-picture-973460_640.png" }} />
                <TouchableOpacity style={styles.positionIcon}>
                    {/* <View style={{width:'30%'}}></View> */}
                    <Icon name="create-outline" size={20} color="#343438" />
                </TouchableOpacity>
            </View>

            <Text style={styles.profileText}>{user.nome}</Text>

            <TouchableOpacity style={styles.buttons}>
                <Icon name="create-outline" size={25} color="#fff" />
                <Text style={styles.profileText}>Editar perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonsDeslogar} onPress={() => deslogarUsuario()}>
                <Icon name="close-circle-outline" size={25} color="#fff" />
                <Text style={styles.profileText}>Sair</Text>
            </TouchableOpacity>


        </View>

    );
}
