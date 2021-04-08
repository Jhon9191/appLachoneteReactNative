import React, { useEffect, useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { AuthContext } from '../../context/auth';

const OrderListItem = () => {
  const { dataPedidoCliente } = useContext(AuthContext)

  useEffect(() => {
    console.log(dataPedidoCliente)
  }, [])

  return (
    <View >
      {dataPedidoCliente.map((a)=>{
        return(
          <Text>Text</Text>
        )
      })}
    </View>
  );
}

export default OrderListItem;