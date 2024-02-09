import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import { useLayoutEffect, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome6'; // ou outro ícone da sua escolha
import Toast from "react-native-toast-message";

export const Detail = ({ route, navigation }) => {
    const { cocktail } = route.params;
    const [isFavorited, setIsFavorited] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: cocktail.name,
            headerRight: () => (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 15 }}>
                    <TouchableOpacity onPress={toggleFavorite}>
                        {isFavorited ? ( // Usando uma expressão ternária para renderizar o ícone correto com base na condição isFavorited
                            <Icon name="martini-glass" size={30} color="#fff" />
                        ) : (
                            <Icon name="martini-glass-empty" size={30} color="#fff" />
                        )}
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation, cocktail.name, isFavorited]);

    useEffect(() => {
        // Carregue o estado de favorito ao iniciar a tela
        loadFavoriteStatus();
    }, []);

    const handleQuantityPress = () => {
        Toast.show({
            type: 'info',
            position: 'bottom',
            text1: '1 oz equivale a 30 ml',
            visibilityTime: 4000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    };

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


    const getAlcoholColor = () => {
        switch (cocktail.teor_alcoolico) {
            case 'Baixo':
                return '#008000'; // Verde
            case 'Médio':
                return '#FFD700'; // Amarelo
            case 'Alto':
                return '#FF0000'; // Vermelho
            default:
                return '#FFFFFF'; // Branco (se o teor alcoólico não for reconhecido)
        }
    };

    return (
        <View style={styles.content}>
            <View style={styles.thumbnails}>
                <Image source={{ uri: cocktail.image }} style={styles.image} />
                <View style={styles.ingredientsContainer}>
                    {cocktail.ingredientes.map((ingrediente, index) => (
                        <View style={styles.ingredientRow} key={index}>
                            <Text style={styles.ingredient}>{ingrediente.ingrediente}</Text>
                            <TouchableOpacity onPress={handleQuantityPress}>
                                <Text style={styles.quantity}>{ingrediente.quantidade}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <View style={styles.characteristicsContainer}>
                    <Text style={styles.characteristicsLabel}>Características:</Text>
                    {cocktail.caracteristicas.map((caracteristica, index) => (
                        <Text key={index} style={[styles.characteristic, { backgroundColor: '#330E49' }]}>{caracteristica}</Text>
                    ))}
                </View>
                <View style={styles.alcoholContainer}>
                    <Text style={styles.alcoholLabel}>Teor alcoólico</Text>
                    <Text style={[styles.alcoholLevel, { backgroundColor: getAlcoholColor() }]}>{cocktail.teor_alcoolico}</Text>
                </View>
                <View style={styles.alcoholContainer}>
                    <Text style={styles.alcoholLabel}>Tipo de Copo</Text>
                    <Text style={styles.alcoholLevel}>{cocktail.tipo_copo}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    thumbnails: {
        margin: 10,
    },
    image: {
        width: '100%',
        height: '300px',
        alignSelf: 'center', // Alinha a imagem centralmente na largura da tela

    },
    ingredientsContainer: {
        marginTop: 10,
        justifyContent: 'flex-end', // Alinha os ingredientes à direita
    },
    ingredientRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#330E49',
        borderWidth: 2,
        backgroundColor: '#fff',
    },
    ingredient: {
        marginLeft: 8,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 10,
        textAlign: 'right',
        backgroundColor: '#330E49',
        color: 'white',
        margin: 8,
        padding: 4,
        borderRadius: 5,
    },
    characteristicsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'baseline',
    },
    characteristicsLabel: {
        marginRight: 5,
        fontWeight: 'bold',
        color: '#330E49',
    },
    characteristic: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginRight: 5,
        color: 'white',
        padding: 4,
        borderRadius: 5,
    },
    alcoholContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 5,
        alignItems: 'center',
        borderRadius: 5,
        borderColor: '#330E49',
        borderWidth: 2,
        backgroundColor: '#fff',

    },
    alcoholLabel: {
        marginLeft: 8,
        fontWeight: 'bold',
    },
    alcoholLevel: {
        fontSize: 10,
        textAlign: 'right',
        backgroundColor: '#330E49',
        color: 'white',
        margin: 8,
        padding: 4,
        borderRadius: 5,
    },
});