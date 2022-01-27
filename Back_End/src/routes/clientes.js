import {Router} from 'express';
import { getCliente, getClienteCount, getClientes, saveClientes, deleteCliente, updateCliente, loginCliente } from '../controllers/clientes';

const router = Router();


 /**
 * @swagger
 * /clientes:
 *  get:
 *    summary: Get all Clients
 *    
 */
router.get('/clientes', getClientes);

 /**
 * @swagger
 * /clientes/count:
 *  get:
 *    summary: Count all Clients
 *    
 */
router.get('/clientes/count', getClienteCount)

/**
 * @swagger
 * /cliente:
 *  post:
 *     summary: Save a new client
 */

 router.post('/clientes', saveClientes)

/**
 * @swagger
 * /clientes/{id}:
 *     get:
 *          summary: Get a client by id
 */
router.get('/clientes/:id', getCliente)


/**
 * @swagger
 * /clientes/{id}:
 *      delete:
 *             summary: Delete a client by id
 */
router.delete('/clientes/:id', deleteCliente)

/**
 * @swagger
 * /clientes/{id}:
 *      put:
 *            summary: Update a client by id
 */
router.put('/clientes/:id', updateCliente)

/**
 * @swagger
 * /clientes/{username}:
 *      get:
 *            summary: Get a client by username
 */
 router.get('/clientes/:username ', loginCliente)


export default router