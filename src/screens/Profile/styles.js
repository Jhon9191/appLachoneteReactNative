import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1F1F1F"
    },

    buttons:{
        margin: 5,
        backgroundColor: "#343438",
        borderRadius: 5,
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    
    buttononConfirmar:{
        margin: 5,
        backgroundColor: "#32CD32",
        borderRadius: 5,
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10  
    },

    buttonsDeslogar:{
        margin: 5,
        backgroundColor: "#d63b5d",
        borderRadius: 5,
        width: '70%',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10  
    },

    profileContainerPhoto:{
        alignItems: 'center',
        justifyContent: 'center',
    }, positionIcon:{
        left: "10%",
        bottom: "10%",
        backgroundColor: "#FFF",
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: '#fff',
        // borderWidth: 2
    } ,

    profilePhoto:{
        width: 150,
        height: 150,
        borderRadius: 100
    },

    profileText:{
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
        margin: 4
    },

});

export default styles;