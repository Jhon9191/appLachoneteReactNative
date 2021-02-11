import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';
import Icon from 'react-native-vector-icons/FontAwesome'

import BottoNavegation from '../../components/bottonNavegation/index';
import styles from './styles.js';
import HistoricoList from '../../components/menuItens/index';

export default function Home() {
  const { deslogarUsuario } = useContext(AuthContext);
  const [historico, useHistorico] = useState([
    { key: '1', lanche: "X-Tudo", price: '10.50' },
    { key: '2', lanche: "Mega", price: '15.00' },
    { key: '3', lanche: "Montana", price: '9.00' },
    { key: '4', lanche: "Pizza-mussarela", price: '45.00' },
    { key: '5', lanche: "Mega2x", price: '10.00' },
    { key: '6', lanche: "PIzza-calabresa", price: '15.00' },
    { key: '7', lanche: "Pizza-4-queijos", price: '9.00' },
    { key: '8', lanche: "Pizza-mista", price: '45.00' },
  ]);
  const navigation = useNavigation();

  return (
    //   <View style={styles.background}>
    //   <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    //     <View style={styles.nav}>
    //       <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("Info")}>
    //         <Icon
    //           color="#E98000"
    //           name="bars"
    //           size={24}
    //         />
    //       </TouchableOpacity>
    //     </View>
    //   </View>

    //   <View style={styles.conteudo}>
    //     <View style={styles.cardapido}>
    // <View style={{ padding: 4 }}>
    //   <FlatList
    //     showsVerticalScrollIndicator={false}
    //     data={historico}
    //     keyExtractor={item => item.key}
    //     renderItem={({ item }) => (<HistoricoList data={item} />)}
    //   />
    // </View>
    //     </View>
    //     {/* <Button title="Deslogar" onPress={()=>deslogarUsuario()}/> */}
    //   </View>

    //   <View style={{ justifyContent: "center", alignItems: 'center' }}>
    //     <BottoNavegation />
    //   </View>

    // </View>
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: "#E98000"}}>

      <View style={styles.nav}>
        <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("Info")}>
          <Icon
            color="#E98000"
            name="bars"
            size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardapido}>
        <View style={{ padding: 4 }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={historico}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (<HistoricoList data={item} />)}
          />
        </View>
      </View>

      <BottoNavegation />


    </View>
  );
}