var express = require('express');
var router = express.Router();

const UserController = require("../controllers/UserController");

router.get('/', UserController.index);
router.get('/listar', UserController.listar);
router.post('/cadastrar', UserController.cadastrar);

module.exports = router;
