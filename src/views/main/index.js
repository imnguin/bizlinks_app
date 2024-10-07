import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Account from '../account'
import { TouchableOpacity } from 'react-native'
import Order from '../order'
import Home from '../home'
import Chats from '../chats'

const Main = (props) => {
  const renderItem = (name) => {
    switch (name) {
      case 'Account':
        return <Account navigation={props.navigation} />
      case 'Order':
        return <Order navigation={props.navigation} />
      case 'Home':
        return <Home navigation={props.navigation} />
      case 'Chats':
        return <Chats navigation={props.navigation} />
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
            height: 95,
            backgroundColor: '#F46138',
            flexDirection: 'row',
            alignItems: 'flex-end',
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 15
          }}>
          <View style={{
            flexDirection: 'row',
            gap: 15,
          }}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/211818_search_icon.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff',
                }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Tìm kiếm"
              placeholderTextColor={'#fff'}
              style={{
                borderRadius: 7,
                flex: 1,
                fontSize: 15,
                color: '#fff'
              }}
            />
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