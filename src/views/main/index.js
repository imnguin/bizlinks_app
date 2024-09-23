import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Account from '../account'
import { TouchableOpacity } from 'react-native'
import Order from '../order'
import Home from '../home'

const Main = (props) => {
  const renderItem = (name) => {
    switch (name) {
      case 'Account':
        return <Account navigation={props.navigation} />
      case 'Order':
        return <Order navigation={props.navigation} />
      case 'Home':
        return <Home navigation={props.navigation} />
      default:
        return <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text>{name}</Text>
        </View>
    }
  }
  return (
    <>
      <StatusBar style="auto" />
      {
        props.name != 'Account' && <View
          style={{
            height: 100,
            backgroundColor: '#F46138',
            flexDirection: 'row',
            alignItems: 'flex-end',
            padding: 15,
            justifyContent: 'space-between',
          }}>
          <View style={{ marginLeft: 15 }}>
            <Image
              source={require('../../../assets/sieunhan-removebg-preview.png')}
              resizeMode='contain'
              style={{
                width: 35,
                height: 35,
              }}
            />
          </View>
          <View style={{ gap: 20, flexDirection: 'row' }}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/211818_search_icon.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/211693_bell_icon.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff'
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/8545624_qr_code_scan_program_barcode_icon.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff'
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      }
      <View style={styles.container}>
        {renderItem(props.name)}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Main