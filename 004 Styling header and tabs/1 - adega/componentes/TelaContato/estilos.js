import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    titulo: {
        color: '#451a27',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginBottom:30

    },
    tituloCard: {
        color: '#451a27',
        fontSize: 20,
        fontWeight: 'bold',
        // marginBottom: 10,
        textAlign: 'center'
    },
    paragrafo: {
        color: '#451a27',
        fontSize: 16,
        textAlign: 'center'
    },
    cardsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardBox: {
        // height: 150,
        padding: 20,
        marginBottom: 10,
        width: 300,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        borderStyle: 'dotted',
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default estilos