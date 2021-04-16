import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../menuItens/styles';
import { AuthContext } from '../../context/auth';

let contador = 0;

export default function menuItens({ data }) {
    const { addPedido } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);

    const [lanche, setLanche] = useState();
    const [price, setPrice] = useState();

    const [queijo, setQueijo] = useState(false);
    const [bife, setBife] = useState(false);

    function openModal() {
        setLanche(data.lanche);
        setPrice(data.price);
        setVisible(true);
    }
    useEffect(()=>{
        if(queijo == true){
            setPrice(parseFloat(price)+2)
        }
        if(queijo == false){
            setPrice(parseFloat(price)-2)
        }
    },[queijo])

    useEffect(()=>{
        if(bife == true){
            setPrice(parseFloat(price)+2)
        }
        if(bife == false){
            setPrice(parseFloat(price)-2)
        }
        
    },[bife])

    function closeModal() {
        setVisible(false);
    }

    function addNovoPedido(dataLocal) {
        addPedido(dataLocal);
    }

    function confirmarPedido() {
        contador++;
        let acrecimos = {
            queijo: queijo,
            bife: bife
        }
        let queijoValue = 0;
        if (queijo == true) {
            queijoValue = 2.00;
        }
        let bifeValue = 0;
        if (bife == true) {
            bifeValue = 2.00;
        }
        let dadosPedido = {
            key: contador,
            nome: lanche,
            preco: price,
            acrecimos: acrecimos
        }
        addNovoPedido(dadosPedido);
        setVisible(false);
    }

    return (
        <View style={{ justifyContent: "center", alignItems: 'center', flex: 1 }}>


            <View style={styles.container}>

                <View style={styles.produto}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.text}>Nome: </Text>
                        <Text>{data.lanche}</Text>
                    </View>

                    <Text style={styles.text}>R$ {data.price}</Text>
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
            <View style={styles.line}></View>


            <Modal
                transparent={true}
                animationType="slide"
                visible={visible}>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
                    <View style={styles.acrecimosWindow}>
                        <View style={styles.opcoes}>
                            {/* CONTEUDO DE ACRECIMOS */}
                            <Text>{lanche}</Text>
                            <Text>{price}</Text>
                            <View style={styles.itensList}>
                                <Text style={styles.itenListText}>Queijo</Text>
                                <Switch
                                    value={queijo}
                                    onValueChange={(value) => setQueijo(value)}
                                    trackColor={{ false: "#95a5a6", true: "#E98000" }}
                                    thumbColor={!queijo ? "#7f8c8d" : "#ec9e40"}
                                />
                            </View>

                            <View style={styles.itensList}>
                                <Text style={styles.itenListText}>Bife</Text>
                                <Switch
                                    value={bife}
                                    onValueChange={(value) => setBife(value)}
                                    trackColor={{ false: "#95a5a6", true: "#E98000" }}
                                    thumbColor={!bife ? "#7f8c8d" : "#ec9e40"}
                                />
                            </View>


                        </View>
                        <View style={styles.line}></View>
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