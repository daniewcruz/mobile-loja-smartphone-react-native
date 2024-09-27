import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllProducts } from "../../../services/product";
import ProductItem from "../../../components/product-item";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getCategoryById } from "../../../services/category";
import { getProductByCategory } from "../../../services/product";


export default function Screen() {
    //puxando todos os produtos pelo id da categoria especifico 
    const { id } = useLocalSearchParams();
    // converte em int para poder consultar por id na lista de dados    
    const idCategory = parseInt(id as string);
    //puxando as categorias por id 
    const category = getCategoryById(idCategory);
    if (!category) return router.back;

    //pegagando a lista dos produtos daquele categiria 
    const products = getProductByCategory(idCategory);



    return (

        <View style={styles.container}>
            <Stack.Screen options={{ title: category.title }} />
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
            />
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20
    }

})