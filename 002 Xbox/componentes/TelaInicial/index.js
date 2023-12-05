import { Image, View, Text, Pressable } from 'react-native';

import styles from './styles'

import logo from '../../assets/logo.png';
import xcloud1 from '../../assets/xcloud-1.png';
import jogo1 from '../../assets/jogo-1.png';
import consoles from '../../assets/consoles.png';


export default function TelaInicial(props) {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.titulo}>Xbox</Text>
            <Text style={styles.paragrafo}>Xbox é uma marca de consoles criada pela Microsoft. Toque nos cards para conhecer.</Text>
            <Pressable
                style={styles.card}
                onPress={() => { props.navigation.navigate('Consoles') }}>
                <Image source={consoles} style={styles.img} />
                <Text style={styles.textCard}>Conheça os consoles</Text>
            </Pressable>
            <Pressable
                style={styles.card}
                onPress={() => { props.navigation.navigate('Jogos') }}>
                <Image source={jogo1} style={styles.img} />
                <Text style={styles.textCard}>Conheça os jogos</Text>
            </Pressable>
            <Pressable
                style={styles.card}
                onPress={() => { props.navigation.navigate('Nuvem') }}>
                <Image source={xcloud1} style={styles.img} />
                <Text style={styles.textCard}>Conheça o xCloud</Text>
            </Pressable>
        </View>
    )
}