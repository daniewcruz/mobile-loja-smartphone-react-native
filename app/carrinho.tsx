import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';



export default function Carrinho({ cartItems }) {



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seu Carrinho</Text>
            {cartItems.length === 0 ? (
                <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
            ) : (
                <FlatList
                    data={cartItems}
                    keyExtractor={(item) => item.id.toString()} // Certifique-se de que cada item tenha um 'id'
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    emptyText: {
        fontSize: 18,
        color: '#757575',
        textAlign: 'center',
        marginTop: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    itemName: {
        fontSize: 18,
    },
    itemPrice: {
        fontSize: 18,
        color: '#ffb341',
    },
});
