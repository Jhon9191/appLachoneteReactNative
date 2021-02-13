import React, { useContext, useState , useEffect} from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import { AuthContext } from '../../context/auth';
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles.js';

export default function Wallet() {

    const [historico, setHistorico] = useState([]);
    const [pedidosList, setPedidosList] = useState([]);
    let vetor = [];
    let saldoFinal = [];
    let i = 0;

    const { Pedidos, removeItem, h } = useContext(AuthContext);

    useEffect(()=>{
        setHistorico(h);
    },[]);

    async function handleRemove(item) {
        removeItem(item);
        setHistorico(historico.filter(p => p !==item))
    }

    return (
        <View style={styles.background}>

            <View style={styles.conteudo}>
                <Text style={styles.textSeuPedido}>Seu pedido!</Text>
            </View>
            <Button title="Clipa" onPress={() => console.log(h)} />
            <Button title="Clipa" onPress={() => console.log(historico)} />
            <View style={styles.pedidos}>

                {historico.map(item =>{
                    let data = {
                        key: item.key,
                        nome: item.nome,
                        preco: item.preco,
                        bife: item.bife,
                        queijo: item.queijo
                    }
                    return(
                        <View key={data.key}>
                            <Text>{data.nome}</Text>
                            <Text>{data.preco}</Text>
                            <Text>{data.bife}</Text>
                            <Text>{data.queijo}</Text>
                            <Button title="remover" onPress={()=>handleRemove(item)}/>
                        </View>
                    );
                })}

                {vetor.map(pedidos => {
                    let data = {
                        key: pedidos.key,
                        nome: pedidos.nome,
                        preco: pedidos.preco,
                        bife: pedidos.acrecimos.bife,
                        queijo: pedidos.acrecimos.queijo
                    }
                    //RETURN
                })}
                {vetor.map(pedidos => { saldoFinal.push(pedidos.preco) })}
                {saldoFinal.forEach(pedidos => {
                    i += parseFloat(pedidos);
                })}
            </View>
            <Text>{i}</Text>
        </View>
    );
}