import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';


export default function Home() {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.pesquisarcx}>
            <Icon name="search-outline" size={24} color="#757575" style={styles.pesquisaIcon} />
               
                <TextInput
                
                    style={styles.input}
                    placeholder="Pesquisar produtos..."
                    placeholderTextColor="#757575"
                    
    
                />
                <View style={styles.sinoRedondo}>
                    <Icon name="notifications-outline" size={24} color="#757575" style={styles.sinoIcon} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    input: {
        width: '85%',
        height: 40,
        borderWidth: 1,
        borderColor: '#f7f7f7',
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#f7f7f7',
        fontSize: 16,

    },
    pesquisarcx: {
        alignItems: 'flex-start',
        marginLeft: 20,
        justifyContent: 'center',
        marginBottom: 20,
        marginTop: -20,
    },
    sinoRedondo: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 8,
        top: 0,
    },
    sinoIcon: {
        color: '#4e4e4e',
        fontSize: 18,

    },
    pesquisaIcon: {
        color: '#4e4e4e',
        fontSize: 18,
    

    },

});