import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LaunchScreen from "./src/screens/LaunchScreen";
import {createNativeStackNavigator} from "react-native-screens/native-stack";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Launch screen"
                    component={LaunchScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};