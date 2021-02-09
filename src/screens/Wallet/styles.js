import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },

    conteudo:{
        justifyContent: 'center',
        alignItems: 'center'
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
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: 2.5,
        borderRadius: 30,
        margin: 15

    }

});

export default styles;