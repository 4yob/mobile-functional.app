import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import App from "../pages/PageEnzo";

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
                        <AntDesign name="linechart" size={size} color={color} />   // alterar o icon depois 
                    ),
                }}
            />
        </Tab.Navigator>
    );
}