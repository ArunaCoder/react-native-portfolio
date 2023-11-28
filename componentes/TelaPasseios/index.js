import { View, Text, Image} from 'react-native';

import Passeio1 from '../../assets/passeios/passeio01.png'
import Passeio2 from '../../assets/passeios/passeio02.png'
import Passeio3 from '../../assets/passeios/passeio03.png'

import styles from './estilos'


export default function TelaPasseios() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Passeios em Paraty</Text>
            <Text style={ styles.paragraph }>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja três exemplos:</Text>
            <View style={ styles.card }>
                <Text style={ styles.titleCard }>Tirolesa</Text>
                <Image source={ Passeio1 } style= { styles.img }/>
            </View>
            <View style={ styles.card }>
                <Text style={ styles.titleCard }>Rafting</Text>
                <Image source={ Passeio2 } style= { styles.img }/>
            </View>
            <View style={ styles.card }>
                <Text style={ styles.titleCard }>Canoagem no mangue</Text>
                <Image source={ Passeio3 } style= { styles.img }/>
            </View>
        </View>

    );
}