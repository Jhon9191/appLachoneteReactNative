import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

import firebase from '../services/firebase';
export const AuthContext = createContext({});


function authProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataPedido, setDataPedidos] = useState([]);

    const [total, setTotal] = useState([]);
    const [v, setV] = useState(0);

    const [dataPedidoCliente, setDataPedidoCliente] = useState(null);

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('Auth_user');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, []);

    async function cadastrar(nome, email, password) {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).set({
                    nome: nome,
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email, 
                            avatar: null
                        };
                        setUser(data);
                        storageUser(data);
                        setLoading(false);
                    })
            })
            .catch((error) => {
                alert(error.code);
            })
    }

    async function logar(email, password) {
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(async (value) => {
                let uid = value.user.uid;
                await firebase.database().ref('users').child(uid).once('value')
                    .then((snapshot) => {
                        let data = {
                            uid: uid,
                            nome: snapshot.val().nome,
                            email: value.user.email, 
                            avatar: snapshot.val().avatar
                        };
                        setUser(data);
                        storageUser(data);
                    })
            })
            .catch((error) => {
                alert(error.code);
            })
    }

    async function storageUser(data) {
        await AsyncStorage.setItem("Auth_user", JSON.stringify(data));
    }

    async function deslogarUsuario(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(()=>{
            setUser(null);
        })
    }
    
    
    function addPedido(data){
        setDataPedidos([...dataPedido, data]);
        setV(v + parseFloat(data.preco));
    }
    
    async function removeItem(item){ 
        setDataPedidos(dataPedido.filter(p => p !==item));
       setV(v - parseFloat(item.preco));
    }

    const confirmarPedido = () => {
        setDataPedidos([]);
    }

    return (
        <AuthContext.Provider value={{
            dataPedido, 
            signed: !!user, 
            user, 
            cadastrar, 
            logar, 
            loading, 
            deslogarUsuario, 
            addPedido, 
            removeItem,
            confirmarPedido,
            dataPedidoCliente, 
            setDataPedidoCliente,
            storageUser,
            setUser,
            v
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export default authProvider;