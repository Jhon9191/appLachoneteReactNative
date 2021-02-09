import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import Requests from '../screens/Requests/index';
import Wallet from '../screens/Wallet/index';
import Info from '../screens/Info/index';

const BottonTabs = createBottomTabNavigator();
const DrawerStack = createDrawerNavigator();
const Stack = createStackNavigator();
const Material = createMaterialTopTabNavigator();

const icons = {
    Cardápio: {
        name: "list-outline"
    },
    Carteira: {
        name: "wallet-outline"
    }
}

function bottonTabs(){
    return(
        <BottonTabs.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({ color, size }) =>{
                const { name } = icons[route.name];
                return <Icon name={name} color={color} size={size}/>
            }
        })}
        tabBarOptions={{
            style:{
                borderTopColor: "#eff4f0",
                backgroundColor: "#eff4f0",
                
            },
            activeTintColor: "#E98000",
            inactiveTintColor: "#D9D9D9"
        }}
        >
            <BottonTabs.Screen name="Cardápio" component={Requests} />
            <BottonTabs.Screen name="Carteira" component={Wallet}/>
        </BottonTabs.Navigator>
    );
}

function appRoutes(){
    return(
        <Stack.Navigator >
            <Stack.Screen options={{headerShown: false}} name="Home" component={bottonTabs}/>
            <Stack.Screen name="Info" component={Info}/>
        </Stack.Navigator>
    );
}    

export default appRoutes;