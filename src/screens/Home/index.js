import { View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { COCKTAILS } from '../../utils/cocktails';
import { CocktailCard } from '../../components/CocktailCard';
import { useNavigation } from '@react-navigation/native';
import { Footer } from '../../components/Footer';

export const Home = () => {
  const navigation = useNavigation();

  const handleCardPress = (cocktail) => {
    // Navegar para a tela de detalhes passando o objeto de coquetel completo
    navigation.navigate('Detail', { cocktail });
  };

  return (
    <View style={styles.content}>
      <FlatList
      style={{backgroundColor: '#f5f5f5'}}
        data={COCKTAILS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)}>
            <CocktailCard imageUrl={item.image} title={item.name} />
          </TouchableOpacity>
        )}
        numColumns={2} // Definindo duas colunas por linha
        showsHorizontalScrollIndicator={false}
      />
      <Footer onPress={() => navigation.navigate('Favorites')} />
    </View>
  );
};


const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    alignItems:'center'
  },
});