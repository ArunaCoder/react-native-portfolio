import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./componentes/TelaInicial/";
import TelaJogos from "./componentes/TelaJogos/";
import TelaConsoles from "./componentes/TelaConsoles/";
import TelaNuvem from "./componentes/TelaNuvem/";

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TelaInicial} />
        <Stack.Screen name="Consoles" component={TelaConsoles} />
        <Stack.Screen name="Jogos" component={TelaJogos} />
        <Stack.Screen name="Nuvem" component={TelaNuvem} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};