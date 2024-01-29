import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // ou outro ícone da sua escolha

export const Footer = ({ onPress }) => (
    <View style={{ alignItems: 'center', padding: 10 }}>
        <TouchableOpacity onPress={onPress}>
            <View style={{ alignItems: 'center' }}>
                <Icon name="star" size={30} color="black" />
                <Text style={{ color: 'black', marginTop: 5 }}>favoritos</Text>
            </View>
        </TouchableOpacity>
    </View>
);
