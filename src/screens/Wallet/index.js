import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { AuthContext } from '../../context/auth';

import styles from './styles.js';
import WalletListItem from '../../components/WalletListItem'
export default function Wallet() {

    const { dataPedido, user } = useContext(AuthContext);


    return (
        <View style={styles.background}>
            <View style={{ height: "10%" }}>
                <Text style={styles.textSeuPedido}>Seu pedido {user.nome}!</Text>
            </View>
            <View style={styles.pedidos}>
                <View style={{ margin: 10 }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={dataPedido}
                        keyExtractor={item => item.key}
                        renderItem={({ item }) => (<WalletListItem data={item} />)}
                    />
                </View>
            </View>
        </View>
    );
}