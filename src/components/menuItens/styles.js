import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        height: 80,
        flexDirection: 'row',
        marginTop: 15,
        width: "90%",
        backgroundColor: "#FFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.50,
        shadowRadius: 6.68,
        margin: 10
    },

    produto:{
        width: "75%",
        padding: 5,
    },

    addButton:{
        backgroundColor: "#d47a0c",
        width: "25%",
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center'
    },
 
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#E98000",
    },

    acrecimosWindow: {
        width: "90%", 
        height: 600,
        borderRadius: 40,
        backgroundColor: "#FFFFFF", 
        justifyContent: "center", 
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.50,
        shadowRadius: 6.68,
        elevation: 5,
    },

    opcoes:{
        height: "85%"
    },

    botoesFuncoes:{
        height: "10%",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },

    itensList:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },itenListText:{
        fontSize: 20,
        fontWeight: 'bold',
    } , 

    line:{

        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        borderBottomColor: "#E98000",
        borderBottomWidth: 1,

    },

    botaoClose:{
        backgroundColor: "#FF2800",
        padding: 10,
        borderRadius: 20,
        margin: 10
    },textClose:{
        color:"#FFFFFF",
    },

    botaoConfirmar:{
        backgroundColor: "#32CD32",
        padding: 10,
        borderRadius: 20,
        margin: 10
    },textConfirmar:{
        color:"#FFFFFF",
    },



});

export default styles;