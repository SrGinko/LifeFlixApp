import { Tabs } from "expo-router"
import { StyleSheet, View, Text } from "react-native"
import {FontAwesome, Ionicons, MaterialIcons} from "@expo/vector-icons"


export default function layout() {
    return (
        <Tabs screenOptions={{tabBarActiveBackgroundColor: "#8c6c01",
            tabBarActiveTintColor: "",
            tabBarStyle:{
                backgroundColor: "#121212"
            }
        }}>

            <Tabs.Screen name="index" options={{
                headerShown: false,
                title: "Filmes",
                tabBarIcon:({focused, color, size}) => {
                    if(focused){
                        return <Ionicons name="home" color={color} size={size}/>
                    }else{
                        return <Ionicons name="home-sharp" color={color} size={size}/>
                    }
                }
            }} />
            <Tabs.Screen name="canais"  options={{
                headerShown: false,
                title: "CanaisTV",
                tabBarIcon:({focused, color, size}) => {
                    if(focused){
                        return <Ionicons name="tv-sharp" color={color} size={size}/>
                    }else{
                        return <Ionicons name="tv-outline" color={color} size={size} />
                    }
                }
            }} />
            <Tabs.Screen name="series" options={{
                headerShown: false,
                title: "Séries",
                tabBarIcon:({focused, color, size}) => {
                    if(focused){
                        return <MaterialIcons name="movie" color={color} size={size}/>
                    }else{
                        return <MaterialIcons name="movie" color={color} size={size} />
                    }
                }
            }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    Settings: ({
        backgroundColor: "#121212",
        flex: 1,

    }),
})