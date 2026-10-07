import pool from "../db.js";

class UsersRepository {
  // metodo de retorno de todos os usuarios

  async getAllUSers() {
    const query = "SELECT id, name, email FROM users";

    try {
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error("Erro ao buscar usuaris:", error);
      throw error;
    }
  }

  // metodo de retorno de um usuario especifico pelo id fornecido

  async getUserById(id) {
    const query = "SELECT id, name, email FROM users WHERE id = $1";
    try {
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error("Erro ao buscar usuario:", error);
      throw error;
    }
  }

  //   metodo de criação de usuarios

  async createUser(name, email) {
    const query = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
    const values = [name, email];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Erro ao criar usuario: ", error);
      throw error;
    }
  }

  //   metodo de atualização de usuarios

  async updateUser(id, name, email) {
    const query = "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *";
    const values = [name, email, id];
    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error("Erro ao atualizar usuario: ", error);
      throw error;
    }
  }

  //   metodo de exclusão de usuarios

  async deleteUser(id) {
    const query = "DELETE FROM users WHERE id = $1 RETURNING *";
    try {
      const result = await pool.query(query, [id]);
      return result.rows[0];
    } catch (error) {
      console.error("Erro ao deletar usuario: ", error);
      throw error;
    }
  }
}

export default new UsersRepository();
