import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../context/auth';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns'
import Icon from 'react-native-vector-icons/FontAwesome'

import Firebase from '../../services/firebase';

import styles from './styles.js';
import WalletListItem from '../../components/WalletListItem'

export default function Wallet() {
    const { dataPedido, user, confirmarPedido } = useContext(AuthContext);
    const navigation = useNavigation();


    const handleCreatePedido =  async () =>{
        let uid = await Firebase.auth().currentUser.uid;
        let key = await Firebase.database().ref('Pedidos').child(user.uid).push().key;
        Firebase.database().ref("Pedidos").child(user.uid).child(key).set({
            lanches: {dataPedido}
        }).then(()=>{
            console.log("Pedido feito")
            confirmarPedido()
        })
    }

    useEffect(() => {
    }, [dataPedido]);

    return (
        <View style={styles.background}>

            { dataPedido.length == 0
                ?
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <View style={styles.cardEmpty}>
                        <Text style={styles.textEmpty}>Cesta vazia</Text>
                        <Icon
                            name="shopping-cart"
                            size={50}
                            color="#E98000"
                        />
                    </View>

                    <TouchableOpacity
                        style={styles.buttonVoltar}
                        onPress={() => navigation.navigate("Home")}>
                        <Icon
                            name="arrow-left"
                            size={20}
                            color="#E98000"
                        />
                        <Text style={styles.textVoltar}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                :
                <View style={styles.container}>

                    <View style={styles.pedidos}>
                        <View style={{ padding: 4 }}>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={dataPedido}
                                keyExtractor={item => item.key.toString()}
                                renderItem={({ item }) => (<WalletListItem data={item} />)} />
                        </View>
                    </View>


                    <View style={{ width: '100%', flexDirection: "row", justifyContent: 'space-evenly' }}>
                        <TouchableOpacity
                            style={styles.buttonVoltar}
                            onPress={() => navigation.navigate("Home")}>
                            <Icon
                                name="arrow-left"
                                size={20}
                                color="#E98000"
                            />
                            <Text style={styles.textVoltar}>Voltar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            onPress={handleCreatePedido}
                            style={styles.buttonVoltar}>
                            <Text style={styles.textVoltar}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>



                    {/* <View style={{ height: "20%" }}>
                        <Text style={styles.textSeuPedido}>Seu pedido {user.nome}!</Text>
                        <Text style={styles.textSeuPedido}> {v.toFixed(2)}</Text>
                    </View> */}

                </View>
            }


        </View>
    );
}