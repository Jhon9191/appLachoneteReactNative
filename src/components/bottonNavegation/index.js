import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles';

export default function bottonNavegation() {
    const navigation = useNavigation();
    return (

        <View style={styles.headerStyle}>
            <TouchableOpacity
                style={styles.botoesStyle}
                onPress={() => navigation.navigate("Carteira")}>
                <Icon name="cart-outline"size={24}color="#FFF"/>
                <Text style={styles.textButton}>Carrinho</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botoesStyle}
                onPress={() => navigation.navigate("seusPedidos")}>
                <Icon name="information-circle-outline"size={24}color="#FFF"/>
                <Text style={styles.textButton}>Seus pedidos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botoesStyle}
                onPress={() => navigation.navigate("Info")}>
                <Icon name="information-circle-outline"size={24}color="#FFF"/>
                <Text style={styles.textButton}>Infomações</Text>
            </TouchableOpacity>
        </View>
    );
}