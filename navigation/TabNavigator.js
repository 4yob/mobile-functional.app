import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';
import PageEnzo from "../pages/PageEnzo";


const Tab = createBottomTabNavigator(); 

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="PageEnzo">
            <Tab.Screen 
                name="PageEnzo" 
                component={PageEnzo} 
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="staro" size={24} color="black" />   // alterar o icon depois 
                    ),
                }}
            />
        </Tab.Navigator>
    );
}