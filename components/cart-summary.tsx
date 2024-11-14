import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartItemType } from '../types/cart';  // Tipagem do item

interface CartSummaryProps {
    cartItems: CartItemType[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        marginTop: 10,
    },
    totalText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
    },
});

export default CartSummary;
