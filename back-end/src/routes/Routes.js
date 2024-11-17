const express = require('express');
const router = express.Router();
const lojaController = require('../controllers/lojaController');

router.post('/descontar', lojaController.descontarPrecoDaQuantia);

module.exports = router;