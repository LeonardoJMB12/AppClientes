import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native'

const ClienteItem = ({cliente, handleDelete}) => {

  const navigation = useNavigation()
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity 
      onPress={() => navigation.navigate('ClienteFormScreen', 
      {id: cliente.id})} >

      <Text style={styles.itemTitle}>{cliente.nombre}</Text>
      <Text style={styles.itemTitle}>{cliente.apellidos}</Text>
      <Text style={styles.itemTitle}>{cliente.edad}</Text>
      <Text style={styles.itemTitle}>{cliente.correo}</Text>
      <Text style={styles.itemTitle}>{cliente.nacionalidad}</Text>
      <Text style={styles.itemTitle}>{cliente.ci}</Text>
      <Text style={styles.itemTitle}>{cliente.username}</Text>
      <Text style={styles.itemTitle}>{cliente.password}</Text>

      </TouchableOpacity>

      <TouchableOpacity style= {{backgroundColor: "#ed5213", 
      padding: 7, borderRadius: 5}} onPress={() => handleDelete(cliente.id)}
      >
        <Text>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor: '#333333',
        padding: 20,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTitle:{
        color: '#ffffff'
    }
})

export default ClienteItem;
