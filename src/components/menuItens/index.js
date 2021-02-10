import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../menuItens/styles';

export default function menuItens({ data }) {

    const [visible, setVisible] = useState(false);
    const [queijo, setQueijo] = useState(false);

    function openModal() {
        setVisible(true);
    }

    function closeModal() {
        setVisible(false);
    }

    function confirmarPedido() {
        setVisible(false);
    }

    return (
        <View style={{ justifyContent: "center", alignItems: 'center', flex: 1 }}>


            <View style={styles.container}>

                <View style={styles.produto}>
                    <Text style={styles.lanche}>{data.lanche}</Text>
                    <Text style={styles.price}>{data.price}</Text>
                </View>

                <TouchableOpacity
                    onPress={openModal}
                    style={styles.addButton}>
                    <View >
                        <Icon
                            name="plus"
                            size={30}
                            color="#FFF"
                        />
                    </View>
                </TouchableOpacity>
            </View>


            <Modal
                transparent={true}
                animationType="slide"
                visible={visible}>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <View style={styles.acrecimosWindow}>
                        <View style={styles.opcoes}>

                        </View>
                        <View style={styles.botoesFuncoes}>

                            <TouchableOpacity style={styles.botaoClose} onPress={closeModal}>
                                <Text style={styles.textClose}>Cancelar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.botaoConfirmar} onPress={confirmarPedido}>
                                <Text style={styles.textConfirmar}>Confirmar</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Modal >


        </View>
    );
}