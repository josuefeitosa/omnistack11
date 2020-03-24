const express = require('express');
const routes = express.Router();
const connection = require('./database/connection');

const OngController = require('./controllers/OngController');
/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * GET: Buscar informação do back-end;
  * POST: Criar informação no back-end;
  * PUT: Alterar informação no back-end;
  * DELETE: Deletar informação no back-end;
  */

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros e paginação) -> request.input;
 * Route Params: Parâmetros utilizados para identificar recursos, colocados após "/" -> request.params;
 * Request Body: Corpo da requisição utilizado para criar ou alterar recursos -> request.body
 */

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;