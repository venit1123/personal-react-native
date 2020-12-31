import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

// components
const ComponentsScreen = () => {
    const greeting_2 = <Text>This is another way</Text>
    const name = 'Itzel' // can be string, int or a list, BUT NOT OBJECT such as {'color': 'red'} 
    
    return (
    <View>
       <Text style={style.textStyle}>Getting started with React Native</Text>
            <Text style={style.subHeaderTextStyle}>My name is {name}</Text>
        {/* {greeting_2} */}
    </View>
    )
}

// styles: this is just better to see the problems style can cause in the element
const style = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderTextStyle: {
        fontSize: 20 
    }
})

// exports 
export default ComponentsScreen