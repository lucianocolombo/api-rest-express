const express = require('express');
var router = express.Router();
const produtosController = require('../controllers/ProdutosController.js');
const authMiddleware = require('../middlewares/TokenValido.js');

//retorna todos os jogadores
router.get('/produtos', [authMiddleware.check], jogadorController.findAll);

//recupera um jogador pelo seu id
router.get('/produtos/:id', [authMiddleware.check], jogadorController.find);

//cria um novo jogador
router.post('/produtos', [authMiddleware.check], jogadorController.create);

//atualiza um jogador pelo seu id
router.put('/produtos/:id', [authMiddleware.check], jogadorController.update);

//exclui um jogador pelo seu id
router.delete('/produtos/:id', [authMiddleware.check], jogadorController.delete);

module.exports = router;
