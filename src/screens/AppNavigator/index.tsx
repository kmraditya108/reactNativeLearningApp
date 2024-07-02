import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../Home";
import Login from "../Login";


const Screen = createNativeStackNavigator();

function AppNavigator() {

    return (
        <NavigationContainer>
            <Screen.Navigator initialRouteName="Login"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerShown: false
                }}>
                <Screen.Screen name="Login" component={Login} />
                <Screen.Screen name="Home" component={Home} options={{
                    // headerShown:false,
                    title: 'My home- updated',
                }} />
            </Screen.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
