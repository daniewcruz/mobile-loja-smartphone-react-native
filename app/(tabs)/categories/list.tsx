import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getAllProducts } from "../../../services/product";
import ProductItem from "../../../components/product-item";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";


export default function Screen() {

    //puxando todas as categorias
    const categories = getAllCategories();

    return (
       <SafeAreaView style={styles.container} >
        <View >
            <FlatList
                data={categories}
                renderItem={({ item }) =><CategoryItem data={item} />}
                keyExtractor={item => item.id.toString()}
                style={styles.list}
                contentContainerStyle={styles.listContent}
            />
        </View>

       </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: -50,
        marginTop: -34,   
    },
    list: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginBottom: 100,
        padding: 10,

        
       
    },
    listContent: {
        paddingBottom: 20,
    
     
    }
  

})