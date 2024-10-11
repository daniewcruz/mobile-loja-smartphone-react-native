import { Tabs } from "expo-router";
import { Pressable, View, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from "react";





export default function TabsLayout() {

    // Estado para a quantidade de produtos no carrinho
    const [cartItems, setCartItems] = useState(0);

    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,

                tabBarStyle: {

                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 50,
                    backgroundColor: '#080a19',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderTopWidth: 0,
                    elevation: 1,
                    shadowColor: '#fff',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,




                    overflow: 'hidden'

                },
                tabBarAllowFontScaling: false,
                tabBarActiveTintColor: '#ffb341',
                tabBarInactiveTintColor: '#fff',


            }}>





            <Tabs.Screen
                name="home"
                options={{
                    title: "", 
                    headerTitleStyle: { fontWeight: 'bold', color: '#080a19', letterSpacing: 2, fontSize: 22 },
                    headerTitle: "TechZen Store",

                    // Adiciona o ícone do carrinho com o badge
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* Badge com o número de produtos no carrinho */}
                            <View style={{
                                position: 'absolute',
                                right: 10,
                                top: -10,
                                backgroundColor: '#ffb341',
                                borderRadius: 10,
                                width: 17,
                                height: 17,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{ color: '#080a19', fontSize: 13 }}>{cartItems}</Text>
                            </View>
                            {/* Ícone do carrinho, sempre visível */}
                            <FontAwesome
                                size={25}
                                name="shopping-cart"
                                color="#080a19"
                                style={{ marginRight: 10 }}
                            />
                        </View>
                    ),
                    headerRightContainerStyle: {
                        justifyContent: 'flex-end',
                        marginRight: 20,
                        paddingRight: 20,
                        marginBottom: 15
                    },
                    headerTitleAlign: "center",
                    headerStyle: { backgroundColor: '#fff' },
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />
                }}
            />






            <Tabs.Screen name="categories" options={{
                tabBarLabelPosition: 'below-icon',
                headerShown: false,


                title: "Categorias",

                tabBarIcon: ({ color }) => <FontAwesome size={24} name="th-large" color={color} />

            }} />

            <Tabs.Screen name="favoritos" options={{
                title: "Produtos Favoritados",
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="heart" color={color} />,
                headerStyle: { backgroundColor: '#fff' },
                headerTitleAlign: "center", headerTintColor: '#080a19', headerTitleStyle: { fontWeight: 'bold' }, headerShadowVisible: false
            }} />



            <Tabs.Screen name="usuario" options={{
                title: "Meu Perfil",
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
                headerStyle: { backgroundColor: '#ffb341' },
                headerTitleAlign: "center", headerTintColor: '#080a19', headerTitleStyle: { fontWeight: 'bold' }, headerShadowVisible: false


            }} />

        </Tabs>

    )

}