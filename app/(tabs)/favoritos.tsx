import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { data } from '../../data';
import { useFocusEffect } from '@react-navigation/native'; // Importar useFocusEffect

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState<number[]>([]); // IDs dos produtos favoritados
  const [produtosFavoritados, setProdutosFavoritados] = useState<any[]>([]); // Produtos filtrados

  useFocusEffect(
    React.useCallback(() => {
      const loadFavorites = async () => {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
        setFavoritos(favorites);
      };

      loadFavorites();
    }, [])
  );

  // Atualizar a lista de produtos favoritados quando 'favoritos' mudar
  useEffect(() => {
    const filteredProducts = data.products.filter(product => favoritos.includes(product.id));
    setProdutosFavoritados(filteredProducts);
  }, [favoritos]);

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
  const handleRemoveFavorite = async (id: number) => {
    const updatedFavorites = favoritos.filter(favId => favId !== id);
    setFavoritos(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <View style={styles.container}>
     
      {produtosFavoritados.length === 0 ? (
        <View style={styles.emptyState}>
          <Image source={require('../../assets/caixa-vazia.png')} style={styles.emptyImage} />
          <Text style={styles.emptyMessage}>Você não tem produtos favoritados no momento.</Text>
        </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    width: 350,
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
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
    backgroundColor: '#e40101',
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
    width: '95%',
    color: '#2c2b2b',
    textAlign: 'center',
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

export default Favoritos;
