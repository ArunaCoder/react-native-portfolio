// DevMedia - 2ª missão
// instalar Node.js
// instalar expo --> npm i -g expo
// instalar expo no celular
// crear app usando expo --> npx create-expo-app NomeProjeto
// iniciar projeto no expo (para ver no celular) --> npx expo start

// ESTRUTURA BÁSICA ---------------------------------------------------------------
// import React from 'react'; --> desnecessário na versão atual do react-native
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>Hello World</Text>
      <Text>Criado por DevMedia</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  }, img: {
    width: 200,
    height: 120,
    marginBottom: 10,
  }
});

//EXIBIR UMA IMAGEM EXTERNA
<Image
  source={{ uri: 'https://www.devmedia.com.br/favicon.png ' }}
  style={estilos.img}
/>;


//EXIBIR UMA IMAGEM LOCAL
import Capa from './capa.png';
<Image
  source={Capa}
  style={estilos.img}
/>;



// ESTILIZAÇÃO
// INLINE
<Text style={{ fontSize: 36, textAlign: 'center' }} >Estilizando o aplicativo</Text>

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'darkblue', alignItems: 'center', justifyContent: 'center' }}>

      <Text style={{ fontSize: 36, color: 'white' }} >
        Estilizando o aplicativo
      </Text>

    </View>
  )
}

// COM QUEBRA DE LINHA
export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'darkblue',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <Text style={{
        fontSize: 36,
        color: 'white'
      }} >
        Estilizando o aplicativo
      </Text>

    </View>
  )
}

// DevMedia 3ª missão
// IMPORTANDO E EXPORTANDO COMPONENTES -------------------------------------------------------
// ARQUIVO DO APP
// import React from 'react';
// import { View, StyleSheet } from 'react-native';

import Topo from './componentes/Topo';
import Conteudo from './componentes/Conteudo';

export default function App() {
  return (
    <View style={estilos.containerTopo}>
      <Topo />
      <Conteudo />
    </View>
  );
}
// IMPORTANDO E EXPORTANDO COMPONENTES - ARQUIVO DE ESTILIZAÇÃO
import { StyleSheet } from 'react-native';

const estilosTopo = StyleSheet.create({
  containerTopo: {
    backgroundColor: '#e60012',
    justifyContent: "center",
    alignItems: "center",
    padding: 30
  },
  topoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  topoDescricao: {
    color: '#fff',
    textAlign: "center"
  },
  topoImg: {
    width: 100,
    height: 100
  }
});

export default estilosTopo;
// no arquivo que usa esse estilo: import estilos from './estilosConteudo';


// NAVEGAÇÃO
// instalar biblioteca de navegação --> npm install @react-navigation/native
// instalar bibliotecas auxiliares necessárias --> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
// se der erro --> npm install
// instalar drawer, tabs ou stack --> @react-navigation/drawer, @react-navigation/bottom-tabs ou @react-navigation/stack

// UTILIZAÇÃO BOTTOM-TABS
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from "./Componentes/TelaInicial";
import TelaPerfil from "./Componentes/TelaPerfil";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen name="Início" component={TelaInicial} />
        <Tabs.Screen name="Perfil" component={TelaPerfil} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
};

// UTILIZAÇÃO DRAWER
// depois de instalar precisa "Abra o arquivo babel.config.js que fica salvo na pasta principal do projeto e cole o seguinte"
// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: ['react-native-reanimated/plugin'],
//   };
// };
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TelaCorNormal from "./Componentes/TelaCorNormal/";
import TelaCorInvertida from "./Componentes/TelaCorInvertida/";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name="Cores Normais" component={TelaCorNormal} />
        <Drawer.Screen name="Cores Invertidas" component={TelaCorInvertida} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
};

