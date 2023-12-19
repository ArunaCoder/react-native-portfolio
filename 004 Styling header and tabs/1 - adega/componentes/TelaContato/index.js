import { ScrollView, Text, View } from "react-native";
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';

import estilos from './estilos';

export default function Telacontato() {
    return (
        <ScrollView style={estilos.container}>
            <View style={estilos.cardsContainer}>
                <Text style={estilos.titulo}>Entre em contato conosco para comprar nossos produtos</Text>
                <View style={estilos.cardBox}>
                    <FontAwesome name="phone" size={40} color="#451a27" />
                    <Text style={estilos.tituloCard}>Telefone:</Text>
                    <Text style={estilos.paragrafo}>+55 21 00000000</Text>
                </View>
                <View style={estilos.cardBox}>
                    <Entypo name="location-pin" size={40} color="#451a27" />
                    <Text style={estilos.tituloCard}>Endereço:</Text>
                    <Text style={estilos.paragrafo}>Avenica 123, 222 - Rio de Janeiro RJ</Text>
                </View>
                <View style={estilos.cardBox}>
                    <MaterialIcons name="email" size={40} color="#451a27" />
                    <Text style={estilos.tituloCard}>Email:</Text>
                    <Text style={estilos.paragrafo}>preferida@adega.com.br</Text>
                </View>
                <View style={estilos.cardBox}>
                    <Entypo name="instagram" size={40} color="#451a27" />
                    <Text style={estilos.tituloCard}>Instagram:</Text>
                    <Text style={estilos.paragrafo}>@adegapreferida</Text>
                </View>
            </View>
        </ScrollView>
    )
}