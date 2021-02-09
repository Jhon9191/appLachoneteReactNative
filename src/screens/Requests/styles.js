import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        //345D7E
        //E24E42
        backgroundColor: "#E98000",    
    },
    nav: {
        width: '90%',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        margin: 10
    
    },
    
    menu: {
        margin: 10,
        alignSelf: 'flex-end',
        justifyContent: 'flex-end'
    },

    conteudo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardapido: {
        borderRadius: 30,
        width: "90%",
        height: "90%",
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.50,
        shadowRadius: 6.68,
        elevation: 11,
    },

});

export default styles;