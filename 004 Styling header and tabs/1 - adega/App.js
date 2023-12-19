import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Entypo,FontAwesome5,AntDesign} from '@expo/vector-icons';

import TelaInicial from "./componentes/TelaInicial";
import TelaCatalogo from "./componentes/TelaCatalogo";
import Telacontato from "./componentes/TelaContato";

const Tabs = createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:'#451a27'
                },
                headerTitleStyle:{
                    color: '#fff',
                    fontWeight: 'bold'
                },
                headerTitleAlign:'center',
                tabBarStyle: {
                    backgroundColor: "#fff",
                  },
                  tabBarLabelStyle: {
                    fontSize: 18,
                    fontWeight: 'bold',
                  },
                  tabBarActiveBackgroundColor: "#451a27",
                  tabBarInactiveTintColor: "#665555",
                  tabBarActiveTintColor: "#fff",
            }}>
                <Tabs.Screen
                name="Início"
                component={TelaInicial}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="home" color={color} size={20}/>
                    )
                }}
                />
                <Tabs.Screen
                name="Catálogo"
                component={TelaCatalogo}
                options={{
                    tabBarIcon: ({color}) => (
                        <FontAwesome5 name="wine-bottle" color={color} size={20}/>
                    )
                }}
                />
                <Tabs.Screen
                name="Contato"
                component={Telacontato}
                options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="contacts" color={color} size={20}/>
                    )
                }}
                />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}