module.exports = {
  type: 'object',
  properties: {
    nome: { type: 'string' },
    descricao: { type: 'string', maximum: 100 },
    preco: { type: 'float', maximum: 100 },
    quantidade: { type: 'integer', maximum: 100 },
  },
  required: ['nome', 'descricao', 'preco', 'quantidade'],
  additionalProperties: false,
};
