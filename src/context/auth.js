import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage'

import firebase from '../services/firebase';
export const AuthContext = createContext({});


function authProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [dataPedido, setDataPedidos] = useState([]);

    const [total, setTotal] = useState([]);
    const [v, setV] = useState();

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
                            email: value.user.email
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
                            email: value.user.email
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

    async function porValor(){
    }
    
    useEffect(()=>{
        let i = 0;
        dataPedido.map(valor =>{
            i += parseFloat(valor.preco);
        });
        setV(i);
    },[dataPedido]);

    function addPedido(data){
        setDataPedidos([...dataPedido, data]);
    }

    async function removeItem(item){ 
        setDataPedidos(dataPedido.filter(p => p !==item));
    }

    const confirmarPedido = () => {
        setDataPedidos([]);
    }

    return (
        <AuthContext.Provider value={{
            porValor, 
            dataPedido, 
            signed: !!user, 
            user, 
            cadastrar, 
            logar, 
            loading, 
            deslogarUsuario, 
            addPedido, 
            removeItem,
            confirmarPedido
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export default authProvider;