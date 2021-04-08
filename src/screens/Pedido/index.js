import React, { useEffect, useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { AuthContext } from '../../context/auth';

const Pedido = () => {
  const { dataPedidoCliente } = useContext(AuthContext)

  useEffect(() => {
    //console.log(dataPedidoCliente)
  }, [])

  return (
    <View >
      {dataPedidoCliente.map((item) => {
        return (
          <View>
            <Text>{item.nome}</Text>
            <Text>{item.preco}</Text>
          </View>
        )
      })}
    </View>
  );
}

export default Pedido;