import { View, Text, Image } from 'react-native'
import React from 'react'

const Timekeeping = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}>
      <View style={{ height: 95, backgroundColor: '#fff' }}>
        <View style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingBottom: 10,
          backgroundColor: '#F46138'
        }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              color: '#fff'
            }}
          >Chấm công</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          marginRight: 10,
          marginLeft: 10,
          borderRadius: 20,
          borderColor: 'grey',
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View>
          <Image
            source={require('../../../assets/timekeeping-256.png')}
            resizeMode='contain'
            style={{
              width: 100,
              height: 100,
              tintColor: '#F46138',
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'blue'
        }}
      >
      </View>
    </View>
  )
}

export default Timekeeping