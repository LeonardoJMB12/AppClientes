import { connect } from "../database";

export const getClientes = async (req, res) => {
   const connection = await connect();
   const [rows] =  await connection.query("SELECT * FROM clientes ORDER BY apellidos ");
    res.json(rows);
};

export const getCliente = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM clientes WHERE id = ?',[
        req.params.id,]);

   res.json(rows[0]);
};

export const getClienteCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT count(*) FROM clientes")
    res.json(rows[0]["count(*)"])
};

export const saveClientes = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query("INSERT INTO clientes (nombre, apellidos, edad, correo, nacionalidad, ci, username, password) VALUES (?,?,?,?,?,?,?,?)" ,[
    req.body.nombre, 
    req.body.apellidos,
    req.body.edad, 
    req.body.correo,
    req.body.nacionalidad,
    req.body.ci,
    req.body.username,
    req.body.password
])
console.log(results)
    res.json({
        id:results.insertId,
        ...req.body})
};

export const deleteCliente = async (req, res) => {
    const connection = await connect();
    await connection.query("DELETE FROM clientes WHERE id = ? ", [
        req.params.id,
    ]);
     res.sendStatus(204);
};

export const updateCliente = async (req, res) => {
    const connection = await connect();
    await connection.query('UPDATE clientes SET ? WHERE id = ?',[
        req.body,
        req.params.id
    ])
  
    res.sendStatus(204);
};
export const loginCliente = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM clientes WHERE username = ? ',[
        req.params.username]);
        res.json(rows);
};