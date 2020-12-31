import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = (props) => {
    console.log(props)
    return (
        <View>
            <Text>{props.imageName}</Text>
            <Image style={style.imgStyle} source={props.imageSource}/>
        </View>
    )
}

 const style = StyleSheet.create({
    imgStyle: {
        width: 230,
        height: 230
    }
 })

export default ImageDetail