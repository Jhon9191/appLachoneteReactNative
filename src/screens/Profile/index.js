import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
// import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles.js';
import Firebase from '../../services/firebase'

export default function Profile() {

    const { user, deslogarUsuario, setUser, storageUser } = useContext(AuthContext);
    const [newName, setNewName] = useState("");
    const uid = user && user.uid;
    const navigation = useNavigation();

    const editName = async () => {
        await Firebase.database().ref("users").child(uid).update({
            nome: newName
        }).then(() =>{
            let data = {
                ...user,
                nome: newName
            }
            setUser(data);
            storageUser(data);
        })
    }

    return (
        <View style={styles.background}>

            <View style={styles.profileContainerPhoto}>
                <Image style={styles.profilePhoto} source={{ uri: "https://www.construtoracesconetto.com.br/wp-content/uploads/2020/03/blank-profile-picture-973460_640.png" }} />
                <TouchableOpacity style={styles.positionIcon}>
                    {/* <View style={{width:'30%'}}></View> */}
                    <Icon name="create-outline" size={20} color="#343438" />
                </TouchableOpacity>
            </View>

         
                <TextInput style={styles.buttons}
                placeholder={user.nome}
                placeholderTextColor="#FFf"
                color="#fff"
                autoCorrect={false}
                value={newName}
                onChangeText={(text) => setNewName(text)}
            />

            <TouchableOpacity style={styles.buttonsDeslogar} onPress={() => deslogarUsuario()}>
                <Icon name="close-circle-outline" size={25} color="#fff" />
                <Text style={styles.profileText}>Sair</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttononConfirmar} onPress={() => editName()}>
                <Icon name="close-circle-outline" size={25} color="#fff" />
                <Text style={styles.profileText}>Salvar alterações</Text>
            </TouchableOpacity>


        </View>

    );
}
