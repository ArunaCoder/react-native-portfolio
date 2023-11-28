import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
    },
    img: {
        width: 300,
        height: 80,
        marginBottom: 5
    },
    container: {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor: '#beceff',
        padding: 20,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 5
    },
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },
    paragraph: {
        textAlign: 'center',
        marginBottom: 20,

    }
});

export default styles;