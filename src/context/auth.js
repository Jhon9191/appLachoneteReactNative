import React, { createContext, useState } from 'react';

import firebase from '../services/firebase';
export const AuthContext = createContext({});

function authProvider({ children }) {
    const [user, setUser] = useState(null);

    async function cadastrar(nome, email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async(value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    nome: nome,
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email
                        };
                        setUser(data);
                    })
            })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, cadastrar }}>
            {children}
        </AuthContext.Provider>
    );
}

export default authProvider;