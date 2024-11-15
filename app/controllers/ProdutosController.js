//validacao de schema
const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('../schemas/produto/novoProduto.js');
const validacao = ajv.compile(schema);
//models
const models = require('../models/index.js');
const Produto = models.produtos.Produto;

class ProdutoController {
  findAll(request, response) {
    const equipamentoModel = models.equipamento.EquipamentoModel;
    Produto.findAll(equipamentoModel)
      .then((data) => {
        if (data) {
          return response.status(200).json(data);
        } else {
          return response.status(404).json({
            message: 'Produto nao encontrado',
          });
        }
      })
      .catch((erro) => {
        response.status(500).json({
          message: erro.message,
        });
      });
  }

  find(request, response) {
    const id = request.params.id;
    Produto.findByPk(id)
      .then((data) => {
        if (data) {
          return response.status(200).json(data);
        } else {
          return response.status(404).json({
            message: 'Produto nao encontrado',
          });
        }
      })
      .catch((erro) => {
        return response.status(500).json({
          message: erro.message,
        });
      });
  }

  create(request, response) {
    let validacoes = validacao(request.body);
    if (!validacoes) {
      let mensagem = validacao.errors[0].instancePath.replace('/', '');
      mensagem += ' ' + validacao.errors[0].message;
      return response.status(400).json({
        message: mensagem,
      });
    }

    Produto.create(request.body)
      .then((data) => {
        return response.status(201).json(data);
      })
      .catch((erro) => {
        return response.status(500).json({
          message: 'erro no servidor: ' + erro.message,
        });
      });
  }

  update(request, response) {
    const id = request.params.id;

    Produto.findByPk(id)
      .then((buscaProduto) => {
        if (buscaProduto === null) {
          return response.status(404).json({
            message: 'Produto nao encontrado',
          });
        } else {
          Produto.update(request.body, id).then((atualizado) => {
            if (atualizado) {
              Produto.findByPk(id).then((ProdutoAtualizado) => {
                return response.status(200).json(ProdutoAtualizado);
              });
            } else {
              return response.status(500).json({
                message: 'ocorreu algum problema no servidor',
              });
            }
          });
        }
      })
      .catch((erro) => {
        return response.status(500).json({
          message: erro.message,
        });
      });
  }

  delete(request, response) {
    const id = request.params.id;
    Produto.delete(id)
      .then((removido) => {
        if (removido) {
          return response.status(200).json({
            message: 'Produto excluido com sucesso',
          });
        } else {
          return response.status(404).json({
            message: 'Produto nao encontrado',
          });
        }
      })
      .catch((erro) => {
        response.status(500).json({
          message: erro.message,
        });
      });
  }
}
module.exports = new ProdutoController();
