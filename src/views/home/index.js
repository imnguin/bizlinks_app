import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
    }, [])

    return (
        <View style={styles.container}>
            <Text>Home heheheh</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

export default Home