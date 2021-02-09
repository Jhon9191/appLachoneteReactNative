import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        height: 80,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 15,
        width: "90%",
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.50,
        shadowRadius: 6.68,
        elevation: 11,
        margin: 10
    },

    produto:{
        width: "75%",
        padding: 5,
    },

    addButton:{
        backgroundColor: "#d47a0c",
        width: "25%",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },


    lanche: {
        fontSize: 14
    },

    price: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#E98000"
    }

});

export default styles;