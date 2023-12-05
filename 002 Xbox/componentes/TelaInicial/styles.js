import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2c2e2d',
        padding: 50
    },
    img: {
        height: 80,
        width: 80,
        borderRadius: 30,
        marginRight: 10
    },
    logo: {
        borderRadius: 50,
        width: 70,
        marginBottom: 20
    },
    card: {
        backgroundColor: '#0e7a0d',
        width: 230,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 70,
        paddingVertical: 10
    },
    titulo: {
        fontSize: 22,
        color: '#0e7a0d',
        textAlign: 'center',
        fontWeight: '600'
    },
    paragrafo: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20
    },
    textCard: {
        color: 'white',
    }
});

export default styles