import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        opacity: 0.8,
        //backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        tintColor: '#FFFFFF',
        width: 150,
        height: 150
    },

    input: {
        padding: 5 ,
        width: 300,
        height: 50,
        color: '#fff',
        backgroundColor: "#000000",
        opacity: 0.85,
        borderRadius: 10,
        margin: 5
    },

    button: {
        margin: 5,
        width: 300,
        height: 50,
        backgroundColor: "#ccb600",
        borderRadius: 10,
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
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
    },

    re: {
        flex: 1,
        flexDirection: "column"
    }

});

export default styles;