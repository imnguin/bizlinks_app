import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Account from '../account'
import { SafeAreaView } from 'react-native-safe-area-context'

const Main = (props) => {
  const renderItem = (name) => {
    switch (name) {
      case 'Account':
        return <Account navigation={props.navigation} />
      default:
        return <Text>{name}</Text>
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {renderItem(props.name)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Main