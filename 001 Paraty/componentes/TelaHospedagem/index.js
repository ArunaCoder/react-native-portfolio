import { View, Text, Image} from 'react-native';

import hospedagem1 from '../../assets/hospedagens/hospedagem01.png'
import hospedagem2 from '../../assets/hospedagens/hospedagem02.png'
import hospedagem3 from '../../assets/hospedagens/hospedagem03.png'

import styles from './estilos'


export default function TelaHospedagem() {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Pousadas e Hotéis em Paraty</Text>
            <Text style={ styles.paragraph }>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>
            <View style={ styles.card }>
                <Image source={ hospedagem1 } style= { styles.img }/>
                <Text style={ styles.titleCard }>Pousada Missanga</Text>
                <Text>Valor médio: R$ 350,00</Text>
                <Text>Localização: Próx. à Av. Roberto Silveira</Text>
            </View>
            <View style={ styles.card }>
                <Image source={ hospedagem2 } style= { styles.img }/>
                <Text style={ styles.titleCard }>Pousada Morro do Forte</Text>
                <Text>Valor médio: R$ 450,00</Text>
                <Text>Localização: Próximo à Praia - Pontal</Text>
            </View>
            <View style={ styles.card }>
                <Image source={ hospedagem3 } style= { styles.img }/>
                <Text style={ styles.titleCard }>Pousada Porto Imperial</Text>
                <Text>Valor médio: R$ 550,00</Text>
                <Text>Localização: Centro Histórico</Text>
            </View>
        </View>

    );
}