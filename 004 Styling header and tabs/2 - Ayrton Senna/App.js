import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

import TelaInicio from "./components/TelaInicio";
import TelaSobre from "./components/TelaSobre";
import TelaVitorias from "./components/TelaVitorias";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ceb105'
          },
          headerTitleStyle: {
            // color: '#fff',
            fontWeight: 'bold'
          },
          tabBarStyle: {
            backgroundColor: "#ceb105"
          },
          tabBarActiveBackgroundColor: '#fff',
          tabBarActiveTintColor: '#cf0404',
          tabBarInactiveTintColor: "#000c",
        }}
      >
        <Tabs.Screen
          name='Início'
          component={TelaInicio}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name='home' color={color} size={25} />
            )
          }}
        />
        <Tabs.Screen
          name='Sobre'
          component={TelaSobre}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name='question-circle-o' color={color} size={25} />
            )
          }}
        />
        <Tabs.Screen
          name='Vitórias'
          component={TelaVitorias}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name='trophy' color={color} size={25} />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}