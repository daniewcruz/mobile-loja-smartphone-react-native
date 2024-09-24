import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabsLayout() {
    return (
        <Tabs >

            <Tabs.Screen name="home" options={{ tabBarShowLabel: false, title: "Home",    
            headerTitleStyle: { fontWeight: 'bold', color: '#080a19',  letterSpacing: 2 }, headerTitle: "TechZen Store", 
            
            
            headerLeft: () => <FontAwesome size={24} name="bars" color="#080a19" />,
            headerLeftContainerStyle: { marginLeft: 20 }, 
            headerRight: () => <FontAwesome size={24} name="shopping-cart" color="#080a19" />,
            headerRightContainerStyle: { justifyContent: 'flex-end', marginRight: 20, paddingRight: 20, marginBottom: 15 },  
            headerTitleAlign: "center", headerStyle: { backgroundColor: '#fff' },
            
            tabBarStyle: { backgroundColor: '#fff' },
            tabBarActiveTintColor: '#080a19',
            tabBarInactiveTintColor: '#000',
            tabBarLabelStyle: { fontWeight: 'bold', color: '#080a19',  letterSpacing: 2 },
             tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color}
             
                
            /> }} />

            <Tabs.Screen name="favoritos" options={{ tabBarShowLabel: false, title: "Favoritos",
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="heart" color={color} />
             }} />

        </Tabs>

    )

}