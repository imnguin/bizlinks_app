import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { views } from '../views'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const [initialRouteName, setInitialRouteName] = useState('Login')
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
                {
                    views.map((screen, index) => {
                        return <Stack.Screen key={index} name={screen.name} component={screen.component} />
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation