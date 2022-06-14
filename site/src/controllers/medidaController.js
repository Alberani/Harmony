var medidaModel = require("../models/medidaModel");

function pegarInfo(req, res) {

    console.log(`Plotando gráfico`);

    medidaModel.pegarInfo().then(function (resultado) {
            res.status(200).json(resultado);

    }).catch(function (erro) {
        console.log(erro);
        console.log("Erro ao plotar gráfico", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function votar(req, res) {

    console.log(`Votando...`);
    const idUsuario = req.query.idUsuario;
    const voto = req.query.voto;

    medidaModel.votar(idUsuario, voto).then(function (resultado) {
            res.status(200).json(resultado);

    }).catch(function (erro) {
        console.log(erro);
        console.log("Erro ao votar", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    pegarInfo,
    votar,
}