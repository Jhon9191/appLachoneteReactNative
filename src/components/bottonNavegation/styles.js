import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
    headerStyle:{
        width: "100%",
        backgroundColor: "#FFFFFF",
        height: "13%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },

    botoesStyle:{
        borderRadius: 5,
        width: 125,
        height: 45,
        margin: 6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E98000",
        flexDirection: "row"
    },

    textButton:{
        color: "#FFF", 
        marginStart: 2, 
        fontWeight: "bold"
    },


});

export default styles;