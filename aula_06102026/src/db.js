import pg from 'pg';
import 'dotenv/config';

const {Pool} = pg;

const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER, // ajuste se necessário
    password: process.env.DB_PASS, // ajuste se necessário
    ssl: false
})

pool.on('error', (err) => {
    console.error('Erro inesperado no cliente', err)
})

pool.on('connect', () => {
    console.log('Conectado ao banco de dados PostgreSQL');
})

export default pool;