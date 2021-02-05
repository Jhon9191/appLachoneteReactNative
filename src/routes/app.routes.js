import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home/index';

const AppStack = createStackNavigator();


function appRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home}/>
        </AppStack.Navigator>
    );
}    

export default appRoutes;