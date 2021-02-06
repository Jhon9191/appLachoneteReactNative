import React,{ useContext } from 'react'
import { AuthContext } from '../../src/context/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function routes(){
    const { signed } = useContext(AuthContext);
    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}

export default routes;