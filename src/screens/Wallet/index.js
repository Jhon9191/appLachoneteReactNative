import React, { useState, useContext, useEffect } from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';

import styles from './styles.js';
import HisoricoData from '../../components/menuWallet/index';


export default function Wallet() {

    const { Pedidos, h } = useContext(AuthContext);
    const navigation = useNavigation();
    
    let vetor = [];

    return (
        <View style={styles.background}>
            <Text style={styles.textSeuPedido}>Seu pedido!</Text>

            <View style={styles.conteudo}>
                <View style={styles.line}></View>
            </View>

            { Pedidos.map(pedidos => {
                let data = {
                    key: pedidos.key,
                    nome: pedidos.nome,
                    preco: pedidos.preco,
                    bife: pedidos.acrecimos.bife,
                    queijo: pedidos.acrecimos.queijo
                }
               
                return (
                    <View style={{ margin: 5 }} key={data.key}>
                        <Text>{data.nome}</Text>
                        <Text>{data.preco}</Text>
                        <Text>{data.bife === true ? "Sim" : "Não"}</Text>
                        <Text>{data.queijo === true ? "Sim" : "Não"}</Text>
                    </View>
                );
            })}

            <Button title="d" onPress={()=> console.log(vetor)}/>

            { Pedidos.map(pedidos =>{
                vetor.push(pedidos.preco)
            }
)}

            
            

        </View>
    );
}