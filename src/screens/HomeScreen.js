import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const HomeScreen = ({navigation}) => {
  const navigator_list = [
    { name: 'Professional'},
    { name: 'Personal'},
    { name: 'PhotoAlbum'}
  ]

  return (
    <View>
      <Text style={styles.textStyle}>Home</Text>
      <FlatList
        keyExtractor={(navigator) => navigator.name}
        data={navigator_list}
        renderItem={({ item }) => {
          return (
            <Button
              onPress={()=> navigation.navigate(item.name)}
              title={item.name}/>
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