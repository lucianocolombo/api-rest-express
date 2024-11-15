const conexao = require('./conexao.js');

const db = {}; //armazenar as classes e models

//importar aqui para atribuir na lista de models e inicializar o BD:
db.produto = require('./Produto.js');
db.cliente = require('./Cliente.js');

//conectando e sincronizando com BD
conexao
  .sync({}) //{ force: true } --> para forcar a recriacao do banco
  .then(() => {
    console.log('sincronizacao com bd...');
  })
  .catch((err) => {
    console.log('falha ao sincronizar: ' + err.message);
  });

module.exports = db;
