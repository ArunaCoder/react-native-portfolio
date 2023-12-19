import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
    },
    boxNumeros: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
    },
    containerNumeros: {
        width: 340,
        marginBottom: 50,
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 20

    },
    numeros: {
        color: '#eecb01',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10,
        marginRight: 5,
    },
    descricao: {
        color: '#a6a6a6',
        marginLeft: 10,
        textTransform: 'uppercase',
        fontSize: 16
    },
    cardImagem: {
        backgroundColor: 'rgba(30,30,30,0.8)',
        marginBottom: 20
    },

    imagem: {
        width: 300,
        height: 200,
    },
    title: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    campeonato: {
        color: '#fff',
        padding: 15,
        fontSize: 16,
        textAlign: 'center'
    },
    paragrafo: {
        color: '#aaa',
        textAlign: 'center',
        marginBottom: 30,
    }
})

export default styles