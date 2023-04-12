var express = require('express');
var router = express.Router();
const controller = require('../controller/controller')

/* GET home page. */
router.post('/register', controller.register)
router.post('/login', controller.login)

module.exports = router;
