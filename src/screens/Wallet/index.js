import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from './styles.js';
import WalletListItem from '../../components/WalletListItem'
export default function Wallet() {

    const { dataPedido, v, user } = useContext(AuthContext);
    const [valorTotal, setValorTotal] = useState();
    const navigation = useNavigation();

    useEffect(()=>{
    },[dataPedido]);

    return (

        <View style={styles.background}>


            { dataPedido.length == 0
                ?
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <View style={styles.cardEmpty}>
                        <Text style={styles.textEmpty}>Cesta vazia</Text>
                        <Icon
                            name="cart-off"
                            size={50}
                            color="#E98000"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.buttonVoltar}
                        onPress={() => navigation.navigate("Cardapio")}>
                        <Icon
                            name="arrow-left"
                            size={50}
                            color="#E98000"
                        />
                        <Text style={styles.textVoltar}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textSeuPedido}>Seu pedido {user.nome}!</Text>
                     <Text style={styles.textSeuPedido}> {v}</Text> 
                    
                    <View style={styles.pedidos}>
                        <View style={{ margin: 10 }}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={dataPedido}
                                keyExtractor={item => item.key.toString()}
                                renderItem={({ item }) => (<WalletListItem data={item} />)}
                            />
                        </View>
                    </View>
                </View>
            }


        </View>
    );
}