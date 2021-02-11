import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function bottonNavegation() {
    const navigation = useNavigation();
    return (
        <View style={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            height: "13%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
        }}>

            <TouchableOpacity
                style={{
                    borderRadius: 30,
                    width: 130,
                    height: 60,
                    marginStart: 80,
                    marginEnd: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#E98000",
                    flexDirection: "row"
                }}
                onPress={() => navigation.navigate("Carteira")}>
                <Icon
                    name="cart-outline"
                    size={30}
                    color="#FFF"
                />
                <Text style={{color:"#FFF", marginStart: 10, fontWeight:"bold"}}>Carrinho</Text>
            </TouchableOpacity>

        </View>
    );
}