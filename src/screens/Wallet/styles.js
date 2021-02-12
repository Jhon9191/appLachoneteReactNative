import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#E98000",
        justifyContent: 'center',
        alignItems: 'center'
    },

    conteudo:{
        justifyContent: 'center',
        alignItems: 'center',
        height: "5%"
    },

    textSeuPedido:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 15,
        marginLeft: 15,
        fontSize: 30,
        fontWeight: "bold"
    },

    line:{
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 2.5,
        borderRadius: 30,
        margin: 15

    },

    pedidos: {
        alignItems: 'center',
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
    },alinhamentoItem:{
        marginTop: 15,
        flexDirection: "row",
        width: "90%",
        padding: 15,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 2.30,
        shadowRadius: 6.68,
        elevation: 5
    },item:{
        width: "85%"
    }, lixeira:{
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default styles;