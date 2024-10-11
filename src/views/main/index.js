import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import Account from '../Account'
import { TouchableOpacity } from 'react-native'
import Order from '../Order'
import Home from '../Home'
import Chats from '../Chats'

const Main = (props) => {
  const element = {
    account: <Account navigation={props.navigation} />,
    order: <Order navigation={props.navigation} />,
    home: <Home navigation={props.navigation} />,
    chats: <Chats navigation={props.navigation} />
  }

  const renderItem = (name) => {
    return element[name.toLowerCase()] || <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}><Text>{name}</Text></View>;
  }

  return (
    <>
      <StatusBar style="auto" />
      {
        props.name.toLowerCase() != 'account' &&
        <View
          style={{ height: 95, backgroundColor: '#F46138', flexDirection: 'row', alignItems: 'flex-end', paddingLeft: 15, paddingRight: 15, paddingBottom: 15 }}>
          <View style={{ flexDirection: 'row', gap: 15, }}>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/211818_search_icon.png')}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: '#fff', }}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Tìm kiếm"
              placeholderTextColor={'#fff'}
              style={{ borderRadius: 7, flex: 1, fontSize: 15, color: '#fff' }}
            />
            <TouchableOpacity>
              <Image
                source={require('../../../assets/211693_bell_icon.png')}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: '#fff' }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../../../assets/8545624_qr_code_scan_program_barcode_icon.png')}
                resizeMode='contain'
                style={{ width: 25, height: 25, tintColor: '#fff' }}
              />
            </TouchableOpacity>
          </View>
        </View>
      }
      <View style={styles.container}>{renderItem(props.name)}</View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Main