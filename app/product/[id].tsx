import { SafeAreaView } from "react-native-safe-area-context";
import { Text, StyleSheet, ScrollView, View, Image, Pressable } from "react-native";
import { Stack, useLocalSearchParams, router } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";
import { color } from "react-native-elements/dist/helpers";
import React, { useState } from "react";

export default function Screen() {

    const {id} = useLocalSearchParams();
    const idproduct = parseInt(id as string);

    const product = getProductById(idproduct);
    if(!product) return router.back();

    


    // Estado para controlar a quantidade de produtos
    const [quantidade, setQuantidade] = useState(1);

    // Função para aumentar a quantidade
    const aumentarQuantidade = () => setQuantidade(prev => prev + 1);

    // Função para diminuir a quantidade, garantindo que não fique negativa
    const diminuirQuantidade = () => setQuantidade(prev => (prev > 1 ? prev - 1 : 1));







    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: '' }} />

            <View style={styles.container}>
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



                <View style={styles.colorarea}>
                <Text style={styles.colors}>Cores:  </Text>
                
                <View style={styles.colorcontainer}>
                <Pressable style={styles.color1}></Pressable> 
                <Pressable style={styles.color2}></Pressable> 
                <Pressable style={styles.color3}></Pressable>
                </View>





                {/* Controle de quantidade de produtos */}
                <View style={styles.quantidadeContainer}>
                        {/* Botão de diminuir quantidade */}
                        <Pressable style={styles.quantidadeBotao} onPress={diminuirQuantidade}>
                            <Text style={styles.quantidadeTexto}>-</Text>
                        </Pressable>

                        {/* Exibição da quantidade atual */}
                        <Text style={styles.quantidadeNumero}>{quantidade}</Text>

                        {/* Botão de aumentar quantidade */}
                        <Pressable style={styles.quantidadeBotao} onPress={aumentarQuantidade}>
                            <Text style={styles.quantidadeTexto}>+</Text>
                        </Pressable>
                    </View>

                    </View>





                

            <View style={styles.buttonarea}>
                
                <Pressable style={styles.addtocartbutton1} >
                    <Text style={styles.addtocart1}>Comprar agora</Text>
                 </Pressable>   
                <Pressable style={styles.addtocartbutton} onPress={() => alert('Foi adicionado ao carrinho: ' + product.title)}>
                   <Text style={styles.addtocart}>Adicionar ao carrinho</Text> 
                </Pressable>
            </View>

            </ScrollView>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        
    },
    area: {
        flex: 1,
        padding: 20,
    },
    buttonarea: {
        padding: 20,
        width: '100%',
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
        marginTop: 0
    },
    description: {
        fontSize: 15,
        color: '#5555555',
        marginTop: 10,
        marginBottom: 5
    },
    pricearea: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
       
    },

    colorarea: {
        padding: 10,
        borderRadius: 10,
        width: 345,
        height: 60,
        marginBottom: 20,
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 0,
    },

    colors: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 3
    },

    colorcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    color1: {
        backgroundColor: '#000000f4',
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10
    },

    color2: {
        backgroundColor: '#1430cff4',
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10
    },

    color3: {
        backgroundColor: '#adadadf4',
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10
    },
  
    addtocartbutton1: {
        backgroundColor: '#ffb341',
        padding: 10,
        borderRadius: 10,
        width: 330,
        alignItems: 'center',
        justifyContent: 'center',
    },


    addtocart1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#080a19',
    },
    addtocartbutton: {
        backgroundColor: '#080a19',
        padding: 10,
        borderRadius: 10,
        width: 330,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    addtocart: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },


    // Estilo para o controle de quantidade de produtos
    quantidadeContainer: {
        
        flexDirection: 'row', // Coloca os botões e o texto na horizontal
        justifyContent: 'flex-end', // Centraliza horizontalmente
        alignItems: 'center', // Centraliza verticalmente
        marginBottom: 20, // Espaçamento inferior
        marginTop: -30 // Espaçamento superior
    },
    quantidadeBotao: {
        backgroundColor: '#080a19', // Cor de fundo dos botões de aumentar/diminuir
        padding: 1, // Preenchimento interno dos botões
        height: 30, // Altura dos botões
        width: 30, // Largura dos botões
        alignItems: 'center', // Centraliza os textos dentro dos botões
        justifyContent: 'center', // Centraliza os textos dentro dos botões
        borderRadius: 5, // Borda arredondada
        marginHorizontal: 10, // Espaçamento entre os botões e o número
    },
    quantidadeTexto: {
        color: '#fff', // Cor do texto dentro dos botões
        fontSize: 20, // Tamanho da fonte
        fontWeight: 'bold', // Texto em negrito
    },
    quantidadeNumero: {
        fontSize: 20, // Tamanho da fonte do número de produtos
        fontWeight: 'bold', // Negrito no número
        color: '#000', // Cor do número
    },
    

})