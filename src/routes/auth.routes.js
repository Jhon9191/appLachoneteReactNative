
import React from 'react';
//import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Signin from '../screens/Signin/index';
import Signup from '../screens/Signup/index';

//const AuthStack = createStackNavigator();
const TopStack = createMaterialTopTabNavigator();

function authRoutes(){
    return(
        <TopStack.Navigator>
            <TopStack.Screen name="Signin" component={Signin}/>
            <TopStack.Screen name="Signup" component={Signup}/>
        </TopStack.Navigator>
    );
}    

export default authRoutes;