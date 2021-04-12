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
        height: "5%",
        margin: 5
    },

    textSeuPedido:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 15,
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

    container:{
        height:'100%', 
        width:'100%', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    buttonVoltar:{
        flexDirection: 'row',
        marginTop: 15,
        width: "40%",
        height: 60,
        borderRadius: 5,
        backgroundColor: "#fff",
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E98000'
    },

    pedidos: {
        borderRadius: 30,
        margin:10,
        width: "90%",
        height: "90%",
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 2.30,
        shadowRadius: 6.68,
        elevation: 5
    },

    cardEmpty:{
        width: 250,
        height: 250,
        borderRadius: 30,
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
    },textEmpty:{
        fontSize: 26,
        fontWeight:'bold'
    }

});

export default styles;