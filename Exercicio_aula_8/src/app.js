import express from "express";
import productRoutes from './routes/products.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use('/products', productRoutes)


app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
