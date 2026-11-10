import prisma from "../db.js";

class UsersRepository {

    // Classe de usuarios para interação com o banco de dados,
    // sem verificação de token e autenticação por simplicidade temporaria

  // Seleciona todos os usuarios

  #omit = { senha_hash: true, jwt_token: true };

  getAll = () =>
    prisma.usuarios.findMany({
      omit: this.#omit,
      orderBy: { id_usuario: "asc" },
    });

  // seleciona um usuario em especifico pelo id

  get = (id_usuario) =>
    prisma.usuarios.findUnique({
      omit: this.#omit,
      where: { id_usuario },
    });

  // seleciona um usuario pelo nome

  getName = (nome) =>
    prisma.usuarios.findMany({
      omit: this.#omit,
      where: {
        nome: {
          contains: nome,
          mode: "insensitive",
        },
      },
      orderBy: { id_usuario: "asc" },
    });

  // cria um usuario

  create = (data) => prisma.usuarios.create({ data });

  // atualiza um usuario

  update = (id, data) =>
    prisma.usuarios.update({ where: { id_usuario }, data });

  // remove/deleta um usuario

  remove = (id) => prisma.usuarios.delete({ where: { id_usuario } });
}

export default new UsersRepository();
