const router = require('express').Router()
const contentController = require('../controllers/contentController');

router.get('/', contentController.index)
module.exports = router;