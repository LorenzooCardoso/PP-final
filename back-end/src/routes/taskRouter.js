const { Router } = require('express');
const router = Router();

const { storeTask, Getlogin } = require('../controller/taskController'); //criado uma const tanto para o cadastro quanto para o login

/**
 * @swagger
 * /store/task:
 *      post:
 *          summary: Cadastro
 *          responses:
 *              200:
 *                  description: Cadastrar um usuário
 *                  content:
 *                      appllication/json:
 *                          schema:
 *                              type: array
 *                              intems:
 *                                  type: object
 */
router.post('/store/task', storeTask); //Rota pro cadastro

/**
 * @swagger
 * /login:
 *      get:
 *          summary: Login
 *          responses:
 *              200:
 *                  description: Retorna o login cadastrado
 *                  content:
 *                      appllication/json:
 *                          schema:
 *                              type: array
 *                              intems:
 *                                  type: object
 */
router.post('/login', Getlogin); //Rota pro login

module.exports = router;



