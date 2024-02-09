import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COCKTAILS } from '../../utils/cocktails';
import { useNavigation } from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';
import { CocktailCard } from '../../components/CocktailCard';

export const Search = () => {
  const navigation = useNavigation();
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [results, setResults] = useState(COCKTAILS);
  const [activeSections, setActiveSections] = useState([]);

  // Obter uma lista única de todos os ingredientes agrupados por tipo
  const allIngredientsByType = COCKTAILS.flatMap(cocktail =>
    cocktail.ingredientes.map(ing => ({ ...ing, ingrediente: ing.ingrediente.toLowerCase() }))
  ).reduce((acc, ing) => {
    if (!acc[ing.tipo]) acc[ing.tipo] = [];
    if (!acc[ing.tipo].includes(ing.ingrediente)) acc[ing.tipo].push(ing.ingrediente);
    return acc;
  }, {});

  // Ordenar os tipos e ingredientes em ordem alfabética
  const sortedTypes = Object.keys(allIngredientsByType).sort();
  for (let type of sortedTypes) {
    allIngredientsByType[type].sort();
  }

  useEffect(() => {
    // Filtrar os coquetéis que contêm todos os ingredientes selecionados
    const filteredCocktails = selectedIngredients.length > 0 ? COCKTAILS.filter(cocktail =>
      selectedIngredients.every(selectedIng =>
        cocktail.ingredientes.some(cocktailIng =>
          cocktailIng.ingrediente.toLowerCase() === selectedIng
        )
      )
    ) : COCKTAILS;
    setResults(filteredCocktails);
  }, [selectedIngredients]);

  const handleBadgePress = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(prev => prev.filter(ing => ing !== ingredient));
    } else {
      setSelectedIngredients(prev => [...prev, ingredient]);
    }
  };

  const handleCardPress = (cocktail) => {
    // Navegar para a tela de detalhes passando o objeto de coquetel completo
    navigation.navigate('Detail', { cocktail });
  };

  const renderHeader = (type, _, isActive) => {
    return (
      <View style={[styles.header, isActive ? styles.activeHeader : styles.inactiveHeader]}>
        <Text style={[styles.headerText,isActive ? styles.headerTextActive : styles.headerTextInactive]}>{type}</Text>
        <Text style={[styles.headerText,isActive ? styles.activeHeader : styles.inactiveHeade]}>{isActive ? '-' : '+'}</Text>
      </View>
    );
  };

  const renderContent = (type) => {
    return (
      <View style={styles.content}>
        {allIngredientsByType[type].map(ingredient => (
          <TouchableOpacity
            key={ingredient}
            style={[
              styles.badge,
              { backgroundColor: selectedIngredients.includes(ingredient) ? 'purple' : 'gray' }
            ]}
            onPress={() => handleBadgePress(ingredient)}
          >
            <Text style={styles.badgeText}>{ingredient}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Accordion
        sections={sortedTypes}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={setActiveSections}
      />
      <View style={styles.selectedContainer}>
        {selectedIngredients.map(ingredient => (
          <View key={ingredient} style={styles.selectedBadge}>
            <Text style={styles.badgeText}>{ingredient}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)}>
            <CocktailCard imageUrl={item.image} title={item.name} />
          </TouchableOpacity>
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeHeader: {
    backgroundColor: '#330E49',
    color:'#fff'
  },
  inactiveHeader: {
    backgroundColor: '#fff',
    color: '#330E49',
  },
  headerText: {
    fontSize: 16,
  },
  headerTextActive: {
    color: '#fff',
  },
  headerTextInactive: {
    color: '#330E49',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  badge: {
    fontSize: 10,
    color: 'white',
    margin: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 5,
  },
  badgeText: {
    color: 'white',
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  selectedBadge: {
    fontSize: 10,
    backgroundColor: '#330E49',
    color: 'white',
    margin: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 5,
  },
});
