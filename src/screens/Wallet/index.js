import React, { useContext, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { AuthContext } from '../../context/auth';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns'
import Icon from 'react-native-vector-icons/FontAwesome'

import Firebase from '../../services/firebase';

import styles from './styles.js';
import WalletListItem from '../../components/WalletListItem'
import { set } from 'date-fns/esm';

export default function Wallet() {
    const { dataPedido, user, confirmarPedido, setDataPedidoCliente, v } = useContext(AuthContext);
    const navigation = useNavigation();
    const [valorTotal, setValorTotal] = useState("");
    const [visible, setVisible] = useState(false);

    const handleCreatePedido = async () => {
        let uid = await Firebase.auth().currentUser.uid;
        let key = await Firebase.database().ref('Pedidos').child(user.uid).push().key;
        Firebase.database().ref("Pedidos").child(user.uid).child(key).set({
            lanches: { dataPedido }
        }).then(() => {
            //console.log("Pedido feito")
            confirmarPedido()
        })
    }

    useEffect(() => {
        setDataPedidoCliente(null)
    }, []);

    useEffect(() => {
    }, [dataPedido]);

    const closeModal = () => {
        setVisible(false);
    }

    const openModal = () => {
        setVisible(true);
    }

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
                </View>
                :
                <View style={styles.container}>
                    <View style={styles.pedidos}>
                        <Text>{v}</Text>

                        <Modal
                            transparent={true}
                            animationType="slide"
                            visible={visible}>
                            <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                                <View style={styles.acrecimosWindow}>
                                   
                                        <View style={styles.botoesFuncoes}>

                                            <TouchableOpacity style={styles.botaoClose} onPress={closeModal}>
                                                <Text style={styles.textClose}>Cancelar</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.botaoConfirmar} onPress={handleCreatePedido}>
                                                <Text style={styles.textConfirmar}>Confirmar</Text>
                                            </TouchableOpacity>

                                    </View>
                                </View>
                            </View>
                        </Modal >


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
                            onPress={openModal}
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