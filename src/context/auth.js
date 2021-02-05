import React,{ createContext , useState} from 'react';

export const AuthContext = createContext( {  } );

function authProvider( { children } ){
    const[user, setUser] = useState({
        nome: "João"
    });

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}

export default authProvider;