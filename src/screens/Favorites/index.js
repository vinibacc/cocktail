import { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export const Favorites = () => {
  const [favoriteCocktails, setFavoriteCocktails] = useState([]);
  const navigation = useNavigation();


  useEffect(() => {
    // Carregar a lista de favoritos ao iniciar a tela
    loadFavoriteList();

    // Adicionar um listener para recarregar a lista ao focar na tela
    const unsubscribe = navigation.addListener('focus', () => {
      loadFavoriteList();
    });

    // Remover o listener ao desmontar o componente
    return unsubscribe;
  }, [navigation]);

  const loadFavoriteList = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      if (favorites) {
        const favoritesArray = JSON.parse(favorites);
        setFavoriteCocktails(favoritesArray);
      }
    } catch (error) {
      console.error('Erro ao carregar lista de favoritos:', error);
    }
  };




  const handleGoToDetail = (cocktail) => {
    // Navegar para a tela de detalhes
    navigation.navigate('Detail', { cocktail });
  };

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
        Lista de Itens Favoritados
      </Text>
      <FlatList
        data={favoriteCocktails}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleGoToDetail(item)}>
            <View style={{ marginBottom: 10, padding: 10, backgroundColor: 'lightgrey' }}>
              <Text>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};