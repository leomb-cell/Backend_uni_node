let data = { material: [] };

class EstoqueRepository {
  // metodo de retorno de todos os usuarios

  async getAll() {
    if (data.material.length == 0) return { msg: "nenhum material encontrado" };

    return data.material;
  }

  // metodo de retorno de um usuario especifico pelo id fornecido

  async getMaterialById(id) {
    const result = data.material[id];

    if (!result) return null;

    return result;
  }

  //   metodo de criação de usuarios

  async createMaterial(nome, qtd) {
    const newMaterial = {
      name: nome,
      qtde: qtd,
    };
    data.material.push(newMaterial);
    return data.material;
  }

  //   metodo de atualização de usuarios

  async updateMaterial(id, nome, qtd) {
    const material = await this.getMaterialById(id);
    if (!material) return { msg: "Material Não encontrado" };

    data.material[id].name = nome;
    data.material[id].qtde = qtd;

    return data.material;
  }

  //   metodo de exclusão de usuarios

  async deleteMaterial(id) {
    const material = await this.getMaterialById(id);
    if (!material) return { msg: "Material Não encontrado" };

    const idFormatado = Number(id);

    data.material = data.material.filter((_, i) => i !== idFormatado);
    return data.material;
  }
}

export default new EstoqueRepository();
