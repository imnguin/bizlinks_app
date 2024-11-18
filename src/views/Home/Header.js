import { View, Text } from 'react-native'
import React from 'react'

const Header = (props) => {
    let {
        title
    } = props;

    return (
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
                >{title}</Text>
            </View>
        </View>
    )
}

export default Header