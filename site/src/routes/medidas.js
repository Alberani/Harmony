var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/pegarInfo", function (req, res) {
    medidaController.pegarInfo(req, res);
});

router.get("/votar", function (req, res) {
    medidaController.votar(req, res);
});


module.exports = router;