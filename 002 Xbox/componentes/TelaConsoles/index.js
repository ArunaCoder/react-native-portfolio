import { Image, View, Text } from 'react-native';

import styles from './styles'

import consoles from '../../assets/consoles.png';
import consoles2 from '../../assets/consoles2.png';


export default function TelaInicial() {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Image source={consoles} style={styles.img} />
                <Text style={styles.titulo}>Xbox series S</Text>
                <Text style={styles.subtitulo}>Desempenho de última geração no menor Xbox de todos os tempos.</Text>
                <Text style={styles.paragrafo}>O Series S é pra quem busca jogos de nova geração gastando pouco. é o console mais barato da nova geração. Ele é o equilibrio entre gráfico e performance.</Text>
            </View>
            <View style={styles.section}>
                <Image source={consoles2} style={styles.img} />
                <Text style={styles.titulo}>Xbox series X</Text>
                <Text style={styles.subtitulo}>O Xbox mais rápido e poderoso de todos os tempos.</Text>
                <Text style={styles.paragrafo}>O Series X é pra quem quer poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.</Text>
            </View>
        </View>
    )
}