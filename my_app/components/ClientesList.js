import { FlatList, RefreshControl } from 'react-native';
import React, {useState, useEffect} from 'react';

import {useIsFocused} from '@react-navigation/native'

import ClienteItem from './ClienteItem';
import {getClientes, deleteCliente} from '../api'


const ClientesList = () => {

  const [clientes, setclientes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const isFocused = useIsFocused()

  const loadClientes = async () => {
    const data = await getClientes();
    setclientes(data)
    
  }
  useEffect(() => {
    console.log(isFocused)
    loadClientes();
  },[isFocused]);

  const handleDelete = async (id) => {
    await deleteCliente(id)
    await loadClientes()

  }

    const renderItem = ({item}) => {
        return<ClienteItem cliente={item} handleDelete={handleDelete}/>
    };

    const onRefresh = React.useCallback(async () => {
      setRefreshing(true);
      await loadClientes();
      setRefreshing(false);
    })

  return (
    <FlatList 
    style={{width: '100%'}}
      data={clientes}
      keyExtractor={(item) => item.id + ''} 
      renderItem= {renderItem} 
      refreshControl={
        <RefreshControl
        refreshing={refreshing}
        color ={["#78e08f"]}
        onRefresh={onRefresh}
        progressBackgroundColor="#222f3e"
        />
      }
      />
  );
};

export default ClientesList;
