import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import App from "../pages/PageEnzo";

import HomeLuiz from "../pages/HomeLuiz";
import HomeBruna from "../pages/HomeBruna";

const Tab = createBottomTabNavigator(); 

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="HomeLuiz">
            <Tab.Screen 
                name="HomeLuiz" 
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