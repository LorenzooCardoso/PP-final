const { Router } = require('express');
const router = Router();
const  upload   =  require('../config/multer') 
const { storeAtv, getPosts } = require('../controller/AtvController');




/**
 * @swagger
 * /store/atv:
 *      post:
 *          summary: Cadastro de atv
 *          responses:
 *              200:
 *                  description: Cadastrar um exercicio
 *                  content:
 *                      appllication/json:
 *                          schema:
 *                              type: array
 *                              intems:
 *                                  type: object
 */
router.post('/store/atv', upload.single('file'), storeAtv);

/**
 * @swagger
 * /post:
 *      get:
 *          summary: Exibicao de atv
 *          responses:
 *              200:
 *                  description: Exibir a atividade
 *                  content:
 *                      appllication/json:
 *                          schema:
 *                              type: array
 *                              intems:
 *                                  type: object
 */
router.get('/posts', getPosts);

module.exports = router;


