import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        //345D7E
        //E24E42
        backgroundColor: "#E98000",    
    },
    nav: {
        marginTop: 10,
        width: '90%',
        height: "5%",
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        elevation: 5
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
    },

});

export default styles;