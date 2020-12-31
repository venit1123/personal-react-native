import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const images_list = [
        { name: 'Itzel', source: require('../../assets/itzel.png')},
        { name: 'Teo-filo', source: require('../../assets/teo_filo.png')},
        { name: 'Coco', source: require('../../assets/teo_and_coco.png')}
    ]
    return (
        <View>
            <FlatList
                keyExtractor={(image) => image.name}
                data={images_list}
                renderItem={({ item }) => {
                    return (
                        <ImageDetail
                            imageName={item.name}
                            imageSource={item.source}
                        />)
                }}>

            </FlatList>
        </View>
        )
}

export default ImageScreen