import { StyleSheet, Pressable, Image, Text, TouchableOpacity } from "react-native"
export const CocktailCard = (props) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Image style={styles.img} source={props.imageUrl} />
            <Text style={styles.title}>Teste</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card:{
        marginLeft: 20
    },
    img: {
        width: 200,
        height: 200,
    },
    title: {
        borderColor: "#000",
        borderWidth: 1,
        width: "100%",
        textAlign: "center"
    }
})