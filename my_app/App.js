import React from "react";
import {Text, TouchableOpacity} from "react-native"
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import ClienteFormScreen from "./screens/ClienteFormScreen";
import LoginFormScreen from "./screens/LoginFormScreen";
import LoginClienteFormScreen from "./screens/LoginClienteFormScreen";

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        
        <Stack.Screen name="LoginFormScreen" component={LoginFormScreen} 

options={({navigation}) => ({
  title:'App Mobil',
headerStyle: {backgroundColor: "#222f3e"},
headerTitleStyle: { color: "#ffffff"},
headerTitleAlign: 'center',
headerRight: () => (
  <TouchableOpacity 
  onPress={() => navigation.navigate("ClienteFormScreen")}
  > 
    <Text style={{color: "#ffffff", marginRight:20, fontSize:15}}>Registrar</Text>
  </TouchableOpacity>     
  
),
headerLeft: () => (
  <TouchableOpacity 
  onPress={() => navigation.navigate("LoginClienteFormScreen")}
  > 
    <Text style={{color: "#ffffff", marginRight:20, fontSize:15}}>Inicia Sesion</Text>
  </TouchableOpacity>     
  
),

})} 
/>

        <Stack.Screen name="HomeScreen" component={HomeScreen} 

        options={({navigation}) => ({
          title:'Lista de Clientes',
        headerStyle: {backgroundColor: "#222f3e"},
        headerTitleStyle: { color: "#ffffff"},
        
        })} 
        />
        <Stack.Screen name="ClienteFormScreen" component={ClienteFormScreen}
        options={{
          title: 'Registrar nuevo cliente',
          headerStyle: {backgroundColor: "#222f3e"},
          headerTitleStyle: { color: "#ffffff"},
          headerTintColor: '#ffffff',
        }}
        />

<Stack.Screen name="LoginClienteFormScreen" component={LoginClienteFormScreen} 

options={({navigation}) => ({
  title:'Inicio de sesion',
headerStyle: {backgroundColor: "#222f3e"},
headerTitleStyle: { color: "#ffffff"},

})} 
/>
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App