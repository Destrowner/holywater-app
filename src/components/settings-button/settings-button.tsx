import React from 'react'

import {
    Pressable,
    StyleProp,
    ViewStyle,
} from 'react-native'

import Icon from '../Icon'

import styles from './styles'

type Props = {
    onPress: () => void
    containerStyle?: StyleProp<ViewStyle>
}

const SettingsButton = (props: Props) => {
    const {
        onPress,
        containerStyle = {},
    } = props
    
    return (
        <Pressable
            style={({ pressed }) => [styles.container, containerStyle, { opacity: pressed ? 0.2 : 1 }]}
            onPress={onPress}
        >
            <Icon name='settings' />
        </Pressable>
    )
}

export default SettingsButton
