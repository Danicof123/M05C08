var express = require('express');
var router = express.Router();

const {index, prefer} = require('../controllers/mainControllers');
const validator = require('../middleware/validator');

/* GET home page. */
router.get('/', index);
router.post('/', validator, prefer);

module.exports = router;
