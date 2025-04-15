import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';

import HomeScreen from "../pages/HomeAlejandra";
import HomeLuiz from "../pages/HomeLuiz";
import HomeBruna from "../pages/HomeBruna";

const Tab = createBottomTabNavigator(); 

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home Alejandra">
            <Tab.Screen
                name="Home Alejandra" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={size} color={color} />
                    ),
                }}
            />
             
            <Tab.Screen
                name="Home Luiz" 
                component={HomeLuiz} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="linechart" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen 
                name="Home Bruna" 
                component={HomeBruna} 
                options={{
                    tabBarIcon: ({ color, size }) => ( 
                        <AntDesign name="user-alt" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}