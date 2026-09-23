import { Router } from "express";

const router = Router();

// dados de mock

const products = [
  { id: 1, produto: "Notebook", valor: 3000.99 },
  { id: 2, produto: "Mouse", valor: 310.99 },
  { id: 3, produto: "Headset", valor: 100.99 },
  { id: 4, produto: "Teclado", valor: 450.99 },
  { id: 5, produto: "Adaptador usb para RJ45", valor: 37.99 },
];

// endpoint para trazer todos os dados

router.get("/", (req, res) => {
  res.json(products);
});

// endpoint para tazer um dado especifico

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const idNum = Number(id);
  let result = {};

  products.forEach((product) => {
    if (product.id == idNum) {
      result.data = product;
    }
  });

  if (!result.data) {
    res.json({msg: 'Nenhum produto encontrado'})
  }

  res.json(result);
});

export default router;
