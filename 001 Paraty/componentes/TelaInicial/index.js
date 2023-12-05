import { View, Text, Image, Button } from 'react-native';
import Paraty from '../../assets/01.png'

import styles from './estilos'

export default function TelaInicial(props) {
    return (
        <View style={ styles.container }>
            <View style={ styles.card }>
                <Text style={ styles.title }>Paraty</Text>
                <Text style={ styles.paragraph }>Saiba o que visitar em Paraty.</Text>
                <Image source={ Paraty } style= { styles.img }/>
                <View style= { styles.containerButton}>
                    <Button
                    title="Ver restaurantes"
                    color="#372d00"
                    onPress= { ()=> props.navigation.navigate('Restaurantes')}
                    />
                </View>
                <View style= { styles.containerButton}>
                    <Button
                    title="Ver passeios"
                    color="#372d00"
                    onPress= { ()=> props.navigation.navigate('Passeios')}
                    />
                </View>
                <View style= { styles.containerButton}>
                    <Button
                    title="Ver hospedagem"
                    color="#372d00"
                    onPress= { ()=> props.navigation.navigate('Hospedagem')}
                    />
                </View>
            </View>
        </View>
    );
};