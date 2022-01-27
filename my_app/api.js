const API ='http://10.0.2.2:3000/clientes'

export const getClientes = async () => {
    const res = await fetch(API)
    return await res.json()
};

export const getCliente = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return await res.json();
};

export const saveCliente = async (newCliente) => {
  const res =  await fetch(API, {
        method:"POST", 
        headers: {Accept: "application/json",
        "Content-Type": "application/json"},
        body: JSON.stringify(newCliente)
});
return await res.json();
}

export const deleteCliente = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const updateCliente = async (id, newCliente) => {
  console.log(id, newCliente)
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCliente),
  });
  return res;
};
export const loginCliente = async (username, password) => {
  const res = await fetch(`${API}/${username}/${password}`);
  return await res.json();
};