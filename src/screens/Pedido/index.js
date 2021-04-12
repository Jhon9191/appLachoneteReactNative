import React, { useEffect, useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { AuthContext } from '../../context/auth';

import styles from './styles.js'

const Pedido = () => {
  const { dataPedidoCliente } = useContext(AuthContext)

  useEffect(() => {
    //console.log(dataPedidoCliente)
  }, [])

  return (
    <View style={styles.background}>
      {dataPedidoCliente.map((item) => {
        return (
          <View key={item.key}>
            <Text>{item.nome}</Text>
            <Text>{item.preco}</Text>
          </View>
        )
      })}
    </View>
  );
}

export default Pedido;