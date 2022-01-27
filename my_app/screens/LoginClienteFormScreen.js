import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'

import {loginCliente} from '../api'


import Layout from '../components/Layout'


const LoginClienteFormScreen = ({navigation, route}) => {

    const [cliente, setloginCliente] = useState({
        username: '',
        password:''
      });

      const handleChange = (name, value) => setloginCliente ({...cliente, [name]: value});

      const handleSubmit = async () => {
        try{
       
            navigation.navigate("HomeScreen");
        
          
            
        }catch(error){
          console.error(error);
        }
      }

      return(
    <Layout>
      <TextInput
      style ={styles.input}
      placeholder="Escribir Usuario"
      placeholderTextColor="#546575"
      onChangeText={text => handleChange('username', text)}
      value={cliente.username}
      />
      <TextInput
      style ={styles.input}
      placeholder="Escribir Contraseña"
      placeholderTextColor="#546575"
      onChangeText={text => handleChange('password', text)}
      value={cliente.password }
      />

      <TouchableOpacity style={styles.buttonSave} onPress ={handleSubmit} >
        <Text style={styles.buttonText}>Iniciar Sesion</Text>
      </TouchableOpacity>

    </Layout>
      );
};

const styles= StyleSheet.create({
    input: {
      width: '90%',
      marginBottom: 7,
      borderWidth:1,
      fontSize: 18,
      borderColor: "#10ac84",
      height: 35,
      color: "#FFFFFF",
      textAlign:'center',
      padding:4,
      borderRadius:5
  
    },
    buttonSave:{ 
      width: '25%',
      
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 10,
      marginBottom: 5,
      backgroundColor: '#10ac84',
      marginRight: -230,
    },
  buttonText:{
    color: '#ffffff',
    textAlign: 'center',
  
  },
  
  
  });

export default LoginClienteFormScreen;