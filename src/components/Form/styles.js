import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: '#adbaa6',
        padding: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
    errorMessage: {
        color: '#ad312d',
        marginBottom: 10,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'flex-end'
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    loadingText: {
        color: 'black',
        fontSize: 21,
        marginTop: 10
    }
});