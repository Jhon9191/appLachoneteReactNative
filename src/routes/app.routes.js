import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Requests from '../screens/Requests/index';
import Wallet from '../screens/Wallet/index';
import Info from '../screens/Info/index';

const BottonTabs = createBottomTabNavigator();
const DrawerStack = createDrawerNavigator();
const Stack = createStackNavigator();
const Material = createMaterialTopTabNavigator();

function bottonTabs(){
    return(
        <BottonTabs.Navigator>
            <BottonTabs.Screen name="Requests" component={Requests} />
            <BottonTabs.Screen name="Wallet" component={Wallet}/>
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