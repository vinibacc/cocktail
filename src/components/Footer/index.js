import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6'; // ou outro ícone da sua escolha

export const Footer = ({ onPress }) => (
    <View style={{ alignItems: 'center', padding: 10 }}>
        <TouchableOpacity onPress={onPress}>
            <View style={{ alignItems: 'center',}}>
                <Icon name="martini-glass-citrus" size={30} color="#330E49" />
                <Text style={{ color: '#330E49', marginTop: 5 }}>favoritos</Text>
            </View>
        </TouchableOpacity>
    </View>
);
