const router = require('express').Router();
const contentController = require('../controllers/contentController.js');
const Content = require('../models/contentModel.js')

router.get('/', contentController.index);
router.post('/store', contentController.store);
router.put('/update', contentController.update);
router.delete('/delete/:id', contentController.delete);
module.exports = router;
