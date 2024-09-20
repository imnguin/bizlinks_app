import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
const { height } = Dimensions.get('window');
const Account = (props) => {
    return (
        <ScrollView style={{ flex: 1 }}>
            <View style={{
                height: 250,
                backgroundColor: '#fff',
            }}>
                <View style={{
                    alignItems: 'flex-end',
                    marginRight: 15,
                    marginTop: 70,
                    marginBottom: 25,
                }}>
                    <TouchableOpacity style={{
                        borderRadius: 30,
                        backgroundColor: '#ffd8d8',
                        paddingVertical: 4,
                        paddingHorizontal: 10,
                        flexDirection: 'row',
                        alignItems: 'center'
                    }} onPress={() => props.navigation.navigate('Login')}>
                        <Text style={{
                            color: '#ff5454'
                        }}
                        >Thoát</Text>
                        <Image
                            source={require('../../../assets/logout.png')}
                            resizeMode='contain'
                            style={{
                                width: 12,
                                height: 12,
                                tintColor: '#ff5454'
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'flex-end'
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
                    <Text style={{ fontSize: 20, marginTop: 5 }}>LAM XUAN NGUYEN</Text>
                </View>
            </View>
            <View
                style={{
                    backgroundColor: '#fff',
                    marginTop: 5,
                    padding: 15,
                    gap: 20
                }}
            >
                <Text style={{
                    fontSize: 19,
                }}>Tài khoản</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Thiết lập thông tin cá nhân</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    height: 1,
                    backgroundColor: '#f2efef',
                }} />
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Tài khoản thanh toán</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    height: 1,
                    backgroundColor: '#f2efef',
                }} />
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Thông tin điểm thưởng</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    backgroundColor: '#fff',
                    marginTop: 5,
                    padding: 15,
                    gap: 20
                }}
            >
                <Text style={{
                    fontSize: 19,
                }}>Cài đặt</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Thông báo</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View
                style={{
                    backgroundColor: '#fff',
                    marginTop: 5,
                    padding: 15,
                    gap: 20,
                    marginBottom: 110
                }}
            >
                <Text style={{
                    fontSize: 19,
                }}>Khác</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Đánh giá sản phẩm</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    height: 1,
                    backgroundColor: '#f2efef',
                }} />
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Trung tâm bảo hành</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    height: 1,
                    backgroundColor: '#f2efef',
                }} />
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Phản ánh khiếu nại</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    height: 1,
                    backgroundColor: '#f2efef',
                }} />
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Giới thiệu bạn bè</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    height: 1,
                    backgroundColor: '#f2efef',
                }} />
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Trung tâm hỗ trợ</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
                <View style={{
                    height: 1,
                    backgroundColor: '#f2efef',
                }} />
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'gray' }}>Thông tin ứng dụng</Text>
                    <Image
                        source={require('../../../assets/nextIcon.png')}
                        resizeMode='contain'
                        style={{
                            width: 20,
                            height: 20,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Account