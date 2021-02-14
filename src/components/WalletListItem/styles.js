import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   alinhamentoItem:{
       //height: "90%",
        marginTop: 10,
        flexDirection: "row",
        width: "95%",
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
        elevation: 11,
        margin: 10
    },item:{
        width: "85%"
    }, lixeira:{
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default styles;