import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useRoute } from '@react-navigation/native'
import { AuthContext } from '../../context/auth';
import styles from './styles';

export default function WalletListItem({ data }) {

    const route = useRoute();
    const { removeItem, dataPedidoCliente } = useContext(AuthContext);

    async function handleRemove(item) {
        removeItem(item);
    }

    return (
        <View style={{ justifyContent: "center", alignItems: 'center', flex: 1, elevation: 5 }}>
            <View style={styles.alinhamentoItem} key={data.key}>
                <View style={styles.item}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.value}>Nome: </Text>
                        <Text>{data.nome}</Text>
                    </View>
                    <Text>Acréscimos: </Text>
                    <Text>{data.acrecimos.bife == true ? "Bife: Sim" : "Bife: Não"}</Text>
                    <Text>{data.acrecimos.queijo == true ? "Queijo: Sim" : "Queijo: Não"}</Text>
                    {console.log(data)}
                </View>

                {route.name == "Carteira" ? (
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={styles.itemValue}>
                            <Text style={styles.value}>R$ {data.preco}</Text>
                        </View>
                        <View style={styles.lixeira}>
                            <TouchableOpacity onPress={() => handleRemove(data)}>
                                <Icon name="trash-outline" size={30} color="#E98000" />
                            </TouchableOpacity>

                        </View>
                    </View>
                ) : (
                    <View style={{width: '100%', flexDirection: 'row'}}>
                        <View style={{width: '15%'}}></View>
                        <View style={styles.itemValue}>
                            <Text style={styles.value}>R$ {data.preco}</Text>
                        </View>
                    </View>

                )}
            </View>
        </View>
    );
}