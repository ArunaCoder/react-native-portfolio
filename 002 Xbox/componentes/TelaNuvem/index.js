import { Text, Image, ImageBackground } from 'react-native';

import Fundo from '../../assets/fundo-xcloud.png'
import styles from './styles'

import xcloud from '../../assets/xcloud-2.png'

export default function TelaNuvem() {
    return (<ImageBackground
        source={Fundo}
        style={styles.container}
    >
        <Text style={styles.titulo}>
            Xbox Cloud Gaming
        </Text>
        <Text style={styles.subtitulo}>
            Serviço de streaming de jogos
        </Text>
        <Text style={styles.paragraph}>
            Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.
        </Text>
        <Text style={styles.paragraph}>
            Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.
        </Text>
        <Text style={styles.paragraph}>
            Através de uma assinatura você terá um XBOX virtual sempre que precisar.
        </Text>
        <Image source={xcloud} style={styles.image}
        />
    </ImageBackground>
    );
}