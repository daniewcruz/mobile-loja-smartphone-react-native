import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

export default function ProfileScreen () {

  return (
    <View style={styles.container}>
    <ScrollView >
     

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Meus Pedidos</Text>
        <Text>Histórico de compras, status de pedidos e detalhes de entrega.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Configurações de Conta</Text>
        <Text>Altere suas informações pessoais: nome, e-mail, endereço de entrega e métodos de pagamento.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Promoções e Ofertas Personalizadas</Text>
        <Text>Veja ofertas personalizadas baseadas no seu histórico de compras.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Suporte ao Cliente</Text>
        <Text>Entre em contato com o suporte ou acesse opções de chat.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Configurações de Notificações</Text>
        <Text>Ajuste suas preferências de notificações.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Política de Privacidade e Termos de Uso</Text>
        <Text>Leia nossa política de privacidade e termos de uso.</Text>
      </View>

     
    </ScrollView>
    </View>
  );
};

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
  },
  section: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
   
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,


  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});


