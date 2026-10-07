import express from 'express';
import usersRoutes from './routes/users.js';
import 'dotenv/config';

const app = express();

const port = process.env.PORT

app.use(express.json());

app.use('/users', usersRoutes)

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`);
});
