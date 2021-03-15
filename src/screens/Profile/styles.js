import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    Profile:{
        padding: 25,
        width: "90%",
        borderRadius: 25,
        // translateY: '50%',
        top: "20%",
        backgroundColor: "#fff",
        elevation: 15
    },

    card:{
        height: "50%",
        width: "100%",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: "#fff",
    },

    deslogarUsuario:{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f87b0f",
        borderRadius: 35,
        padding: 10
    },fontButton:{
        color: "#fff",
        fontWeight: "bold"
    }

});

export default styles;