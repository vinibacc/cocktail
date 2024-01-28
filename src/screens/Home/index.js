import { FlatList, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { COCKTAILS } from "../../utils/cocktails"
import { CocktailCard } from "../../components/CocktailCard"

export const Home = () => {
    return <View style={styles.container}>
        <View style={styles.category}>
            <Pressable>
                <Text>Olá</Text>
            </Pressable>
            <Pressable>
                <Text>Olá</Text>
            </Pressable>
            <Pressable>
                <Text>Olá</Text>
            </Pressable>
        </View>
        <ScrollView>

            <Text style={styles.cocktailTextCategory}>Todos os coquetéis</Text>
            <FlatList
                data={COCKTAILS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CocktailCard imageUrl={{ uri: item.image }} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.cocktailTextCategory}>Todos os coquetéis</Text>
            <FlatList
                data={COCKTAILS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CocktailCard imageUrl={{ uri: item.image }} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.cocktailTextCategory}>Todos os coquetéis</Text>
            <FlatList
                data={COCKTAILS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CocktailCard imageUrl={{ uri: item.image }} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.cocktailTextCategory}>Todos os coquetéis</Text>
            <FlatList
                data={COCKTAILS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CocktailCard imageUrl={{ uri: item.image }} />}
                horizontal
                contentContainerStyle={styles.contentList}
                showsHorizontalScrollIndicator={false}
            />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        width: "100%",
        backgroundColor: "#fff"
    },
    category: {
        backgroundColor: "#ff03ee",
        width: "100%",
        paddingTop: 80,
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    cocktailTextCategory: {
        fontSize: 18,
        fontWeight: "700",
        padding: 15
    },
    contentList: {
        paddingLeft: 20,
        paddingRight: 30
    }
})