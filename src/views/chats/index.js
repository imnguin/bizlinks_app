import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';

const Chats = ({ navigation }) => {
    const [data, setData] = useState([
    ]);

    useEffect(() => {
        let aa = [];
        for (let i = 0; i < 15; i++) {
            aa.push({
                _id: i,
                fullName: "Phùng Thế Cơ",
                isOnline: true,
                userImg:
                    "https://insite.thegioididong.com/cdninsite/UserImages/reviewed/142188_thumb.jpg",
                lastSeen: "2023-11-18T04:52:06.501Z",
                lastMessage: "Chieu nay em co ranh khong?",
                messageInQueue: 0,
                lastMessageTime: "12:15 PM",
            });
        }
        setData(aa);
    }, [])

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("Message", { username: item.fullName })}
            >
                <View style={{
                    flexDirection: 'row',
                    gap: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View>
                        <Image
                            source={require('../../../assets/me.png')}
                            resizeMode='contain'
                            style={{
                                width: 55,
                                height: 55,
                                borderRadius: 30
                            }}
                        />
                    </View>
                    <View style={{
                        flex: 1,
                        gap: 4,
                        borderBottomWidth: 0.5,
                        borderBottomColor: '#d4dadd',
                        height: 75,
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Lâm Xuân Nguyên</Text>
                            <Text>18 giờ</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={{
                                    fontSize: 17,
                                    flexShrink: 1
                                }}>Xíu mày về đây thì biết haha haha haha hahah ahahahh ahahaha hahaha ahahaha hahaha hahaha hahah hahaha hahaha hahahy hahaha hahaha hahaha hahah haha </Text>
                            <View
                                style={{
                                    backgroundColor: 'red',
                                    borderRadius: 11,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingVertical: 2,
                                    paddingHorizontal: 4,
                                }}>
                                <Text style={{
                                    fontSize: 9,
                                    color: 'white'
                                }}>10</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            paddingLeft: 15,
            paddingRight: 15,
            paddingBottom: 84
        }}>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={(item) => item._id.toString()}
            />
        </View>
    )
}

export default Chats