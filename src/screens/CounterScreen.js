import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, FlatList} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const CounterScreen = () => {
    const color_list = [ 
        { color: 'Red'},
        { color: 'Green' },
        { color: 'Blue' }
    ]

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const COLOR_INCREMENT = 15

    return(
        <View>
            <FlatList
                keyExtractor={(item) => item.color}
                data={color_list}
                renderItem={({ item }) =>{
                    return (
                        <ColorCounter 
                            color={item.color}

                            onIncrease={(color) => {
                                switch (color){
                                    case 'Red':
                                        setRed(red + COLOR_INCREMENT)
                                        break
                                    case 'Green':
                                        setGreen(green + COLOR_INCREMENT)
                                        break
                                    case 'Blue':
                                        setBlue(blue + COLOR_INCREMENT)
                                        break
                                    }
                                }
                            }
                            onDecrease={(color) => {
                                switch (color) {
                                    case 'Red':
                                        setRed(red - COLOR_INCREMENT)
                                        break
                                    case 'Green':
                                        setGreen(green - COLOR_INCREMENT)
                                        break
                                    case 'Blue':
                                        setBlue(blue - COLOR_INCREMENT)
                                        break
                                    }
                                }
                            }
                        /> 
                    )
                }}>
            </FlatList>
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }}>

            </View>
        </View>
    )
}

// const style = StyleSheet.create({

// })

export default CounterScreen