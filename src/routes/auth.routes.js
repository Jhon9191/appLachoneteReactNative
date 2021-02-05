
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Signin from '../screens/Signin/index';

const AuthStack = createStackNavigator();
function authRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Signin" component={Signin}/>
        </AuthStack.Navigator>
    );
}    

export default authRoutes;