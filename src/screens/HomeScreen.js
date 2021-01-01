import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const HomeScreen = ({navigation}) => {
  const navigator_list = [
    { key: 'Professional', buttonName: 'Professional'},
    { key: 'Personal', buttonName: 'Personal'},
    { key: 'PhotoAlbum', buttonName: 'Photo Album'},
    { key: 'Counter', buttonName: 'Counter'}
  ]

  return (
    <View>
      <Text style={styles.textStyle}>Home</Text>
      <FlatList
        keyExtractor={(navigator) => navigator.key}
        data={navigator_list}
        renderItem={({ item }) => {
          return (
            <Button
              onPress={() => navigation.navigate(item.key)}
              title={item.buttonName}/>
            )
        }}>

      </FlatList>
    </View>
    )
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default HomeScreen;