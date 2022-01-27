import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'

import Layout from '../components/Layout'
import {saveCliente, getCliente, updateCliente} from '../api'

const ClienteFormScreem = ({navigation, route}) => {

  const [cliente, setCliente] = useState({
    nombre: '',
    apellidos: '',
    edad: '',
    correo: '',
    nacionalidad: '',
    ci: '',
    username: '',
    password:''
  });

  const [modificar, setModificar] = useState(false);


  const handleChange = (name, value) => setCliente ({...cliente, [name]: value});

  const handleSubmit = async () => {
    try{
      if (!modificar) {
        await saveCliente(cliente);
       }else {
         await updateCliente(route.params.id, cliente);
       }
       navigation.navigate("LoginFormScreen");
    }catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({headerTitle: "Modificar"});
      setModificar(true);
      (async () => {
        const cliente = await getCliente(route.params.id);
        setCliente({
          nombre: cliente.nombre, 
          apellidos: cliente.apellidos, 
          edad: cliente.edad,
          correo: cliente.correo,
          nacionalidad: cliente.nacionalidad,
          ci: cliente.ci,
          username: cliente.username,
          password: cliente.password
        });
      })();
    }
  }, []);

  return (
    <Layout>
      <TextInput
      style ={styles.input}
      placeholder="Escribir Nombre"
      placeholderTextColor="#546575"
      onChangeText={text => handleChange('nombre', text)}
      value={cliente.nombre}
      />
      <TextInput
      style ={styles.input}
      placeholder="Escribir Apellidos"
      placeholderTextColor="#546575"
      onChangeText={text => handleChange('apellidos', text)}
      value={cliente.apellidos}
      />
      <TextInput
      style ={styles.input}
      placeholder="Escribir Edad"
      placeholderTextColor="#546575"
      onChangeText={text => handleChange('edad', text)}
      value={cliente.edad +''}
      />
      <TextInput
      style ={styles.input}
      placeholder="Escribir Correo"
      placeholderTextColor="#546575"
      onChangeText={text => handleChange('correo', text)}
      value={cliente.correo}
      />
      <TextInput
      style ={styles.input}
      placeholder="Escribir Nacionalidad"
      placeholderTextColor="#546575"
      onChangeText={text => handleChange('nacionalidad', text)}
      value={cliente.nacionalidad}
      />
      <TextInput
      style ={styles.input}
      placeholder="Escribir Ci"
      placeholderTextColor="#546575"
      onChangeText={text => handleChange('ci', text)}
      value={cliente.ci + ''}
      />
      
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

      {
        !modificar ? (
          <TouchableOpacity style={styles.buttonSave} onPress ={handleSubmit} >
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
        ): (
          <TouchableOpacity style={styles.buttonUpdate} onPress ={handleSubmit} >
        <Text style={styles.buttonText}>Modificar</Text>
      </TouchableOpacity>
        )
      }
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

buttonUpdate: {
  paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    marginBottom: 3,
    backgroundColor: "#e58e26",
    width: "90%",
 }
});

export default ClienteFormScreem;
