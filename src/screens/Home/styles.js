import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#E98000",
    },subContainer: {
        width: '85%',
        flexDirection: 'row',
        flexWrap: 'wrap', 
    },

    addButton: {
        backgroundColor: "#FFF",
        width: "100%",
        height: 150,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    space: {
        width: '50%',
        padding: 12
    },

    msgUser:{
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },


});

export default styles;