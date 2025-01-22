import React, { useState, useCallback, useEffect } from 'react';
import { Bubble, GiftedChat, Message } from 'react-native-gifted-chat';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import CustomInputToolbar from './CustomInputToolbar'; // Import component tự tạo
import { getDataStore, getNameInitials } from '../../utils/funtions';
import { useRoute } from '@react-navigation/native';
import { HOSTNAME } from '../../utils/constants/systemVar';
import { useDispatch } from 'react-redux';
import { _fetchData } from '../../services/callAPI';
const Chat = ({ navigation }) => {
    const dispatch = useDispatch();
    const [userInfo, setUserInfo] = useState(null);
    const route = useRoute();
    const [messages, setMessages] = useState([]);

    const { chatId } = route.params;
    const loadChat = async () => {
        const param = { chatId};
        try {
            const response = await dispatch(
                _fetchData(HOSTNAME, "api/chat/loadMessageByChatId", param)
            );
            console.log(response)

            return response.resultObject || [];
        } catch (error) {
            console.error("Error loading chats:", error);
            return [];
        }
    }
    useEffect(() => {
        const getInfo = async () => {
            setUserInfo(await getDataStore('logininfo'))
        }
        getInfo();
    }, []);

    useEffect(() => {
        loadChat(chatId)
    }, [chatId]);

    const autoRep = [
        'Kono sekai dewa, yowai mono wa shinu houhou o erabu kenri ga nai.',
        'Ore to Sukuna, docchi wo aite ni erabu?',
        'Sekai o honki de rikai shite hajimete, sore o kaeru koto ga dekiru.',
        'Ii sensei wa subete o oshieru no dewa naku, gakusei ni jibun de manabu houhou o oshieru mono da.',
        'Ore wa saikyou da.',
        'Sekai wa ore o hitsuyou to shiteiru. Ore ga sekai o hitsuyou to suru yori mo.',
        'Tsuyoku naru to, nani demo jiyuu ni dekiru. Demo, hontou no chikara wa taisetsu na mono o mamoru koto da.',
        'Kore o yoku oboeteoke, ore no seito ni te o dasu na.'
    ];


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
            // Giả lập bot trả lời
            setMessages((previousMessages) => {
                const id = Math.random();
                const lastDigit = Math.floor(id * 10) % 10; // Lấy số cuối của Math.random()
                const text =
                    lastDigit >= 1 && lastDigit <= 8
                        ? autoRep[lastDigit - 1] // Chọn từ danh sách autoRep
                        : 'これをよく覚えておけ、俺の生徒に手を出すな。'; // Giá trị mặc định

                return GiftedChat.append(previousMessages, [
                    {
                        _id: id,
                        text: text,
                        createdAt: new Date(),
                        user: {
                            _id: 2,
                            name: 'ChatGPT',
                            avatar: 'https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/449074787_3286501664985752_2833373860847785822_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Z4DIpr2iX10Q7kNvgEEM8Rw&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=AgblF_c14NrUwsRae0uGfGt&oh=00_AYBalAYfxRzoLGVrVEKdqMB5SNMjmExlIKYoOT-8pf8KXw&oe=6709E795',
                        },
                        isRead: false,
                    },
                ]);
            });
        }, 2000);
    }, []);

    const CustomMessage = (props) => {
        const { currentMessage } = props;
        return (
            <View>
                <Message {...props} />
                {
                    currentMessage._id === messages[0]._id && currentMessage.user._id === userInfo.username && <View
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
        userInfo &&
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
                    _id: userInfo.username
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
