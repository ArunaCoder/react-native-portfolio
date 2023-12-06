import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';

import TelaInicial from "./componentes/TelaInicial";
import TelaSobre from "./componentes/TelaSobre";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen
          name="Início"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" color={color} size={24} />
              // <Entypo name="home" color="black" size={24} />
            )
          }}
        />
        <Tabs.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="question-circle-o" color={color} size={24} />
              // <FontAwesome name="question-circle-o" color="black" size={ 24 } />
            )
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};
//------------------
