import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link, router } from "expo-router";
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from "../components/button";

const Start = () => {
    router.replace('/home');
}

export default function Screen() {
    return (
        <SafeAreaView style={styles.container} >
        <View style={styles.logo}>
           <Image source={require('../assets/logo-triangular.png')} style={styles.img}/>
            <Text style={styles.text}>TechZen Store</Text>
            </View>
            {/* <Text style={styles.descricao}>Sua loja de tecnologia na palma da sua mão.</Text> */}
            <Text style={styles.subdescricao}>Sua loja de tecnologia na palma da sua mão. Conectando você com as melhores ofertas e tendências tecnológicas do mercado.</Text>

            

            <Button
                title="Começar as compras"
                onPress={Start}
            />
        

            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    img: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
    text: {
        fontSize: 35,
       
        fontWeight: 'bold',
        color: '#080a19',
       
        letterSpacing: 5,
        textAlign: 'center',
        
        

    },
    descricao: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#080a19',
        textAlign: 'center',
        marginBottom: 20,


    },
    subdescricao: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#080a19',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
        marginTop: 20,
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#ffb341',
        borderRadius: 5,
        alignItems: 'center',

        marginBottom: 20,
        justifyContent: 'center',
        marginTop: 20,
        width: 80,
        height: 50,
    }
    
   
        
})