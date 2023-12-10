import { ImageBackground, Text } from "react-native";

import estilos from './estilos'

import ImgCapa from '../../assets/capa.jpg'

export default function TelaInicial(){
    return (
        <ImageBackground
        source={ImgCapa}
        style={estilos.container}
        blurRadius={10}>
            <Text style={estilos.titulo}>Adega Preferida</Text>
            <Text style={estilos.paragrafo}>Aqui você encontra os melhores e mais saborosos vinhos</Text>
        </ImageBackground>
    )
}