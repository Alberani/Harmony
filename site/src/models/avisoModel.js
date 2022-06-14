var database = require("../database/config");

function listar() {
    console.log("ACESSEI O Post  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `SELECT idPost, titulo, conteudo, fk_usuario, idUsuario, nome, email, senha FROM Post INNER JOIN Usuario ON fk_usuario = idUsuario;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pesquisarConteudo(texto) {
    console.log("ACESSEI O Post MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarConteudo()");
    var instrucao = `SELECT idPost, titulo, conteudo, fk_usuario, idUsuario, nome, email, senha FROM Post INNER JOIN Usuario on fk_usuario = idUsuario WHERE conteudo LIKE '${texto}';`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O Post MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `SELECT idPost, titulo, conteudo, fk_usuario, idUsuario, nome, email, senha FROM Post INNER JOIN Usuario on fk_usuario = idUsuario WHERE idUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(titulo, conteudo, idUsuario) {
    console.log("ACESSEI O Post MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, conteudo, idUsuario);
    var instrucao = `
        INSERT INTO Post (titulo, conteudo, fk_usuario) VALUES ('${titulo}', '${conteudo}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novoConteudo, idPost) {
    console.log("ACESSEI O Post MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novoConteudo, idPost);
    var instrucao = `
        UPDATE Post SET conteudo = '${novoConteudo}' WHERE idPost = ${idPost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idPost) {
    console.log("ACESSEI O Post MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPost);
    var instrucao = `
        DELETE FROM Post WHERE idPost = ${idPost};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarConteudo,
    publicar,
    editar,
    deletar
}
