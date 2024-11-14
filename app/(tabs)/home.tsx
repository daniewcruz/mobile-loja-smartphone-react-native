
// import { View, Text, StyleSheet, TextInput, StatusBar, Image, ScrollView, FlatList, Pressable,  } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { getAllProducts } from "../../services/product";
// import ProductItem from "../../components/product-item";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { router } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { db } from '../../firebase';






// export default function Home() {






//     const [products, setProducts] = useState<{ id: string; [key: string]: any }[]>([]);

//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       const fetchProducts = async () => {
//         try {
//           const productsSnapshot = await db.collection('products').get();
//           const productsList = productsSnapshot.docs.map(doc => ({
//             id: doc.id,
//             ...doc.data()
//           }));
//           setProducts(productsList);
//           setLoading(false);
//         } catch (error) {
//           console.error('Erro ao buscar os produtos:', error);
//           setLoading(false);
//         }
//       };
  
//       fetchProducts();
//     }, []);
  
//     if (loading) {
//       return (
//         <View style={styles.loadingContainer}>
//           <Text>Carregando...</Text>
//         </View>
//       );
//     }
  
    
//     return (
//         <View>
//         <ScrollView>
//         <SafeAreaView style={styles.container} >
           
//             <StatusBar />
//             <View style={styles.pesquisarcx}>

//                 <View style={styles.pesquisa}>
//                     <Icon name="search-outline" size={24} color="#757575" style={styles.pesquisaIcon} />
//                 </View>

//                 <TextInput
//                     style={styles.input}
//                     placeholder="Pesquisar por produto..."
//                     placeholderTextColor="#9e9e9e"


//                 />

//                 <View style={styles.sinoRedondo}>
//                     <Icon name="notifications-outline" size={24} color="#757575" style={styles.sinoIcon} />
//                 </View>
//             </View>


//             <View style={styles.bannerContainer}>
//                 <ScrollView horizontal={true}>

//                     <View style={styles.banner}>

//                         <Image source={require('../../assets/banner1.png')} style={styles.bannerImg} />
//                         <Image source={require('../../assets/banner2.png')} style={styles.bannerImg} />

//                     </View>

//                 </ScrollView>
//             </View>







//             <View style={styles.categorias}>
//                 <Text style={styles.categoriasText}>Categorias</Text>

//                 <Pressable onPress={() => router.replace('/categories')}>
//                 <View style={styles.categorias2}>
//                     <Text  >Mais  </Text>
//                     <Icon name="chevron-forward-outline" size={18} color="#757575" />
//                 </View>
//                 </Pressable>
//             </View>




//             <View>
//                 <ScrollView horizontal={true}>

//                     <View style={styles.containerCategorias}>

//                         <View style={styles.backgroundCategorias}>
//                             <Image source={require('../../assets/Laptop.png')} style={styles.categoriaImg} />
//                         </View>

//                         <View style={styles.backgroundCategorias}>
//                             <Image source={require('../../assets/Camera.png')} style={styles.categoriaImg} />
//                         </View>


//                         <View style={styles.backgroundCategorias}>
//                             <Image source={require('../../assets/Smartphone.png')} style={styles.cellImg} />
//                         </View>


//                         <View style={styles.backgroundCategorias}>
//                             <Image source={require('../../assets/playstation.png')} style={styles.IconGameImg} />
//                         </View>
//                     </View>

                        
//                     <View style={styles.backgroundCategorias}>
//                         <Image source={require('../../assets/CCTV.png')} style={styles.cellImg} />
//                     </View>
                   
                    
//                 </ScrollView>
//             </View>



//             <View style={styles.principais}>
//                 <Text style={styles.principaisText}>Principais Ofertas </Text>

//                 <View style={styles.categorias2}>
//                     <Text  >Mais  </Text>
//                     <Icon name="chevron-forward-outline" size={18} color="#757575" />
//                 </View>

//             </View>


//             <View style={styles.container1}>
//             <FlatList
//                 data={products}
//                 renderItem={({ item }) => <ProductItem data={item} />}
//                 keyExtractor={item => item.id.toString()}
//                 style={styles.list}
//             />
//         </View>
            





//         </SafeAreaView>
//         </ScrollView>
//         </View>
//     );
// }