// UTILIZAÇÃO BUTTON
import { Button, View } from 'react-native';
export default function App(props) {
  return (
    <View>
      <Button
        title="Toque aqui"
        onPress={() => { console.log("O botão foi tocado") }}
      />
      <Button
        title="Tela inicial"
        onPress={
          () => { props.navigation.navigate('Tela inicial') } // < ---------------
        }
      />
    </View>
  );
}
// --------------------
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaHome from "./Componentes/TelaHome/";
import TelaContato from "./Componentes/TelaContato/";
import TelaSobre from "./Componentes/TelaSobre/";

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Abas.Navigator>
        <Abas.Screen name="Tela inicial" component={TelaHome} />
        <Abas.Screen name="Contato" component={TelaContato} />
        <Abas.Screen name="Sobre" component={TelaSobre} />
      </Abas.Navigator>
    </NavigationContainer>
  )
};

// UTILIZAÇÃO BUTTON - ABRIR MENU LATERAL
export default function TelaHome(props) {
  return (
    <View>
      <Button
        title="Abrir menu"
        onPress={() => { props.navigation.openDrawer() }}
      />
    </View>
  );
}
// STACK NAVIGATION -- não exibe rodas como menu ou abas. cria um botão de voltar automaticamente
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaHome from "./Componentes/TelaHome/";
import TelaDescricao from "./Componentes/TelaDescricao/";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TelaHome} />
        <Stack.Screen name="Descrição" component={TelaDescricao} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

// EVENTOS DE TOUCH -- onTouchStart e onTouchEnd
import { Image, Text, View } from 'react-native';
import estilo from '../../assets/estilos.js';

import carro from '../../assets/carros/civic.png';
import moto from '../../assets/motos/CG-start.png';

export default function Inicio(props) {
  return (
    <View style={estilo.container} >
      <Text style={estilo.titulo} >
        Veículos Honda
      </Text>

      <View style={estilo.areaItem} onTouchEnd={() => { props.navigation.navigate('Carros') }}>
        <Image source= style={estilo.imagem} />
        <View style={estilo.areaInformativa}>
          <Text style={estilo.textoInformativo}>Carros</Text>
        </View>
      </View>

      <View style={estilo.areaItem} onTouchEnd={() => { props.navigation.navigate('Motos') }}>
        <Image source= style={estilo.imagem} />
        <View style={estilo.areaInformativa}>
          <Text style={estilo.textoInformativo}>Motos</Text>
        </View>
      </View>
    </View>
  );
}

// DevMedia 4ª missão
// CONTAINERS - ScrollView ImageBackground e Prassable -------------------------------------------------------
// ScrollView - pode ser usado como o View. Na tela toda ou em parte
import { Text, ScrollView, View, Image } from 'react-native';
export default function App() {
  return (
    <ScrollView style={estilos.container}>
      <Image source={Capa} style={estilos.imagem} />

      <Text style={estilos.titulo}>The Beatles</Text>
      <Text style={estilos.subtitulo}>Help</Text>

      <View>
        <Text style={estilos.paragrafo}>
          Help, I need somebody
          Help, not just anybody
          Help, you know I need someone, help!
        </Text>
      </View>
    </ScrollView>
  )}

  // ImageBackground
import { ImageBackground, View, Text } from 'react-native';
export default function App() {
  return (
    <ImageBackground style={ estilos.container } source={ imgFundo }>

      <View style={ estilos.box }>
        <Text style={ estilos.boxTitulo }>Planeta Terra</Text>
        <Text style={ estilos.boxParagrafo }>Nosso planeta é um dos oito que estão no Sistema Solar orbitando em torno de uma estrela central: o Sol.</Text>
        <Text style={ estilos.boxParagrafo }>Essa órbita permite o desenvolvimento da vida devido à temperatura que chega até nós, o que chamamos de radiação solar.</Text>
      </View>

    </ImageBackground>
  );
}
<ImageBackground
        style={ estilos.container }
        source={ imgFundo }
        blurRadius={10}
        resizeMode="stretch"
        >
</ImageBackground>
resizeMode="cover"
resizeMode="contain"
resizeMode="stretch"
resizeMode="repeat"
resizeMode="center"

blurRadius={10}
blurRadius={20}
blurRadius={40}

// Pressable

