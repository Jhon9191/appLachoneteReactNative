import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Platform,
    PermissionsAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
// import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/Ionicons'

import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';

import styles from './styles.js';
import Firebase from '../../services/firebase'

export default function Profile() {

    const { user, deslogarUsuario, setUser, storageUser } = useContext(AuthContext);
    const [newName, setNewName] = useState("");
    const uid = user && user.uid;
    const navigation = useNavigation();

    const [filePath, setFilePath] = useState("");

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

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.CAMERA,
              {
                title: 'Camera Permission',
                message: 'App needs camera permission',
              },
            );
            // If CAMERA Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (err) {
            console.warn(err);
            return false;
          }
        } else return true;
      };
    
      const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
              {
                title: 'External Storage Write Permission',
                message: 'App needs write permission',
              },
            );
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            return granted === PermissionsAndroid.RESULTS.GRANTED;
          } catch (err) {
            console.warn(err);
            alert('Write permission err', err);
          }
          return false;
        } else return true;
      };
    
      const chooseFile = async (type) => {
        let options = {
          mediaType: type,
          maxWidth: 300,
          maxHeight: 550,
          quality: 1,
        };
        let isStoragePermitted = await requestExternalWritePermission();
        if (isStoragePermitted) {
        launchImageLibrary(options, (response) => {
          setFilePath(response);
          console.log(response);
        })}
      };

    return (
        <View style={styles.background}>
            <View style={styles.profileContainerPhoto}>
                {filePath === "" ? (
                    <Image style={styles.profilePhoto} source={{uri: "https://www.construtoracesconetto.com.br/wp-content/uploads/2020/03/blank-profile-picture-973460_640.png" }} />
                ):(
                <Image style={styles.profilePhoto} source={{uri: `${filePath.uri}`}} />
                )}
                <TouchableOpacity style={styles.positionIcon}
                onPress={() =>chooseFile('photo')}>
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
