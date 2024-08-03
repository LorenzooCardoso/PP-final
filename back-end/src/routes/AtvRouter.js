const { Router } = require('express');
const router = Router();

const { storeAtv } = require('../controller/AtvController');

router.post('/store/atv', storeAtv)

module.exports = router;