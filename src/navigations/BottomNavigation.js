import { View, Text, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Main from '../views/main'
import { bottomTabs } from '../constants/bottomTab'
const Tab = createBottomTabNavigator()
const BottomNavigation = () => {
    const [headerShown, setHeaderShown] = useState(false);
    const [headerTitle, setHeaderTitle] = useState(undefined);

    const renderTab = (focused, tab) => {
        return (
            <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                gap: 3
            }}>
                <Image
                    source={focused ? tab.image : tab.image}
                    resizeMode='contain'
                    style={{
                        width: 26,
                        height: 26,
                        tintColor: focused ? '#009bf8' : 'gray'
                    }}
                />
                <Text
                    style={{
                        color: focused ? '#009bf8' : 'gray',
                        fontSize: 10
                    }}
                >{tab.title}</Text>
            </View>
        )
    }
    return (
        <Tab.Navigator
            detachInactiveScreens
            screenOptions={{
                title: headerTitle,
                headerShown: headerShown,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: 'white',
                    height: 85,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                tabBarActiveTintColor: '#009bf8',
            }}
        >
            {
                bottomTabs.map((tab, key) => {
                    return (
                        <Tab.Screen
                            listeners={({ navigation, route }) => ({
                                focus: (e) => {
                                    const currentKey = route.key;
                                    if (currentKey.includes(tab.name) && !!tab.headerShown) {
                                        setHeaderShown(true);
                                        setHeaderTitle(tab.title);
                                    } else {
                                        setHeaderShown(false);
                                        setHeaderTitle(undefined);
                                    }
                                }
                            })}
                            key={key}
                            name={tab.name}
                            children={() => <Main name={tab.name} />}
                            options={{
                                tabBarLabel: ({ focused }) => Platform.OS == 'ios' ? renderTab(focused, tab) : null,
                                tabBarIcon: ({ focused }) => Platform.OS == 'ios' ? null : renderTab(focused, tab)
                            }}
                        />
                    )
                })
            }
        </Tab.Navigator>
    )
}

export default BottomNavigation