import React, { setState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({color, onIncrease, onDecrease}) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button 
                onPress={() => onIncrease(color) }
                title={`Increase ${color}`}/>
            <Button
                onPress={() => onDecrease(color)}
                title={`Decrease ${color}`}/>
        </View>
    )
}

export default ColorCounter