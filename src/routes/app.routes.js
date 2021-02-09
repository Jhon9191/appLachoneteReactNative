import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Requests from '../screens/Home/index';
import Wallet from '../screens/Wallet/index';

const BottonTabs = createBottomTabNavigator();
const DrawerStack = createDrawerNavigator();
const Stack = createStackNavigator();
const Material = createMaterialTopTabNavigator();

function bottonTabs(){
    return(
        <Material.Navigator>
            <Material.Screen name="Requests" component={Requests} />
            <Material.Screen name="Wallet" component={Wallet}/>
        </Material.Navigator>
    );
}

function appRoutes(){
    return(
        <Stack.Navigator >
            <Stack.Screen options={{headerShown: false}} name="Home" component={bottonTabs}/>
        </Stack.Navigator>
    );
}    

export default appRoutes;