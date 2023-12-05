import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#E6E6E6',
        padding: 50
    },
    section: {
        marginBottom: 10,
        alignItems: 'center'
    },
    img: {
        height: 170,
        width: 170,
        marginRight: 10,
    },
    titulo: {
        fontSize: 28,
        color: '#0e7a0d',
        textAlign: 'center',
        fontWeight: '600',
        textTransform: 'uppercase'
    },
    subtitulo: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        marginVertical: 10
    },
    paragrafo: {
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 20
    },
    textCard: {
        color: 'white',
    }
});

export default styles