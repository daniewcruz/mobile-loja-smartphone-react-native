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
       <Icon style={styles.buttonIcon} name="arrow-forward-outline" size={24} color="#fff" /> 
       </Pressable>
   );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: '#080a19',
        borderRadius: 10,
        alignItems: 'center',
        
        width: 265,
        height: 50,

        marginBottom: 20,
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },

    buttonText: {
        fontSize: 17,
        color: '#ffffff',
        letterSpacing: 1.0,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },

    buttonIcon: {
        marginLeft: 10,
        borderRadius: 5
    }

})