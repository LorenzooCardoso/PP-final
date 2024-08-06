const { Router } = require('express');
const router = Router();
const  upload   =  require('../config/multer') 
const { storeAtv, getPosts } = require('../controller/AtvController');

router.post('/store/atv', upload.single('file'), storeAtv);
router.get('/posts', getPosts);

module.exports = router;