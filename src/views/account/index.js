import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
const { height } = Dimensions.get('window');
const Account = () => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{
                height: height * 0.20,
                // backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'flex-end',
                marginBottom: 5,
                paddingBottom: 20
            }}>
                <Image
                    source={require('../../../assets/avatar.jpg')}
                    resizeMode='contain'
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 50
                    }}
                />
                <Text style={{ fontSize: 12, marginTop: 15 }}>Chào buổi chiều!</Text>
                <Text style={{ fontSize: 22, marginTop: 5, fontWeight: 'bold' }}>Lam Xuan Nguyen</Text>
            </View>
            <View style={{
                flex : 1,
                padding : 10
            }}>
                <Text>Cá nhân</Text>
            </View>
        </ScrollView>
    )
}

export default Account