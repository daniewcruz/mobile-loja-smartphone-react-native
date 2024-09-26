import { Pressable, Text, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';


type Props = {
    title: string;
    onPress: () => void;
}
export const Button = ({ title, onPress}: Props ) => {
   return (
       <Pressable onPress={onPress} style={styles.button}>
         <Text style={styles.buttonText}>{title}</Text>
         
       </Pressable>
   );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: '#080a19',
        borderRadius: 10,
        alignItems: 'center',
        
        width: 300,
        height: 60,
        elevation: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        

        marginBottom: 20,
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    buttonText: {
        fontSize: 18,
        color: '#ffffff',
        letterSpacing: 1.0,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})