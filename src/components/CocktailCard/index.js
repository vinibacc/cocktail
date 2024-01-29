import { View, StyleSheet, Image, Text } from "react-native"

export const CocktailCard = (props) => {

  return (
    <View style={{ margin: 10 }}>
      <Image source={{ uri: props.imageUrl }} style={{ width: 200, height: 200 }} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center"
  }
})