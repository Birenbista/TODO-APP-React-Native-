import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#77c6d4',
        margin: 10,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#bcbcbc'
    },
    text: {
        fontSize: 14,
        marginBottom: 5,
    },
    completedText: {
        color: 'green',
        fontWeight: 'bold',
    },
    openText: {
        color: '#ad312d',
        fontWeight: 'bold',
    },
    modalContaier: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.35)'
    },
    modalBox: {
        backgroundColor: 'white',
        padding: 10,
        width: '60%',
        borderRadius: 5,
        elevation: 50,
        shadowOpacity: 5,
        flexDirection: 'row',

    },
    closeModal: {
        backgroundColor: 'red',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,

    },

    closeDelete: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    data: {

        flexDirection: 'column',
        width: '100%'
    },

    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },


});