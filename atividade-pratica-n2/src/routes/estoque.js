import { Router } from "express";
import estoqueRepository from "../repositories/estoque.js";

const router = Router();

// get all users

router.get("/", async (req, res) => {
  try {
    const materials = await estoqueRepository.getAll();
    res.status(200).json(materials);
  } catch (error) {
    console.error("Erro ao buscar materiais", error);
    res.json({ erro: "Erro ao buscar materiais" });
  }
});

// get user by id

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const materials = await estoqueRepository.getMaterialById(Number(id));
    res.status(200).json(materials);
  } catch (error) {
    console.error("Erro ao buscar materiais", error);
    res.json({ erro: "Erro ao buscar materiais" });
  }
});

// create user

router.post("/", async (req, res) => {
  const { name, qtde } = req.body;

  if (!name || qtde === undefined) {
    return res
      .status(400)
      .json({ erro: "Os campos 'nome' e 'qtd' são obrigatórios." });
  }

  try {
    const materials = await estoqueRepository.createMaterial(name, qtde);
    res.status(201).json(materials);
  } catch (error) {
    console.error("Erro ao criar material", error);
    res.json({ erro: "Erro ao criar material" });
  }
});

// Update user

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, qtde } = req.body;

  if (!name || qtde === undefined) {
    return res
      .status(400)
      .json({ erro: "Os campos 'nome' e 'qtd' são obrigatórios." });
  }

  try {
    const materials = await estoqueRepository.updateMaterial(id, name, qtde);
    res.status(200).json(materials);
  } catch (error) {
    console.error("Erro ao atualizar material", error);
    res.json({ erro: "Erro ao atualizar material" });
  }
});

// Delete user

router.delete("/:id", async (req, res) => {
  const {id} = req.params;
  try {
    const materials = await estoqueRepository.deleteMaterial(id);
    res.status(201).json(materials);
  } catch (error) {
    console.error("Erro ao criar material", error);
    res.json({ erro: "Erro ao criar material" });
  }
});

export default router;
