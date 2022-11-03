const router = require('express').Router();
const contentController = require('../controllers/contentController.js')

router.get('/', contentController.index);
router.post('/store', contentController.store);
module.exports = router;
