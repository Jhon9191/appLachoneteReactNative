import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //345D7E
        //E24E42
        backgroundColor: "#E98000",    
    },
    conteudo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardapido: {
        borderRadius: 30,
        margin:10,
        width: "90%",
        height: "80%",
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 2.30,
        shadowRadius: 6.68,
        elevation: 5
    },buttonVoltar:{
        flexDirection: 'row',
        marginTop: 15,
        width: "40%",
        height: 60,
        borderRadius: 5,
        backgroundColor: "#FFF",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 2.30,
        shadowRadius: 6.68,
        elevation: 11
    },textVoltar:{
        margin: 15,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#E98000'
    }

});

export default styles;