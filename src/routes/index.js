import React, { useContext } from 'react'
import { View, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../src/context/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function routes() {
    const { signed, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color="#121212"/>
            </View>
        );
    }
    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    );
}

export default routes;