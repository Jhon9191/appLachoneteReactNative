import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        opacity: 0.8,
        //backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        tintColor: '#1F1F1F',
        width: 100,
        height: 100
    },

    input: {
        padding: 5 ,
        width: 300,
        height: 50,
        color: '#1F1F1F',
        borderWidth: 1,
        //backgroundColor: "#fff",
        opacity: 0.85,
        paddingStart: 15,
        borderColor: "#1F1F1F",
        borderRadius: 50,
        margin: 5
    },

    button: {
        margin: 5,
        width: 300,
        height: 50,
        opacity: 1,
        backgroundColor: "#fff000",
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 16
    },

    buttonCadastrar: {
        color: '#FFFFFF',
        fontWeight: "bold",
        fontSize: 16
    },

    walp: {
       // width: 1280 ,
        //height: 720,]
        backgroundColor: '#222222',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },

    re: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff"
    }

});

export default styles;