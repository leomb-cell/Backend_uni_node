// Leonardo Martins Bitencourte

import express from 'express';
import estoqueRoutes from './routes/estoque.js';

const app = express();

app.use(express.json());

app.use('/estoque', estoqueRoutes);

app.listen(3001, () => {
    console.log(`Servidor executando na porta ${3001}`);
});
