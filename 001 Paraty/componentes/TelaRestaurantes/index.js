import { View, Text, Image} from 'react-native';

import Restaurante1 from '../../assets/restaurantes/restaurante01.png'
import Restaurante2 from '../../assets/restaurantes/restaurante02.png'
import Restaurante3 from '../../assets/restaurantes/restaurante03.png'

import styles from './estilos'


export default function TelaRestaurantes() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Bares e restaurantes</Text>
            <Text style={ styles.paragraph }>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurants, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confiraalguns bares e restaurantes famosos.</Text>
            <View style={ styles.card }>
                <Image source={ Restaurante1 } style= { styles.img }/>
                <Text style={ styles.titleCard }>Armazém Mar</Text>
                <Text>Localização: Rod. Rio-Santos</Text>
            </View>
            <View style={ styles.card }>
                <Image source={ Restaurante2 } style= { styles.img }/>
                <Text style={ styles.titleCard }>Bendita's Restaurante</Text>
                <Text>Localização: Centro Histórico</Text>
            </View>
            <View style={ styles.card }>
                <Image source={ Restaurante3 } style= { styles.img }/>
                <Text style={ styles.titleCard }>Sereia do Mar Pizza-bar</Text>
                <Text>Localização: Praia do Jabaquara</Text>
            </View>
        </View>

    );
}