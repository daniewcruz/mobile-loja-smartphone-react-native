import { Link } from "expo-router";
import { Product } from "../types/product"
import { View, Text, Pressable, StyleSheet, Image } from "react-native"

type Props = {

    data: Product
}

export default function ProductItem({data}: Props) {
    return(
    //rota dinamica para o produto especifico      
    <Link href={`/product/${data.id}`} asChild>
    <Pressable style={styles.container}>
        <Image
        style={styles.img}
        source={{uri: data.image}}
        resizeMode="cover"
        />
        <View style={styles.info}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.price}>R${data.price.toFixed(2)}</Text>
        </View>
    </Pressable>
    </Link>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 150,
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 2,
        alignItems: 'center'
    },

    img: {
        width: 130,
        height: 120,
        borderRadius: 10,
        backgroundColor: '#CCCCCCC'
    },

    info: {
        flex: 1,
        marginLeft: 20
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },

    description: {
        fontSize: 14,
        marginBottom: 5,
        color: '#414141'
    },

    price: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        marginTop: 10,  
    }

})