import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Detail = ({ route, navigation }) => {
    const { cocktail } = route.params;
    const [isFavorited, setIsFavorited] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: cocktail.nome,
            headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                    <TouchableOpacity onPress={toggleFavorite}>
                        <Text style={{ color: 'white', fontSize: 25 }}>{isFavorited ? '♥' : '♡'}</Text>
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, cocktail.nome, isFavorited]);

    useEffect(() => {
        // Carregue o estado de favorito ao iniciar a tela
        loadFavoriteStatus();
    }, []);

    // Função para alternar o estado de favorito
    const toggleFavorite = async () => {
        if (isFavorited) {
            // Se já favoritado, desfavoritar
            await removeFavorite(cocktail.id);
        } else {
            // Se não favoritado, favoritar
            await addFavorite(cocktail);
        }
        // Atualizar o estado de favorito
        setIsFavorited(!isFavorited);
    };

    // Função para adicionar um coquetel aos favoritos
    const addFavorite = async (cocktailToAdd) => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            let favoritesArray = [];
            if (favorites) {
                favoritesArray = JSON.parse(favorites);
            }
            favoritesArray.push(cocktailToAdd);
            await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
        } catch (error) {
            console.error('Erro ao adicionar favorito:', error);
        }
    };

    // Função para remover um coquetel dos favoritos
    const removeFavorite = async (cocktailIdToRemove) => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            let favoritesArray = [];
            if (favorites) {
                favoritesArray = JSON.parse(favorites);
                favoritesArray = favoritesArray.filter((item) => item.id !== cocktailIdToRemove);
            }
            await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
        } catch (error) {
            console.error('Erro ao remover favorito:', error);
        }
    };

    // Função para carregar o estado de favorito ao iniciar a tela
    const loadFavoriteStatus = async () => {
        try {
            const favorites = await AsyncStorage.getItem('favorites');
            if (favorites) {
                const favoritesArray = JSON.parse(favorites);
                const isCocktailFavorited = favoritesArray.some((item) => item.id === cocktail.id);
                setIsFavorited(isCocktailFavorited);
            }
        } catch (error) {
            console.error('Erro ao carregar favoritos:', error);
        }
    };


    return (
        <View style={styles.content}>

        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        marginTop: 80, // Altura do cabeçalho + margem
        flex: 1,
        width: '100%',
        backgroundColor: 'white',
    },
});