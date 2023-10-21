import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles'
import { Link } from '@react-navigation/native';

export default function HomePage(){
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Seja bem-vindo</Text>
            </TouchableOpacity>
            <View style={styles.viewLinks}>
                <Link to={{screen: 'LoginPage'}}>Voltar para o Login </Link>
            </View>
        </View>
    )
}