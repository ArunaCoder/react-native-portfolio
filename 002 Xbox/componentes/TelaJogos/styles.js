import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
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
    thumb: {
        height: 180
    },
    titulo: {
        fontSize: 28,
        color: '#139e11',
        textAlign: 'center',
        fontWeight: '600',
    },
    subtitulo: {
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10,
        color: '#fff',
        marginBottom: 20
    },
    textCard: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor: 'hsla(0,0%,18%,0.5)'
    },
    paragrafo: {
        fontSize: 12,
        marginBottom: 20,
        color: '#fff',
        marginTop: 10
    },
    jogo: {
        marginBottom: 40
    }
});

export default styles