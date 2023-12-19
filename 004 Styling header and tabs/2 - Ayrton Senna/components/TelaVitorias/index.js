import { ScrollView, Image, View, Text, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles'
import Vitoria1 from '../../assets/vitoria1.jpg'
import Vitoria2 from '../../assets/vitoria2.jpg'
import Vitoria3 from '../../assets/vitoria3.jpg'
import ImgFundo from '../../assets/corrida1.jpg'


export default function TelaVitorias() {
    return (
        <ScrollView>
            <ImageBackground
                source={ImgFundo}
                blurRadius={5}
                style={styles.container}>
                <View style={styles.containerNumeros}>
                    <Text style={styles.title}>Senna em Números</Text>
                    <Text style={styles.paragrafo}>Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991, e ganhou 41 Grandes Prêmios e 65 pole positions.</Text>
                    <View style={styles.boxNumeros}>
                        <FontAwesome5 name='trophy' color={'#ceb105'} size={25} />
                        <Text style={styles.numeros}>161</Text><Text style={styles.descricao}>GPS disputados</Text>
                    </View>
                    <View style={styles.boxNumeros}>
                        <FontAwesome5 name='trophy' color={'#ceb105'} size={25} />
                        <Text style={styles.numeros}>65</Text><Text style={styles.descricao}>Pole positions</Text>
                    </View>
                    <View style={styles.boxNumeros}>
                        <FontAwesome5 name='trophy' color={'#ceb105'} size={25} />
                        <Text style={styles.numeros}>41</Text><Text style={styles.descricao}>Vitórias</Text>
                    </View>
                    <View style={styles.boxNumeros}>
                        <FontAwesome5 name='trophy' color={'#ceb105'} size={25} />
                        <Text style={styles.numeros}>3X</Text><Text style={styles.descricao}>Campeão mundial</Text>
                    </View>
                </View>

                <View style={styles.cardImagem}>
                    <Text style={styles.campeonato}>Campeonato Mundial - 1998</Text>
                    <Image
                        source={Vitoria1}
                        style={styles.imagem} />
                </View>
                <View style={styles.cardImagem}>
                    <Text style={styles.campeonato}>Campeonato Mundial - 1990</Text>
                    <Image
                        source={Vitoria2}
                        style={styles.imagem} />
                </View>
                <View style={styles.cardImagem}>
                    <Text style={styles.campeonato}>Campeonato Mundial - 1991</Text>
                    <Image
                        source={Vitoria3}
                        style={styles.imagem} />
                </View>


            </ImageBackground>
        </ScrollView>
    )
}