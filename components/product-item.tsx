import { Link } from "expo-router";
import { Product } from "../types/product";
import { View, Text, Pressable, StyleSheet, Image, Alert } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';
import { ToastAndroid, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native'; // Importar useFocusEffect

type Props = {
    data: Product;
}

export default function ProductItem({ data }: Props) {
    const [isFavorite, setIsFavorite] = useState(false);

    // Função para carregar os favoritos
    const loadFavorites = async () => {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        setIsFavorite(favorites.includes(data.id));
    };

    useFocusEffect(
        React.useCallback(() => {
            loadFavorites(); // Carregar favoritos quando a página é focada
        }, [])
    );

    const toggleFavorite = async () => {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

        if (favorites.includes(data.id)) {
            const newFavorites = favorites.filter((id: number) => id !== data.id);
            await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
            setIsFavorite(false);
            showToast("Produto removido dos favoritos");
        } else {
            favorites.push(data.id);
            await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
            showToast("Produto adicionado aos favoritos");
        }
    };

    const showToast = (message: string) => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(message, ToastAndroid.SHORT);
        } else {
            Alert.alert(message);
        }
    };

    return (
        <Link href={`/product/${data.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    style={styles.img}
                    source={{ uri: data.image }}
                    resizeMode="cover"
                />
                <View style={styles.info}>
                    <Pressable onPress={toggleFavorite} style={styles.favorite}>
                        <FontAwesome name={isFavorite ? "heart" : "heart-o"} size={22} color="#ffb341" />
                    </Pressable>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
                </View>
            </Pressable>
        </Link>
    );
}




const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 160,
        marginTop: 5,
        marginBottom: 5,
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
        marginBottom: 5,
        marginRight: 28,
        top: 5
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
    },

    favorite: {
        position: 'absolute',
        right: 2,
        bottom: 3,
        top: 2,
        height: 28,
        width: 28,
        
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        
    }

})