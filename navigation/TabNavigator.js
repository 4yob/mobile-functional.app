import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import HomeScreen from "../pages/HomeAlejandra";
import HomeLuiz from "../pages/HomeLuiz";
import HomeBruna from "../pages/HomeBruna";
import HomeZani from "../pages/HomeZani";
import PageEnzo from "../pages/PageEnzo"

const Tab = createBottomTabNavigator(); 

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Home Alejandra">
            <Tab.Screen 
                name="Home Alejandra" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: () => ( 
                        <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />
                    ),
                }}
            />
             
            <Tab.Screen
                name="Home Luiz" 
                component={HomeLuiz} 
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
                    ),
                }}
            />

            <Tab.Screen 
                name="Home Bruna" 
                component={HomeBruna} 
                options={{
                    tabBarIcon: () => ( 
                        <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" />
                    ),
                }}
            />

            <Tab.Screen 
                name="Home Zani" 
                component={HomeZani} 
                options={{
                    tabBarIcon: () => ( 
                        <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
                    ),
                }}
            />

            <Tab.Screen 
                name="Home Enzo" 
                component={PageEnzo} 
                options={{
                    tabBarIcon: () => ( 
                        <MaterialCommunityIcons name="face-man-profile" size={24} color="black" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}