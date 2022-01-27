import {config as dotenv} from "dotenv";
dotenv();

export const config = {
    host: process.env.BD_HOST || 'localhost',
    user: process.env.BD_USER || 'root',
    password: process.env.BD_PASSWORD || '1234',
    database: process.env.BD_DATABASE || 'Grupo_siondb'
}