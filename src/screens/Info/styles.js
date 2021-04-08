import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
        backgroundColor: "#E98000", 
        margin: 3, 
        padding: 25,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

});

export default styles;