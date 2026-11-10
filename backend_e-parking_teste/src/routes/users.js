import { Router } from "express";
import users from "../repositories/users.js";
import bcrypt from "bcrypt";

const router = Router();

// funçoes de apoio

function parseId(value) {
  const id = Number(value);
  if (Number.isSafeInteger(id) && id > 0) {
    return id;
  } else {
    return null;
  }
}

function validName(name) {
  if (typeof name === "string" && name.trim().length > 0) {
    return true;
  } else {
    return false;
  }
}

function parseDate(date) {
  if (typeof date !== "string" && typeof date !== "number") return null;
  const nascimento = new Date(date);
  return Number.isNaN(nascimento.getTime()) ? null : nascimento;
}

// rotas de get

// endpoint para retornar todos os usuarios
router.get("/", async (req, res) => {
  const result = await users.getAll();
  res.json(result);
});

// endpoint para retornar um usuario especifico pelo id
router.get("/id/:id", async (req, res) => {
  // recuperando o id dos parametros

  const id = parseId(req.params.id);

  // tratando erro de id undefined

  if (!id) return res.status(400).json({ error: "Id invalido!" });

  // request do banco pelo usuario

  const result = await users.get(id);

  // verificando se o usuario foi retornado ou não

  if (!result) {
    return res.status(404).json({ error: "Usuario não encontrado!" });
  } else {
    return res.json(result);
  }
});

router.get("/name/:name", async (req, res) => {
  const { name } = req.params;

  if (!validName(name))
    return res.status(400).json({ error: "Nome invalido!" });

  const result = await users.getName(name.trim());

  res.json(result);
});

// rotas de post

// endpoint novo usuario
router.post("/", async (req, res) => {
  const {
    nome,
    senha,
    email,
    cpf_cnpj,
    dt_nascimento,
  } = req.body;

  //   validando dados

  if (!validName(nome)) {
    return res.status(400).json({ error: "O campo nome precisa ser valido!" });
  }
  if (!senha) {
    return res
      .status(400)
      .json({ error: "O campo senha precisa ser valido!" });
  }
  if (!email) {
    return res.status(400).json({ error: "O campo email precisa ser válido!" });
  }
  if (!cpf_cnpj) {
    return res
      .status(400)
      .json({ error: "O campo cpf_cnpj precisa ser valido!" });
  }
  if (!dt_nascimento) {
    return res
      .status(400)
      .json({ error: "O campo dt_nascimento precisa ser valido!" });
  }

  //   convertendo a data para o formato esperado

  const nascimento = parseDate(dt_nascimento);
  if (!nascimento)
    return res
      .status(400)
      .json({ error: "O campo dt_nascimento precisa ser uma data valida!" });

  // criando o hash da senha

  const senha_hash = await bcrypt.hash(senha, 10);

  //   criando o mock do json web token - remover quando for implementado

  const TOKEN_MOCK = { jwt_token: "mock-token", validade_token: new Date() };

  try {
    const created = await users.create({
      nome: nome.trim(),
      senha_hash,
      email: email.trim().toLowerCase(),
      cpf_cnpj: cpf_cnpj.trim(),
      dt_nascimento: nascimento,
      ...TOKEN_MOCK,
    });

    res.status(201).json(created);
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(409).json({ error: "Email ou CPF/CNPJ já cadastrado" });
    }
    console.error(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
});

export default router;
