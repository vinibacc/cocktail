import { View, StyleSheet, Image, Text } from "react-native"

export const CocktailCard = (props) => {

  return (
    <View style={styles.card}>
      <Image source={{ uri: props.imageUrl }} style={{ width: 150, height: 150, borderRadius: 15 }} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: { 
    margin: 10, 
    backgroundColor: '#330E49' ,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#330E49' ,
  },
  title: {
    textAlign: "center",
    fontFamily: 'PermanentMarker_400Regular',
    backgroundColor: '#330E49',
    margin: 8,
    padding: 4,
    borderRadius: 5,
    color: '#fff',
  }
})