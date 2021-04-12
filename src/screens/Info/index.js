import React, { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
import Icon from 'react-native-vector-icons/Ionicons'

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
                        setHistory(oldArray => [...oldArray, novo])
                    })
                })
        }
        loadPedidos();
    }, [])

    const navegar = (item) => {
        setDataPedidoCliente(item);
        navigation.navigate("Detalhes")
    }

    return (
        <View style={styles.background}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={history}
                keyExtractor={item => item.preco}
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.itemPedido} onPress={() => navegar(item)}>
                        <Text style={{color:"#E98000", fontWeight: "bold"}}>Pedido {index + 1}</Text>
                        <Icon name="chevron-forward-outline" size={25} color="#E98000" />
                    </TouchableOpacity>
                )}
            />

            <View style={styles.conteudo}>
            </View>

        </View>
    );
}