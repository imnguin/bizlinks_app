import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../../components/Header';

const TimekeepingHistory = () => {
  return (
    <View style={styles.container}>
      <Header title='Lịch sử chấm công'/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default TimekeepingHistory