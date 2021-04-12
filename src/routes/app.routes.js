import React from 'react';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from '../screens/Home/index';
import Requests from '../screens/Requests/index';
import Wallet from '../screens/Wallet/index';
import Info from '../screens/Info/index';
import Profile from '../screens/Profile/index'
import Pedido from '../screens/Pedido/index';
const BottonTabs = createBottomTabNavigator();
const DrawerStack = createDrawerNavigator();
const Stack = createStackNavigator();
const Material = createMaterialTopTabNavigator();

// const icons = {
//     Cardápio: {
//         name: "list-outline"
//     },
//     Carteira: {
//         name: "wallet-outline"
//     }
// }
// function bottonTabs(){
//     return(
//         <BottonTabs.Navigator
//         screenOptions={({route}) => ({
//             tabBarIcon: ({ color, size }) =>{
//                 const { name } = icons[route.name];
//                 return <Icon name={name} color={color} size={size}/>
//             }
//         })}
//         tabBarOptions={{
//             style:{
//                 borderTopColor: "#eff4f0",
//                 backgroundColor: "#eff4f0",
                
//             },
//             activeTintColor: "#E98000",
//             inactiveTintColor: "#D9D9D9"
//         }}
//         >
//             <BottonTabs.Screen name="Cardápio" component={Requests} />
            
//         </BottonTabs.Navigator>
//     );
// }

function appRoutes(){
    return(
        <Stack.Navigator >
            <Stack.Screen options={{headerShown: false}} name="Home" component={Home}/>
            <Stack.Screen options={{headerShown: false}} name="Cardapio" component={Requests}/>
            <Stack.Screen options={{headerShown: false}} name="Carteira" component={Wallet}/>
            <Stack.Screen options={{headerShown: true, headerStyle:{
                backgroundColor: "#fff",
                elevation: 0,
                borderBottomWidth: 4,
                borderBottomColor: "#fff"
            },
                headerTintColor: "#E98000",
                headerTitle: "Pedidos",
                headerBackTitleVisible: false
                
            }} name="Pedidos" component={Info}/>         
            <Stack.Screen options={{headerShown: false}} name="Profile" component={Profile}/>
            <Stack.Screen options={{headerShown: true, headerStyle:{
                backgroundColor: "#fff",
                elevation: 0,
                borderBottomWidth: 4,
                borderBottomColor: "#fff"
            },
                headerTintColor: "#E98000",
                headerTitle: "Detalhes",
                headerBackTitleVisible: false
                }} name="Detalhes" component={Pedido}/>
        </Stack.Navigator>
    );
}    

export default appRoutes;