import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: "Friend 1", age: 20 },
        { name: "Friend 2", age: 45 },
        { name: "Friend 3", age: 32 },
        { name: "Friend 4", age: 23 },
        { name: "Friend 5", age: 56 },
        { name: "Friend 6", age: 75 },
        { name: "Friend 7", age: 12 },
        { name: "Friend 8", age: 56 }
    ]
    return (
        <FlatList
            keyExtractor={(friend) => friend.name }
            data={friends} 
            renderItem={({ item }) => {
                return (
                <Text style={style.textStyle}>{item.name} - Age {item.age}</Text>)
            }}>

        </FlatList>)
}

const style = StyleSheet.create({
    textStyle: 
    {
        marginVertical: 10
    }
})

export default ListScreen