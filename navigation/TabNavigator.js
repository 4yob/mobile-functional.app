import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';

import HomeLuiz from "../pages/HomeLuiz";


const Tab = createBottomTabNavigator(); 


export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="HomeLuiz">
            <Tab.Screen 
                name="HomeLuiz" 
                component={HomeLuiz} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="meho" size={24} color="black" />   // alterar o icon depois 
                    ),
                }}
            />
            
        </Tab.Navigator>
    );
}