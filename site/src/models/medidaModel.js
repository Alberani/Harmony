var database = require("../database/config");

function pegarInfo() {
    instrucaoSql = `select count(*) as Sol, (select count(*) from usuario where preferencia = 'L') as Lua from usuario where preferencia = 'S';`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function votar(idUsuario, voto) {
    instrucaoSql = `update usuario set preferencia = '${voto}' where idUsuario = ${idUsuario};`
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    pegarInfo,
    votar,
}
