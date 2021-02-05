import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        opacity: 0.6,
        backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center'
    },

    image: {
        tintColor: '#FFFFFF',
        width: 150,
        height: 150
    },

    input: {
        width: 300,
        height: 50,
        backgroundColor: "#ffffff",
        opacity: 15,
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
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default styles;