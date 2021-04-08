import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';

import styles from './styles.js';
import Firebase from '../../services/firebase'

export default function Info() {

    const { user, setDataPedidoCliente } = useContext(AuthContext);
    const uid = user && user.uid;
    const [history, setHistory] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {

        const loadPedidos = async () => {
            await Firebase.database().ref("Pedidos").child(uid)
                .on('value', (snapshot) => {
                    setHistory([]);
                    snapshot.forEach((item) => {
                        let novo = item.val().lanches.dataPedido
                        console.log(novo)
                        setHistory(oldArray => [...oldArray, novo])
                    })
                })
        }
        loadPedidos();
    }, [])

    useEffect(() => {
        //console.log(history)
    }, [history])

    const navegar = (item) => {
       setDataPedidoCliente(item);
       navigation.navigate("Infos")
    }

    return (
        <View style={styles.background}>
            <Text style={styles.text}>Informações</Text>

            {history.map((item, index) => {
                //console.log(item)
                console.log(index)   
                return (
                <TouchableOpacity onPress={() => navegar(item)}>
                    <Text>Item {index+1}</Text>
                </TouchableOpacity>
                )
            })}

            <View style={styles.conteudo}>
            </View>

        </View>
    );
}