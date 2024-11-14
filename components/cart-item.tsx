import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartItemType } from '../types/cart';  // Tipagem do item

interface CartItemProps {
    item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default CartItem;
