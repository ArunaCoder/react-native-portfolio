import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    image: {
        width: 280,
        height: 140,
        borderRadius: 10
    },
    titulo: {
        fontSize: 28,
        color: '#139e11',
        textAlign: 'center',
        fontWeight: '600',
    },
    subtitulo: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600',
        marginVertical: 10,
        color: '#fff',
        marginBottom: 20
    },
    paragraph: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10
    }
})

export default styles