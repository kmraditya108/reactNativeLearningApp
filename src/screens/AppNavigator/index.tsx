import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Home from "../Home";
import Login from "../Login";
import Counter from "../Counter";
import Dashboard from "../Dashboard";
import RNScreen from "../RNPaper";


const Screen = createNativeStackNavigator();

function AppNavigator() {

    return (
        <NavigationContainer>
            <Screen.Navigator initialRouteName="RNScreen"
                screenOptions={{
                    // headerStyle: {
                    //     backgroundColor: '#f4511e',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // },
                    // headerShown: false
                }}>
                <Screen.Screen name="Counter" component={Counter} />
                <Screen.Screen name="Login" component={Login} />
                {/* <Screen.Screen name="Home" component={Home} options={{
                    // headerShown:false,
                    title: 'My home- updated',
                }} /> */}
                <Screen.Screen name="Dashboard" component={Dashboard}/>
                <Screen.Screen name="RNScreen" component={RNScreen}/>
            </Screen.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
