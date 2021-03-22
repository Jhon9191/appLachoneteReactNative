import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { AuthContext } from '../../context/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles';

const data = new Date();

export default function Home() {
    const { user } = useContext(AuthContext)
    const [hora, setHora] = useState(new Date().getHours());
    const [menssagem, setMensagem] = useState()
    const [h, setH] = useState([
        {id: 1, icon: "list-outline", screen: "Cardapio"},
        {id: 2, icon: "wallet-outline", screen: "Carteira" },
        {id: 3, icon: "person-outline", screen: "Profile" },
        {id: 4, icon: "information-circle-outline", screen: "Info" },
    ]);

    useEffect(()=>{
        if(hora >= 6 && hora < 12){
            setMensagem(`Bom dia ${user.nome}!`)
        }else if ( hora >= 12 && hora < 18){
            setMensagem(`Boa tarde ${user.nome}!`)
        }else if ( hora >= 18 && hora < 6){
            setMensagem(`Boa noite ${user.nome}!`)
        }
    },[])

    const navigation = useNavigation();
    return (

        <View style={styles.container}>
            <Text style={styles.msgUser}>{menssagem}</Text>
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