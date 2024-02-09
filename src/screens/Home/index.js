import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { COCKTAILS } from '../../utils/cocktails';
import { CocktailCard } from '../../components/CocktailCard';
import { useNavigation } from '@react-navigation/native';
import { Footer } from '../../components/Footer';

export const Home = () => {
  const navigation = useNavigation();

  const [numColumns, setNumColumns] = useState(getOrientation());

  useEffect(() => {
    Dimensions.addEventListener('change', handleChange);
    return () => {
      Dimensions.removeEventListener('change', handleChange);
    };
  }, []);

  function handleChange() {
    setNumColumns(getOrientation());
  }

  function getOrientation() {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height ? 3 : 2; // 4 colunas para landscape, 2 para portrait
  }

  const handleCardPress = (cocktail) => {
    // Navegar para a tela de detalhes passando o objeto de coquetel completo
    navigation.navigate('Detail', { cocktail });
  };

  return (
    <View style={styles.content}>
      <FlatList
        style={{ backgroundColor: '#f5f5f5' }}
        data={COCKTAILS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)}>
            <CocktailCard imageUrl={item.image} title={item.name} />
          </TouchableOpacity>
        )}
        numColumns={numColumns} // Definindo duas colunas por linha
        showsHorizontalScrollIndicator={false}
      />
      <Footer
        onPressFavorites={() => navigation.navigate('Favorites')}
        onPressSearch={() => navigation.navigate('Search')}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center'
  },
});