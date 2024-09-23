import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-native-snap-carousel';
const { width } = Dimensions.get('window');
const data = [
    { title: 'Slide 1', image: 'https://th.bing.com/th/id/OIP.stJFwT5QvqYCcAzP9INt9QHaG0?rs=1&pid=ImgDetMain' },
    { title: 'Slide 2', image: 'https://th.bing.com/th/id/R.b2389df1fa7a9e80706db7bdeaa8d1a1?rik=BMLCf8fu4O%2bjmg&pid=ImgRaw&r=0' },
    { title: 'Slide 3', image: 'https://i.pinimg.com/originals/05/5f/ea/055fea426d77ea842d0b7be4f671be18.jpg' },
];
const Home = () => {
    const i = [1, 2, 3, 4, 5, 6, 7, 8];
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);
    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (activeIndex + 1) % data.length;
            setActiveIndex(nextIndex);
            carouselRef.current?.snapToItem(nextIndex);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [activeIndex]);

    const _renderItem = ({ item }) => {
        return (
            <View>
                <Image source={{ uri: item.image }} style={{
                    width: '100%',
                    height: 200,
                }} />
            </View>
        );
    };

    return (
        <ScrollView style={{ backgroundColor: '#fff' }}>
            <Carousel
                ref={carouselRef}
                data={data}
                renderItem={_renderItem}
                sliderWidth={width}
                itemWidth={width * 0.8}
                onSnapToItem={(index) => setActiveIndex(index)}
            />
            <View
                style={{
                    paddingTop: 15
                }}
            >
                <Text style={{ fontSize: 19, marginLeft: 15 }}>Dịch vụ phổ biển</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: 15, gap: 25 }}
                >
                    {
                        i.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        alignItems: 'center',
                                        gap: 10,
                                    }}
                                >
                                    <View
                                        style={{
                                            borderWidth: 0.5,
                                            height: 35,
                                            width: 35,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 13,
                                            borderColor: '#F46138'
                                        }}
                                    >
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../../../assets/2528039_connection_device_mobile_signals_tablet_icon.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    tintColor: '#F46138'
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ flexWrap: 'wrap' }}>Điện thoại {item}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>

                <Text style={{ fontSize: 19, marginLeft: 15 }}>Đề xuất cho bạn</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ padding: 15, gap: 25 }}
                >
                    {
                        i.map((item, index) => {
                            return (
                                <View
                                    key={index}
                                    style={{
                                        alignItems: 'center',
                                        gap: 10,
                                    }}
                                >
                                    <View
                                        style={{
                                            borderWidth: 0.5,
                                            height: 35,
                                            width: 35,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: 13,
                                            borderColor: '#F46138'
                                        }}
                                    >
                                        <TouchableOpacity>
                                            <Image
                                                source={require('../../../assets/185102_receipt_shopping_icon.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: 25,
                                                    height: 25,
                                                    tintColor: '#F46138'
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{ flexWrap: 'wrap' }}>Hóa đơn {item}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
        </ScrollView>
    )
}
export default Home