import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   alinhamentoItem:{
       //height: "90%",
        marginTop: 10,
        flexDirection: "row",
        width: "95%",
        padding: 15,
        backgroundColor: "#FFFFFF",
        //borderRadius: 5,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 7,
        // },
        // shadowOpacity: 2.30,
        // shadowRadius: 6.68,
        // elevation: 4,
        borderBottomColor: "#E98000",
        borderBottomWidth: 1,
        margin: 10
    },item:{
        width: "55%"    
    }, lixeira:{
        // backgroundColor: "rgba(0,0,0,1)",
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    }, value:{
        fontSize: 20,
        fontWeight: 'bold',
        color: "#E98000",
        marginEnd: 5
    },itemValue:{
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default styles;