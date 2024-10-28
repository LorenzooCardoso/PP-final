const express = require('express');
const router = express.Router();
const { storeMoedas, getMoedasById } = require('../controller/moedaController');

// Definindo as rotas para moedas
router.put('/moedas', storeMoedas);
router.get("/moedas/get/:idUser", getMoedasById);


module.exports = router;