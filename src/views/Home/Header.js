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
                paddingBottom: 10
            }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight : 'bold'
                    }}
                >{title}</Text>
            </View>
        </View>
    )
}

export default Header