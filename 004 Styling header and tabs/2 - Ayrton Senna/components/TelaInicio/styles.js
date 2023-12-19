import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 30,
        alignItems: 'center'
    },
    img: {
        width: 240,
        height: 240,
        borderRadius: 120,
        borderColor: '#000',
        borderWidth:3,
        marginBottom:40
    },
    card :{
        backgroundColor: '#000',
        borderRadius: 20,
        padding:30

    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    paragraph: {
        color: '#fff',
        textAlign: 'center'
    }
})

export default styles