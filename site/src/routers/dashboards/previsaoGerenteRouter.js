var express = require("express");
var router = express.Router();

var previsaoGerenteController = require("../controllers/previsaoGerenteController");

router.get("/puxarDados/:nomeDaVariavelDoIDDaFilialXD", function (req, res) {
    previsaoGerenteController.puxarDados(req, res);
});

module.exports = router;