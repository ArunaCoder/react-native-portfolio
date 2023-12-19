import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        // paddingVertical: 20,
    },
    titulo: {
        color: '#000',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 15
    },
    paragrafo: {
        color: '#000',
        fontSize: 18,
        marginBottom: 15
        // textAlign: 'center'
    },
    tituloCard: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    paragrafoCard: {
        color: '#fff',
        // fontSize: 12,
        // textAlign: 'center'
    },
    imgVinho: {
        resizeMode: 'contain',
        height: 100,
        width: 70
    },
    card: {
        // resizeMode: 'contain',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: '#ab887c',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardBoxDescricao: {
        flex: 1
    }
})

export default estilos