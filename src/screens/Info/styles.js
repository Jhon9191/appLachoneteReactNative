import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#E98000",
    },

    conteudo:{
        justifyContent: 'center',
        alignItems: 'center'
    },

    text:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 15,
        marginLeft: 15,
        fontSize: 30,
        fontWeight: "bold"
    },

    itemPedido:{
        backgroundColor: "#ffffff", 
        margin: 10, 
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

});

export default styles;