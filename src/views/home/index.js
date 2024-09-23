import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
const { width } = Dimensions.get('window');
const Home = () => {
    const i = [1, 2, 3, 4, 5];
    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <View
                style={{
                    paddingTop: 15
                }}
            >
                <Text style={{ fontSize: 19, marginLeft: 15 }}>Dịch vụ phổ biến</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        padding: 15
                    }}
                >
                    {
                        i.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        width: '25%',
                                        alignItems: 'center',
                                        marginBottom: 10,
                                        gap: 10
                                    }}
                                >
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../../../assets/nextIcon.png')}
                                            resizeMode='contain'
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ flexWrap: 'wrap' }}>Dịch vụ số {item}</Text>
                                </View>
                            )
                        })
                    }
                </View>

                <Text style={{ fontSize: 19, marginLeft: 15 }}>Đề xuất cho bạn</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        padding: 15
                    }}
                >
                    {
                        i.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        width: '25%',
                                        alignItems: 'center',
                                        marginBottom: 10,
                                        gap: 10
                                    }}
                                >
                                    <TouchableOpacity>
                                        <Image
                                            source={require('../../../assets/nextIcon.png')}
                                            resizeMode='contain'
                                            style={{
                                                width: 20,
                                                height: 20,
                                            }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{ flexWrap: 'wrap' }}>Đề xuất số {item}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default Home