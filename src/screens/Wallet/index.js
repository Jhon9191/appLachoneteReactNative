import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';

import styles from './styles.js';
import { FlatList } from 'react-native-gesture-handler';

export default function Wallet() {

    const { Pedidos } = useContext(AuthContext);
    const [historico, setHistorico] = useState(Pedidos);
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <Text style={styles.textSeuPedido}>Seu pedido!</Text>

            <View style={styles.conteudo}>
                <View style={styles.line}></View>
            </View>

            <FlatList
            data={historico}
            keyExtractor={item => item.key}
            renderItem={ ({item}) => (<Text>Texxt</Text>) }
            />

        </View>
    );
}