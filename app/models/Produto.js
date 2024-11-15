const Sequelize = require('sequelize');
const db = require('./conexao.js');

class Produto {
  #nome;
  #descricao;
  #preco;
  #quantidade;

  // constructor(nome, descricao, preco, quantidade = null ) {
  constructor() {}

  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }

  get descricao() {
    return this.#descricao;
  }
  set descricao(descricao) {
    this.#descricao = descricao;
  }

  get preco() {
    return this.#preco;
  }
  set preco(preco) {
    this.#preco = preco;
  }

  get quantidade() {
    return this.#quantidade;
  }
  set quantidade(hp) {
    this.#quantidade = hp;
  }

  static async findByPk(id) {
    try {
      const resultado = await ProdutoModel.findByPk(id);
      if (resultado) {
        return resultado;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  static async findAll(equipamento) {
    try {
      const resultados = await ProdutoModel.findAll({ include: equipamento }); //{where ...}
      if (resultados) {
        return resultados;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  static async create(novoProduto) {
    try {
      const Produto = await ProdutoModel.create({
        nome: novoProduto.nome,
        descricao: novoProduto.descricao,
        preco: novoProduto.preco,
        quantidade: novoProduto.quantidade,
      });
      return Produto;
    } catch (error) {
      throw error;
    }
  }

  static async update(dados, idProduto) {
    try {
      const resultado = await ProdutoModel.update(dados, { where: { id: idProduto } });

      console.log('update model', resultado);
      if (resultado) {
        return resultado;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const data = await ProdutoModel.findByPk(id);
      if (data) {
        data.destroy();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
}

const ProdutoModel = db.define('Produto', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  descricao: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  preco: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  quantidade: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 100,
  },
});

module.exports = { Produto, ProdutoModel };
