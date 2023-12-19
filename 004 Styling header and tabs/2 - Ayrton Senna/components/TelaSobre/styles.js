import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    paragraph: {
        color: '#777',
        fontWeight: 'bold'
    },
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold',

    },
    header: {
        padding: 30,
    },
    capa: {
        width: 330,
        height: 190,
        marginBottom:10,
        borderRadius:5
    },
    container: {
        flex: 1
    },
    card: {
        marginBottom: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center'
    },
    cardImg: {
        width: 100,
        height: 100
    },
    cardText: {
        padding: 15,
        flex: 1,
    }
})

export default styles