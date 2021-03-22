import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    Profile:{
        padding: "10%",
        width: "90%",
        borderRadius: 25,
        // translateY: '50%',
        top: "15%",
        backgroundColor: "#fff",
        elevation: 3
    },

    card:{
        height: "50%",
        width: "100%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    deslogarUsuario:{
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#d63b5d",
        borderRadius: 35,
        padding: 10
    },fontButton:{
        color: "#fff",
        fontWeight: "bold"
    },

    containerButtons:{
        padding: 20,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        top: '20%', 
        backgroundColor: "#fff", 
        width: "90%",
        height: "50%", 
        elevation: 3
    },

    ProfileTitle:{
        color: '#fff',
        fontSize: 26
    },
});

export default styles;