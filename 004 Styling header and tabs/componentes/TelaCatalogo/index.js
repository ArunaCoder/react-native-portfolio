import { ScrollView, Image, Text, View } from "react-native";

import imgVinhoBranco from '../../assets/vinho-branco.jpg'
import imgVinhoRose from '../../assets/vinho-rose.jpg'
import imgVinhoTinto from '../../assets/vinho-tinto.jpg'
import imgVinhoEspecial from '../../assets/vinho-especial.jpg'

import estilos from "./estilos";

export default function TelaCatalogo() {
    return (
        <ScrollView style={estilos.container}>
            <Text style={estilos.titulo}>Nossos vinhos</Text>
            <Text style={estilos.paragrafo}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.</Text>
            <View style={estilos.card}>
                <Image source={imgVinhoBranco} style={estilos.imgVinho} />
                <View style={estilos.cardBoxDescricao}>
                    <Text style={estilos.tituloCard}>Chatigny Chardonnay</Text>
                    <Text style={estilos.paragrafoCard}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
                </View>
            </View>
            <View style={estilos.card}>
                <Image source={imgVinhoRose} style={estilos.imgVinho} />
                <View style={estilos.cardBoxDescricao}>
                    <Text style={estilos.tituloCard}>Concha y Toro Exportacion</Text>
                    <Text style={estilos.paragrafoCard}>Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.</Text>
                </View>
            </View>
            <View style={estilos.card}>
                <Image source={imgVinhoTinto} style={estilos.imgVinho} />
                <View style={estilos.cardBoxDescricao}>
                    <Text style={estilos.tituloCard}>Portada Winemaker's</Text>
                    <Text style={estilos.paragrafoCard}>Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi.Perfeito com queijo parmesão e carnes assadas ou grelhadas.</Text>
                </View>
            </View>
            <View style={estilos.card}>
                <Image source={imgVinhoEspecial} style={estilos.imgVinho} />
                <View style={estilos.cardBoxDescricao}>
                    <Text style={estilos.tituloCard}>Elvio Cogno Ravera Barolo</Text>
                    <Text style={estilos.paragrafoCard}>Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.</Text>
                </View>
            </View>
                <Text></Text>
        </ScrollView>
    )
}