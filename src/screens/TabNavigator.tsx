import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import About from "./About";
import Days from "./Days";
import Today from "./Today";

export type RootStackParamList = {
    Days: {},
    About: {},
    Today: {},
}

const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabNavigator = ()=>{
    return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            switch (route.name) {
                                case "About":
                                    return  <Ionicons name={"information-outline"} size={size} color={color} />
                                case "Days":
                                    return  <Ionicons name={"list"} size={size} color={color} />
                                case "Today":                    
                                    return  <Ionicons name={"today-outline"} size={size} color={color} />
                                default:
                                    break;
                            }
                        },
                    })}
                >
                    <Tab.Screen name="Today" component={Today} />
                    <Tab.Screen name="Days" component={Days} />
                    <Tab.Screen name="About" component={About} />
                </Tab.Navigator>
            </NavigationContainer>
    )
}