import React, { useState, useCallback, useEffect } from 'react';
import { Bubble, GiftedChat, Message } from 'react-native-gifted-chat';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import CustomInputToolbar from './CustomInputToolbar'; // Import component tự tạo
import { getDataStore, getNameInitials } from '../../utils/funtions';
import { useRoute } from '@react-navigation/native';
import { HOSTNAME } from '../../utils/constants/systemVar';
import { useDispatch, useSelector } from 'react-redux';
import { _fetchData } from '../../services/callAPI';
const Chat = ({ navigation }) => {
    const dispatch = useDispatch();
    const info = useSelector(state => JSON.parse(state.user.value));
    const route = useRoute();
    const [messages, setMessages] = useState([]);
    const { roomId } = route.params;
    const [isLoad, setIsLoad] = useState(false);
    const loadChat = async () => {
        setIsLoad(false);
        const response = await dispatch(
            _fetchData(HOSTNAME, "api/chat/loadMessageByChatId", { roomId })
        );

        const data = response.resultObject.reverse().map((item) => {
            return {
                ...item,
                user: {
                    _id: item.senderId
                }
            };
        });
        setMessages(data);
    }

    useEffect(() => {
        loadChat(roomId)
        setIsLoad(true)
    }, [roomId]);

    const onSend = useCallback(async (newMessages = []) => {
        const res = {
            roomId: roomId,
            createdAt: newMessages[0].createdAt,
            text: newMessages[0].text,
            senderId: info.username,
            isRead: false
        }
        const response = await dispatch(
            _fetchData(HOSTNAME, "api/chat/saveChat", res)
        );

        const updatedMessages = newMessages.map((message) => ({
            ...message,
            isRead: false,
        }));

        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, updatedMessages)
        );

        // Giả lập bot trả lời
        // setTimeout(() => {
        //     // Giả lập bot trả lời
        //     setMessages((previousMessages) => {
        //         const id = Math.random();
        //         const lastDigit = Math.floor(id * 10) % 10; // Lấy số cuối của Math.random()
        //         const text =
        //             lastDigit >= 1 && lastDigit <= 8
        //                 ? autoRep[lastDigit - 1] // Chọn từ danh sách autoRep
        //                 : 'これをよく覚えておけ、俺の生徒に手を出すな。'; // Giá trị mặc định

        //         return GiftedChat.append(previousMessages, [
        //             {
        //                 _id: id,
        //                 text: text,
        //                 createdAt: new Date(),
        //                 user: {
        //                     _id: 2,
        //                     name: 'ChatGPT',
        //                     avatar: 'https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/449074787_3286501664985752_2833373860847785822_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z4DIpr2iX10Q7kNvgEEM8Rw&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AgblF_c14NrUwsRae0uGfGt&oh=00_AYBalAYfxRzoLGVrVEKdqMB5SNMjmExlIKYoOT-8pf8KXw&oe=6709E795',
        //                 },
        //                 isRead: false,
        //             },
        //         ]);
        //     });
        // }, 2000);
    }, []);

    const CustomMessage = (props) => {
        const { currentMessage } = props;
        return (
            <View>
                <Message {...props} />
                {
                    // currentMessage._id === messages[0]._id && 
                    currentMessage.user._id === info.username && <View
                        style={{
                            alignSelf: 'flex-end',
                            borderRadius: 7,
                            backgroundColor: "#B5C0C4",
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 12,
                            marginBottom: 12,
                            justifyContent: 'center'
                        }}>
                        {/* <Image
                            source={require('../../../assets/me.png')}
                            style={{
                                height: 17,
                                width: 17,
                                resizeMode: 'contain',
                                borderRadius: 50,
                                borderColor: '#fff',
                                borderWidth: 1
                            }}
                        /> */}
                    </View>
                }
            </View>
        );
    };

    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: '#F46138',
                    },
                    left: {
                        backgroundColor: '#e5e5ea',
                    },
                }}
            />
        );
    };

    return (
        isLoad &&
        <View style={{
            flex: 1
        }}>
            <View style={{
                height: 95,
                backgroundColor: '#F46138',
                flexDirection: 'row',
                alignItems: 'flex-end',
                paddingLeft: 15,
                paddingRight: 15,
                paddingBottom: 10,
            }}>
                <View style={{
                    flexDirection: 'row',
                    gap: 15,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image
                            source={require('../../../assets/back.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: '#fff',
                            }}
                        />
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 1,
                            gap: 3
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: '500',
                                color: '#fff'
                            }}
                        >Lâm Xuân Nguyên</Text>
                        <Text
                            style={{
                                fontSize: 12,
                                color: '#fff'
                            }}>Vừa mới truy cập</Text>
                    </View>
                    <TouchableOpacity>
                        <Image
                            source={require('../../../assets/call.png')}
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
                            source={require('../../../assets/video_call.png')}
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
                            source={require('../../../assets/list.png')}
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
            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: info.username
                }}
                renderMessage={(props) => <CustomMessage {...props} />}
                renderInputToolbar={(props) => (
                    <CustomInputToolbar
                        onSend={(message) => props.onSend([{ text: message.text, user: props.user }])}
                    />
                )}
                renderBubble={renderBubble}
                isStatusBarTranslucentAndroid={true}
            />
        </View>
    );
};

export default Chat;
