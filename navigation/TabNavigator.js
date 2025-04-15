import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from '@expo/vector-icons/AntDesign';

import HomeScreen from "../pages/HomeAlejandra";

const Tab = createBottomTabNavigator(); 

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => ( 
                        <Icon name="home" color={color} size={size} /> // alterar o icon depois 
                    ),
                }}
            />
        </Tab.Navigator>
    );
}