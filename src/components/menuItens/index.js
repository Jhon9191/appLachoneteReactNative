import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../menuItens/styles';

export default function menuItens({ data }) {
    return (
        <View style={{ justifyContent: "center", alignItems: 'center' }}>
            <View style={styles.container}>

                <View style={styles.produto}>
                    <Text style={styles.lanche}>{data.lanche}</Text>
                    <Text style={styles.price}>{data.price}</Text>
                </View>

                <View style={styles.addButton}>
                    <TouchableOpacity>
                        <Icon
                            name="plus"
                            size={30}
                            color="#FFF"
                        />
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    );
}