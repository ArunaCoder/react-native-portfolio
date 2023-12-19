import { ScrollView, View, Image, Text } from 'react-native';

import styles from './styles';

import FotoCapa from '../../assets/foto-capa.jpg'
import ReiDaChuva from '../../assets/rei-da-chuva.png'
import ReiDeMonaco from '../../assets/rei-de-monaco.png'
import Silvastone from '../../assets/silvastone.png'
import Preparacao from '../../assets/preparacao.png'

export default function TelaSobre() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Ayrton Senna</Text>
                <Image source={FotoCapa} style={styles.capa} />
                <Text style={styles.paragraph}>
                    No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar porque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial.
                </Text>
            </View>
            <ScrollView>
                <View style={styles.card}>
                    <Image source={ReiDaChuva} style={styles.cardImg} />
                    <View style={styles.cardText}>
                        <Text style={styles.titleCard}>Rei da Chuva</Text>
                        <Text style={styles.paragraphCard}>Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={ReiDeMonaco} style={styles.cardImg} />
                    <View style={styles.cardText}>
                        <Text style={styles.titleCard}>Rei da Mônaco</Text>
                        <Text style={styles.paragraphCard}>Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={Silvastone} style={styles.cardImg} />
                    <View style={styles.cardText}>
                        <Text style={styles.titleCard}>Silvastone</Text>
                        <Text style={styles.paragraphCard}>Por seu currículo impressionante em Silversone, Ayrton recebeu o apelido de "Silvastone" pela imprensa inglesa.</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image source={Preparacao} style={styles.cardImg} />
                    <View style={styles.cardText}>
                        <Text style={styles.titleCard}>Preparação</Text>
                        <Text style={styles.paragraphCard}>Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}