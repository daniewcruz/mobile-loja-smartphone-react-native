import { Stack } from "expo-router";


export default function CategoryLayout() {
    return (
        <Stack screenOptions={{ headerStyle: { backgroundColor: '#fff'}, 
         headerTitleAlign: "center", headerTintColor: '#080a19', headerTitleStyle: { fontWeight: 'bold' }, headerShadowVisible: false, }}>
            <Stack.Screen name="list" options={{ title: "Categorias" }} />
            <Stack.Screen name="[id]"/>
            
        </Stack>
    );
}