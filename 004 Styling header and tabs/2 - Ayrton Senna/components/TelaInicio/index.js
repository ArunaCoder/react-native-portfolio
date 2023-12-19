import { ImageBackground, View, Image, Text } from 'react-native';

import FotoCapa from '../../assets/foto-capa.jpg'
import Fundo from '../../assets/fundo.jpg'

import styles from './styles'

export default function TelaInicio() {
    return (
        <ImageBackground
        source={Fundo}
        style={styles.container}
        blurRadius={5}
        >
            <Image source={FotoCapa} style={styles.img}/>
            <View style={styles.card}>
                <Text style={styles.title}>Ayrton Senna</Text>
                <Text style={styles.paragraph}>Através desse APP, você vai conhecer um pouco sobre quem foi esse grande piloto.</Text>
            </View>
        </ImageBackground>
    )
}