import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import { Detail } from './src/screens/Detail';
import { Favorites } from './src/screens/Favorites';
import {useFonts, PermanentMarker_400Regular} from '@expo-google-fonts/permanent-marker';

const Stack = createNativeStackNavigator()


export default function App() {
  let [fontsLoaded] = useFonts({
    PermanentMarker_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#100519', // Cor de fundo da barra
            },
            headerTintColor: '#fff', // Cor do texto da barra
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlight: 'center',
              fontFamily: 'PermanentMarker_400Regular',
            },
          }}>
          <Stack.Screen name="Cocktails" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </>
  );
};
