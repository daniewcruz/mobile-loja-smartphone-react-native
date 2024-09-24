import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Link, router } from "expo-router";


export default function Screen() {
    return (
        <SafeAreaView style={styles.container} >
        <View style={styles.logo}>
           <Image source={require('../assets/logo-triangulo.png')} style={styles.img}/>
            <Text style={styles.text}>TechZen</Text>
            </View>
            {/* <Text style={styles.descricao}>Sua loja de tecnologia na palma da sua mão.</Text> */}
            <Text style={styles.subdescricao}>Sua loja de tecnologia na palma da sua mão. Conectando você com as melhores ofertas e tendências tecnológicas do mercado.</Text>

            <Pressable style={styles.button}  onPress={() => router.replace('/home')}>
                <Text style={styles.txt} >Continuar</Text>
            </Pressable>
        

            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#080a19',
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
        width: 45,
        height: 45,
        resizeMode: 'cover',
  
    },
    text: {
        fontSize: 60,
       
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: 5,
        textAlign: 'center',
        
        

    },
    descricao: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    subdescricao: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#080a19',
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: '#90F2E3',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',

        marginBottom: 20,
        justifyContent: 'center',
        marginTop: 20,

        width: 200,
        height: 50,
    }
    
   
        
})