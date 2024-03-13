import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: 'green',
        borderBottomWidth: 3,
        paddingTop: 30,
        justifyContent: 'space-between',
        margin: 5,
    },
    title: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    appName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    author: {
        fontSize: 12,

    }
});