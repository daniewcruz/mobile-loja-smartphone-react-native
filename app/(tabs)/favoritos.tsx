
import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { data } from '../../data'; 

const Favoritos = () => {
  // Simulação de produtos favoritados (em um cenário real, isso viria de um banco de dados ou armazenamento local)
  const [favoritos, setFavoritos] = useState([1, 3, 5]); // IDs dos produtos favoritados

  // Filtra os produtos favoritados
  const produtosFavoritados = data.products.filter(product => favoritos.includes(product.id));

  // Renderiza cada item favoritado
  const renderProduto = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemoveFavorite(item.id)}
        >
          <Text style={styles.removeButtonText}>Remover dos Favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Função para remover um item dos favoritos
  const handleRemoveFavorite = (id: number) => {
    setFavoritos(favoritos.filter(favId => favId !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Produtos Favoritados</Text>
      {produtosFavoritados.length === 0 ? (
        <Text style={styles.emptyMessage}>Você não tem produtos favoritados no momento.</Text>
      ) : (
        <FlatList
          data={produtosFavoritados}
          renderItem={renderProduto}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  removeButton: {
    marginTop: 10,
    backgroundColor: '#ffb341',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyMessage: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default Favoritos;
