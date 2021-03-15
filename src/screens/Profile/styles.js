import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: "#E98000",
    },

    Profile:{
        padding: 25,
        width: "90%",
        borderRadius: 25,
        translateY: 100,
        backgroundColor: "#fff",
        elevation: 15
    },

    card:{
        height: "50%",
        width: "100%",
        borderBottomLeftRadius: 45,
        borderBottomRightRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
    },

    deslogarUsuario:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FEBA67",
        borderRadius: 35,
        padding: 10
    },fontButton:{
        color: "#fff",
        fontWeight: "bold"
    }

});

export default styles;