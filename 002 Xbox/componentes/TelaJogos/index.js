import { ScrollView, View, Text, ImageBackground } from 'react-native';

import styles from './styles'

import jogo2 from '../../assets/jogo-2.png';
import jogo3 from '../../assets/jogo-3.png';
import jogo4 from '../../assets/jogo-4.png';

// import { ScrollView } from 'react-native-gesture-handler';


export default function TelaInicial() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>
                Jogos em 4k
            </Text>
            <Text style={styles.subtitulo}>
                Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.
            </Text>
            <View style={styles.jogo}>
                <ImageBackground
                    source={jogo3}
                    style={styles.thumb}
                >
                    <Text style={styles.textCard}>
                        Forza Horizon 5
                    </Text>
                </ImageBackground>
                <Text style={styles.paragrafo}>
                    Forza Horizon 5 é um jogo de corrida. É o quinto jogo da série Forza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México.
                </Text>
            </View>
            <View style={styles.jogo}>
                <ImageBackground
                    source={jogo2}
                    style={styles.thumb}
                >
                    <Text style={styles.textCard}>
                        Cyberpunk 2077

                    </Text>
                </ImageBackground>
                <Text style={styles.paragrafo}>
                    Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido e publicado pela CD Projekt.
                </Text>
            </View>
            <View style={styles.jogo}>
                <ImageBackground
                    source={jogo4}
                    style={styles.thumb}
                >
                    <Text style={styles.textCard}>
                        Halo 5: Guardians
                    </Text>
                </ImageBackground>
                <Text style={styles.paragrafo}>
                    Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.
                </Text>
            </View>
        </ScrollView>
    )
}