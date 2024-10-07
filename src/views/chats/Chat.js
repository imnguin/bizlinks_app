import React, { useState, useCallback, useEffect } from 'react';
import { Bubble, GiftedChat, Message } from 'react-native-gifted-chat';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import CustomInputToolbar from './CustomInputToolbar'; // Import component tự tạo

const Chat = ({ navigation }) => {
    const [messages, setMessages] = useState([]);

    const onSend = useCallback((newMessages = []) => {
        const updatedMessages = newMessages.map((message) => ({
            ...message,
            isRead: false, // Mặc định khi gửi tin nhắn, trạng thái là chưa xem
        }));

        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, updatedMessages)
        );

        setTimeout(() => {

        })

        // Giả lập bot trả lời
        setTimeout(() => {
            setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, [
                    {
                        _id: Math.random(),
                        text: 'Nhắn nhắn cái địt mẹ mày!',
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'ChatGPT',
                            avatar: 'https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/449074787_3286501664985752_2833373860847785822_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z4DIpr2iX10Q7kNvgEEM8Rw&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AgblF_c14NrUwsRae0uGfGt&oh=00_AYBalAYfxRzoLGVrVEKdqMB5SNMjmExlIKYoOT-8pf8KXw&oe=6709E795',
                        },
                        isRead: false,
                    },
                ])
            );
        }, 3000);
    }, []);

    const CustomMessage = (props) => {
        const { currentMessage } = props;
        return (
            <View>
                <Message {...props} />
                {
                    currentMessage._id === messages[0]._id && currentMessage.user._id === 1 && <View
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
                        <Image
                            source={require('../../../assets/me.png')}
                            style={{
                                height: 17,
                                width: 17,
                                resizeMode: 'contain',
                                borderRadius: 50,
                                borderColor: '#fff',
                                borderWidth: 1
                            }}
                        />
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
                        backgroundColor: '#F46138', // Màu cho tin nhắn của người dùng
                    },
                    left: {
                        backgroundColor: '#e5e5ea', // Màu cho tin nhắn của ChatGPT
                    },
                }}
            />
        );
    };

    return (
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
                paddingBottom: 10
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
                    _id: 1
                }}
                renderMessage={(props) => <CustomMessage {...props} />}
                renderInputToolbar={(props) => (
                    <CustomInputToolbar
                        onSend={(message) => props.onSend([{ text: message.text, user: props.user }])}
                    />
                )}
                renderBubble={renderBubble}
            />
        </View>
    );
};

export default Chat;
