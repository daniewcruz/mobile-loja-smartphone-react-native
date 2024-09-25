
import { View, Text, StyleSheet, TextInput, StatusBar, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Home() {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar />
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



            <View style={styles.categorias}>
                <Text style={styles.categoriasText}>Categorias</Text>

                <View style={styles.categorias2}>
                    <Text  >Mais  </Text>
                    <Icon name="chevron-forward-outline" size={18} color="#757575" />
                </View>
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






        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    pesquisarcx: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'f7f7f7',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginTop: -10,
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

    categorias: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 5,
        marginBottom: 10,

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

        marginTop: 5,
        marginBottom: 10,

    },

    containerCategorias: {
        flexDirection: 'row',

    },

    backgroundCategorias: {
        flexDirection: 'row',
        height: 60,
        width: 70,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#080a19',
        left: 20,
        backgroundColor: '#ffb341',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,



    },

    IconGameImg: {
        resizeMode: 'cover',
        width: 45,
        height: 45,

    },

    cellImg: {
        resizeMode: 'cover',
       

    },

    categoriaImg: {
        resizeMode: 'cover',

    },






});