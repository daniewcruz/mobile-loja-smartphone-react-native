import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, ScrollView, View, Image } from "react-native";
import { Stack, useLocalSearchParams, router } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";

export default function Screen() {

    const {id} = useLocalSearchParams();
    const idproduct = parseInt(id as string);

    const product = getProductById(idproduct);
    if(!product) return router.back();

    const comprar = () => {
        alert('Foi adicionado ao carrinho: ' + product.title);
    }
    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area}>
                <Image
                style={styles.img}
                source={{uri: product.image}}
                resizeMode="cover"
                />

<Text style={styles.title}> {product.title}</Text>
                <Text style={styles.description}> {product.description} </Text>

                <View style={styles.pricearea}>
                <Text style={styles.price}>R${product.price.toFixed(2)} </Text>
                </View>
            </ScrollView>
            <View style={styles.buttonarea}>
                <Button
                    title="Comprar agora"
                    onPress={comprar}
                />
               
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    area: {
        flex: 1,
        padding: 20,
    },
    buttonarea: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 60
        
    },
    img: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        borderRadius: 10,
        backgroundColor: '#CCCCCCC',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 10
    },
    description: {
        fontSize: 15,
        color: '#5555555',
        marginTop: 10,
        marginBottom: 20
    },
    pricearea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#cccccc',


    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
       
    },
    

})