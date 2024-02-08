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

  console.log(favoriteCocktails)
  return (
    <View>
      <FlatList
        data={favoriteCocktails}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleGoToDetail(item)}>
            <View style={{ margin: 10, padding: 10, backgroundColor: '#330E49'}}>
              <Text style={{ fontFamily: 'PermanentMarker_400Regular',  color: 'white', textAlign:'center'}}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};