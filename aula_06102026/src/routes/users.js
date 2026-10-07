import { Router } from "express";
import userRepository from "../repositories/users.js";

const router = Router();

// get all users

router.get("/", async (req, res) => {
  try {
    const users = await userRepository.getAllUSers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Erro ao buscar usuarios", error);
    res.json({ erro: "Erro ao buscar usuarios" });
  }
});

// get user by id

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userRepository.getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    console.error("Erro ao buscar usuario", error);
    res.json({ erro: "Erro ao buscar usuario" });
  }
});

// create user

router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await userRepository.createUser(name, email);
    res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao criar novo usuario", error);
    res.json({ erro: "Erro ao criar novo usuario" });
  }
});

// Update user

router.put("/:id", async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  try {
    const result = await userRepository.updateUser(id, name, email);
    res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao atualizar usuario", error);
    res.json({ erro: "Erro ao atualizar usuario" });
  }
});

// Delete user

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await userRepository.deleteUser(id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Erro ao deletar usuario: ", error);
    res.json({ erro: "Erro ao deletar usuario" });
  }
});

export default router;
