var express = require("express");
var router = express.Router();

var anotacoesController = require("../controllers/anotacoesController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/adicionar/:id", function (req, res) {
    anotacoesController.adicionar(req, res);
})

module.exports = router;