import { Tabs } from "expo-router";
import { Pressable, View } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel:  false ,
        
                tabBarStyle: {

                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 50,
                    backgroundColor: '#080a19',   

                    
                
                    overflow: 'hidden'

                },
                tabBarAllowFontScaling: false,
                tabBarActiveTintColor: '#ffb341',
                tabBarInactiveTintColor: '#fff',
                
                
            }}


        >

            <Tabs.Screen name="home" options={{
                title: "Home",
                headerTitleStyle: { fontWeight: 'bold', color: '#080a19', letterSpacing: 2 }, headerTitle: "TechZen Store",
                

                headerLeft: () => <FontAwesome size={24} name="bars" color="#080a19" />,
                headerLeftContainerStyle: { marginLeft: 20 },
                headerRight: () => <FontAwesome size={24} name="shopping-cart" color="#080a19" />,
                headerRightContainerStyle: { justifyContent: 'flex-end', marginRight: 20, paddingRight: 20, marginBottom: 15 },
                headerTitleAlign: "center", headerStyle: { backgroundColor: '#fff' },
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color}


                />
            }} />

            <Tabs.Screen name="categories" options={{
                tabBarLabelPosition: 'below-icon',
               
               
                 title: "Categorias",
                 
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="th-large" color={color} />

            }} />

            <Tabs.Screen name="favoritos" options={{
                 title: "Favoritos",
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="heart" color={color} />
            }} />



            <Tabs.Screen name="usuario" options={{
                title: "Perfil",
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />
            }} />

        </Tabs>

    )

}