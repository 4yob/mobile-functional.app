import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import App from "../pages/PageEnzo";


const Tab = createBottomTabNavigator(); 

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => ( 
                        <Icon name="home" color={color} size={size} /> // alterar o icon depois 
                    ),
                }}
            />
            <Tab.Screen 
                name="Enzo" 
                component={App} 
                options={{
                    tabBarIcon: ({ color, size }) => ( 
                        <AntDesign name="staro" size={24} color="black" />
                    ),
                }}
            /> 
            <Tab.Screen 
                name="Detalhes" 
                component={Detalhes} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="linechart" size={size} color={color} />   // alterar o icon depois 
                    ),
                }}
            />
        </Tab.Navigator>
    );
}