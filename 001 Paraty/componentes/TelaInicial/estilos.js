import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    img: {
        height: 200,
        width: 300,
        marginBottom: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#e1e3e4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        width: 320,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center'
    },
    paragraph: {
        marginBottom: 20,
        textAlign: 'center'
    },
    containerButton: {
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#372d00'
    },
})

export default styles;