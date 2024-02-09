import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; // ou outro ícone da sua escolha

export const Footer = ({ onPressFavorites, onPressSearch }) => (
<View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
  <TouchableOpacity style={{margin:10, padding:5}} onPress={onPressFavorites}>
    <View style={{ alignItems: 'center' }}>
      <Icon name="martini-glass" size={24} color="#330E49" />
      <Text>Favoritos</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity style={{margin:10, padding:5}} onPress={onPressSearch}>
    <View style={{ alignItems: 'center' }}>
      <Icon name="magnifying-glass" size={24} color="#330E49" />
      <Text>Buscar</Text>
    </View>
  </TouchableOpacity>
</View>
);