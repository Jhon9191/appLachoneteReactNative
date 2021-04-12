import React, { useEffect, useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { AuthContext } from '../../context/auth';

import styles from './styles.js'
import WalletListItem from '../../components/WalletListItem/index'

const Pedido = () => {
  const { dataPedidoCliente } = useContext(AuthContext)

  useEffect(() => {
    //console.log(dataPedidoCliente)
  }, [])

  return (
    <View style={styles.background}>
      <View style={styles.pedidos}>

        <FlatList
          data={dataPedidoCliente}
          keyExtractor={item => item.key}
          showsHorizontalScrollIndicator={true}
          renderItem={({ item }) => (<WalletListItem data={item} />)}
        />

      </View>
      {/* {dataPedidoCliente.map((item) => {
        return (
          <View key={item.key}>
            <Text>{item.nome}</Text>
            <Text>{item.preco}</Text>
          </View>
        )
      })} */}
    </View>
  );
}

export default Pedido;