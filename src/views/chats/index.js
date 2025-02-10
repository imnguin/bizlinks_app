import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { getDataStore } from '../../utils/funtions';
import { HOSTNAME } from '../../utils/constants/systemVar';
import { _fetchData } from '../../services/callAPI';
import { useDispatch } from 'react-redux';
import { showNotification } from '../../services/notification';

const Chats = ({ navigation }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([
    ]);
    const [userInfo, setUserInfo] = useState(null);
    const [isRefreshing, setRefreshing] = useState(false);
    useEffect(() => {
        const getInfo = async () => {
            const Info = await getDataStore('logininfo');
            setUserInfo(Info);
            const chats = await loadChats(Info.username);
            setData(chats);
        };
        getInfo();
    }, []);

    const loadChats = async (user) => {
        const param = { members: user };
        try {
            const response = await dispatch(
                _fetchData(HOSTNAME, "api/chat/loadChatsByUser", param, false)
            );
            console.log('ListChat', response)
            return response.resultObject || [];
        } catch (error) {
            console.error("Error loading chats:", error);
            return [];
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        try {
            const chats = await loadChats(userInfo.username);
            setData(chats);
        } catch (error) {
            console.error("Error refreshing chats:", error);
        } finally {
            setRefreshing(false);
        }
    };

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("Message", { roomId: item._id })}
            >
                <View style={{
                    flexDirection: 'row',
                    gap: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View>
                        <Image
                            source={{ uri: 'https://th.bing.com/th/id/R.1ca2146e8479ced6aa60ca30b6b06173?rik=yWM%2f04i%2b8IJIlw&pid=ImgRaw&r=0' }}
                            resizeMode='contain'
                            style={{
                                width: 50,
                                height: 50,
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
                            }}>{item._id}</Text>
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
                                }}>Tsuyoku naru to, nani demo jiyuu ni dekiru. Demo, hontou no chikara wa taisetsu na mono o mamoru koto da.</Text>
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
                refreshing={isRefreshing}
                onRefresh={onRefresh}
            />
        </View>
    )
}

export default Chats