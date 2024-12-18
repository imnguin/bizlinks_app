import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { views } from '../views'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { checkAuthen } from '../services/checkAuthen';
import { getDataStore } from '../utils/funtions';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();

const AppNavigation = ({ navigation }) => {
    const [initialRouteName, setInitialRouteName] = useState('Login')
    useEffect(() => {
        const checkLogin = async () => {
            const logininfo = await getDataStore('logininfo');
            setInitialRouteName(!!logininfo ? 'Main' : 'Login')
        }
        checkLogin();
    }, [])
    return (
        <SafeAreaProvider>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{ headerShown: false }}>
                    {
                        views.map((screen, index) => {
                            return <Stack.Screen key={index} name={screen.name} component={screen.component} />
                        })
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default AppNavigation