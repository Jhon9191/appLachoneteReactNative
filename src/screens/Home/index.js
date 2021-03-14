import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles';

export default function Home() {
    const [h, setH] = useState([
        {id: 1, icon: "list-outline", screen: "Cardapio"},
        {id: 2, icon: "wallet-outline", screen: "Carteira" },
        {id: 3, icon: "person-outline", screen: "Profile" },
        {id: 4, icon: "information-circle-outline", screen: "Info" },
    ]);
    const navigation = useNavigation();
    return (


        <View style={styles.container}>
            <View style={styles.subContainer}>
                {h.map(item => {
                    return (
                        <View key={item.id} style={styles.space}>
                            <TouchableOpacity 
                            onPress={()=>navigation.navigate(`${item.screen}`)}
                            style={styles.addButton}>
                                <Icon name={item.icon} size={50} color="#E98000" />
                            </TouchableOpacity>
                        </View>);
                })}
            </View>
        </View>


    );
}