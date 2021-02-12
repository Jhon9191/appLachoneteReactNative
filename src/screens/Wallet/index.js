import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles.js';

export default function Wallet() {

    const { Pedidos } = useContext(AuthContext);
    const navigation = useNavigation();

    let vetor = [];
    let i = 0;

    function handleRemove(){
        alert("Item removido com sucesso");
    }

    return (
        <View style={styles.background}>

            <View style={styles.conteudo}>
                <Text style={styles.textSeuPedido}>Seu pedido!</Text>
            </View>

            <View style={styles.pedidos}>
                {Pedidos.map(pedidos => {
                    let data = {
                        key: pedidos.key,
                        nome: pedidos.nome,
                        preco: pedidos.preco,
                        bife: pedidos.acrecimos.bife,
                        queijo: pedidos.acrecimos.queijo
                    }

                    return (
                        <View style={styles.alinhamentoItem} key={data.key}>
                            <View style={styles.item}>
                                <Text>{data.nome}</Text>
                                <Text>{data.preco}</Text>
                                <Text>{data.bife === true ? "Sim" : "Não"}</Text>
                                <Text>{data.queijo === true ? "Sim" : "Não"}</Text>
                            </View>
                            <TouchableOpacity style={styles.lixeira} onPress={()=>handleRemove()}>
                                <Icon name="trash-outline" size={30} color="#E98000" />
                            </TouchableOpacity>
                        </View>
                    );
                })}

                {Pedidos.map(pedidos => { vetor.push(pedidos.preco) })}
                {vetor.forEach(pedidos => {
                    i += parseFloat(pedidos);
                })}
            </View>

            <Text>{i}</Text>


        </View>
    );
}