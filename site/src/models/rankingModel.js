const database = require('../database/config');

function buscarPorFilial(filialId) {
    const instrucaoSql = `
        SELECT f.id AS filial_id, p.nome AS promocao,COUNT(a.id) AS qtd_alertas
        FROM filial f JOIN promocao p ON f.id = p.fk_filial LEFT JOIN alerta a ON p.id = a.fk_promocao
        WHERE f.id = ${filialId} GROUP BY f.id, p.nome ORDER BY qtd_alertas DESC LIMIT 3;
    `;

    console.log("Executando a instrução SQL para buscar por filial: \n" + instrucaoSql);

    return database.executar(instrucaoSql, [filialId]);
}


function atualizarTabela(limite_linhas) {
    const instrucaoSql = `
        SELECT p.nome AS promocao, COUNT(a.id) AS qtd_alertas
        FROM promocao p
        JOIN alerta a ON p.id = a.fk_promocao
        GROUP BY p.id
        ORDER BY qtd_alertas DESC 
        LIMIT ${limite_linhas};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql, [limite_linhas]);
}

function Obterclassificacao() {
    const instrucaoSql = `
        SELECT p.nome AS promocao, COUNT(a.id) AS qtd_alertas
        FROM promocao p
        JOIN alerta a ON p.id = a.fk_promocao
        GROUP BY p.id
        ORDER BY qtd_alertas DESC
    `;
    console.log("Executando a instrução SQL para classificação: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}


module.exports = {
    buscarPorFilial,
    atualizarTabela,
    Obterclassificacao,
};
