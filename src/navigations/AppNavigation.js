import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { views } from '../views'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { checkAuthen } from '../services/checkAuthen';
import { getDataStore } from '../utils/funtions';
const Stack = createNativeStackNavigator();

const AppNavigation = ({ navigation }) => {
    const [initialRouteName, setInitialRouteName] = useState('')
    useEffect(() => {
        const checkLogin = async () => {
            const logininfo = await getDataStore('logininfo');
            setInitialRouteName(!!logininfo ? 'Main' : 'Login')
        }
        checkLogin();
    }, [])
    return (
        <SafeAreaProvider>
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