import { View, Text, StyleSheet, TextInput, StatusBar, Image, ScrollView, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';  // Assumindo que o arquivo de configuração do Firebase está correto
import ProductItem from "../../components/product-item";  // Certifique-se de que este componente está configurado corretamente
import { router } from 'expo-router';

export default function Home() {
    const [products, setProducts] = useState<{ id: string; [key: string]: any }[]>([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const productsSnapshot = await db.collection('products').get();
            const productsList = productsSnapshot.docs.map(doc => {
              const data = doc.data();
              
              // Garantir que todos os campos do tipo 'Product' estejam presentes
              return {
                id: doc.id, // O ID do documento do Firebase
                idCategory: data.idCategory || '', // Supondo que 'idCategory' pode estar ausente
                image: data.image || '', // Garantir que 'image' esteja presente
                title: data.title || 'Sem título', // Defina um valor padrão para 'title'
                description: data.description || 'Sem descrição', // Valor padrão para 'description'
                price: data.price || 0, // Valor padrão para 'price'
              };
            });
            setProducts(productsList);
            setLoading(false);
          } catch (error) {
            console.error('Erro ao buscar os produtos:', error);
            setLoading(false);
          }
        };
      
        fetchProducts();
      }, []);
  

    return (
        <View>
            <ScrollView>
                <SafeAreaView style={styles.container}>
                    <StatusBar />
                    
                    {/* Caixa de Pesquisa */}
                    <View style={styles.pesquisarcx}>
                        <View style={styles.pesquisa}>
                            <Icon name="search-outline" size={24} color="#757575" style={styles.pesquisaIcon} />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Pesquisar por produto..."
                            placeholderTextColor="#9e9e9e"
                        />
                        <View style={styles.sinoRedondo}>
                            <Icon name="notifications-outline" size={24} color="#757575" style={styles.sinoIcon} />
                        </View>
                    </View>

                    {/* Banner */}
                    <View style={styles.bannerContainer}>
                        <ScrollView horizontal={true}>
                            <View style={styles.banner}>
                                <Image source={require('../../assets/banner1.png')} style={styles.bannerImg} />
                                <Image source={require('../../assets/banner2.png')} style={styles.bannerImg} />
                            </View>
                        </ScrollView>
                    </View>

                    {/* Categorias */}
                    <View style={styles.categorias}>
                        <Text style={styles.categoriasText}>Categorias</Text>
                        <Pressable onPress={() => router.replace('/categories')}>
                            <View style={styles.categorias2}>
                                <Text>Mais</Text>
                                <Icon name="chevron-forward-outline" size={18} color="#757575" />
                            </View>
                        </Pressable>
                    </View>

                    <ScrollView horizontal={true}>
                        <View style={styles.containerCategorias}>
                            <View style={styles.backgroundCategorias}>
                                <Image source={require('../../assets/Laptop.png')} style={styles.categoriaImg} />
                            </View>
                            <View style={styles.backgroundCategorias}>
                                <Image source={require('../../assets/Camera.png')} style={styles.categoriaImg} />
                            </View>
                            <View style={styles.backgroundCategorias}>
                                <Image source={require('../../assets/Smartphone.png')} style={styles.cellImg} />
                            </View>
                            <View style={styles.backgroundCategorias}>
                                <Image source={require('../../assets/playstation.png')} style={styles.IconGameImg} />
                            </View>
                        </View>
                    </ScrollView>

                    {/* Principais Ofertas */}
                    <View style={styles.principais}>
                        <Text style={styles.principaisText}>Principais Ofertas</Text>
                        <View style={styles.categorias2}>
                            <Text>Mais</Text>
                            <Icon name="chevron-forward-outline" size={18} color="#757575" />
                        </View>
                    </View>

                    {/* Lista de Produtos */}
                    <View style={styles.container1}>
                        <FlatList
                            data={products}  // Dados dos produtos vindos do Firebase
                            renderItem={({ item }) => <ProductItem data={item} />}  // Usando o componente ProductItem para renderizar os produtos
                            keyExtractor={item => item.id.toString()}  // Garantindo que a chave seja única
                            style={styles.list}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 5,
        bottom: 30,

    },

    pesquisarcx: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'f7f7f7',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginTop: 3,
        marginBottom: 10,
        position: 'relative',


    },

    pesquisa: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 20,
        top: 15,
        zIndex: 1,

    },

    pesquisaIcon: {
        color: '#9b9b9b',
        alignItems: 'center',
        fontSize: 20,
        marginLeft: 10,


    },
    input: {
        width: '87%',
        height: 40,
        borderWidth: 1,
        paddingLeft: 40,
        borderColor: '#e9e9e9',
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 5,
        marginBottom: 10,
        backgroundColor: '#f7f7f7',
        fontSize: 15,

    },


    sinoRedondo: {
        width: 43,
        height: 42,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#e9e9e9',
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        marginLeft: 1,
        right: 10,
        bottom: 15,

    },
    sinoIcon: {
        alignItems: 'center',
        color: '#4e4e4e',
        fontSize: 20,

    },

    bannerContainer: {
        height: 150,

        marginBottom: 10,

    },

    banner: {
        flexDirection: 'row',
        width: '100%',
        height: 130,
    },

    bannerImg: {

        resizeMode: 'cover',
        marginRight: 5,
        marginLeft: 10,
        borderRadius: 10,

        
    },

    categorias: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 6,

    },
    categoriasText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',

    },
    categorias2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    containerCategorias: {
        flexDirection: 'row',

    },

    backgroundCategorias: {
        flexDirection: 'row',
        height: 45,
        width: 60,
        borderRadius: 10,

        borderColor: '#080a19',
        left: 20,
        backgroundColor: '#ffb341',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,



    },

    IconGameImg: {
        resizeMode: 'cover',
        width: 35,
        height: 35,

    },

    cellImg: {
        resizeMode: 'contain',
        width: 30,
        height: 35,
        


    },

    categoriaImg: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
       

    },

    principais: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: -10,
        marginTop: 20,


    },
    principaisText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },

    container1: {
        backgroundColor: '#fffefc',
        flex: 1,
        padding: 5,
        borderRadius: 10,
        marginTop: 10,  
    },

    list: {
        flex: 1,
        
        width: '100%',

        padding: 10,

    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

        

   

});