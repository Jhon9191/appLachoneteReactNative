import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { AuthContext } from '../../context/auth';
import styles from './styles';

export default function WalletListItem({ data }) {

    const { removeItem } = useContext(AuthContext);

    async function handleRemove(item) {
        removeItem(item);
    }

    return (
        <View style={{ justifyContent: "center", alignItems: 'center', flex: 1,elevation: 5 }}>
            <View style={styles.alinhamentoItem} key={data.key}>
                <View style={styles.item}>
                    <Text>{data.nome}</Text>
                    <Text>{data.preco}</Text>
                    <Text>{data.bife === true ? "Sim" : "Não"}</Text>
                    <Text>{data.queijo === true ? "Sim" : "Não"}</Text>
                </View>
                <TouchableOpacity style={styles.lixeira} onPress={() => handleRemove(data)}>
                    <Icon name="trash-outline" size={30} color="#E98000" />
                </TouchableOpacity>
            </View>
        </View>
    );
}