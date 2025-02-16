var database = require("../database/config");

async function cadastrarMes(mes, semana_do_mes) {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarMes():");
  // console.log("Mes:", mes);
  // console.log("Semana do Mês:", semana_do_mes);

  var instrucaoSql = `
      SELECT 
          MONTH(data_hora) AS mes,
          CASE 
              WHEN DAY(data_hora) BETWEEN 1 AND 7 THEN '1'
              WHEN DAY(data_hora) BETWEEN 8 AND 14 THEN '2'
              WHEN DAY(data_hora) BETWEEN 15 AND 21 THEN '3'
              WHEN DAY(data_hora) BETWEEN 22 AND 31 THEN '4'
          END AS semana_do_mes,
          COUNT(id) AS total_alertas,
          ROUND(AVG(cpu_porcentagem), 2) AS media_cpu,
          ROUND(AVG(ram_porcentagem), 2) AS media_ram
      FROM alerta
      WHERE MONTH(data_hora) = ${mes} 
      AND CASE 
          WHEN DAY(data_hora) BETWEEN 1 AND 7 THEN '1'
          WHEN DAY(data_hora) BETWEEN 8 AND 14 THEN '2'
          WHEN DAY(data_hora) BETWEEN 15 AND 21 THEN '3'
          WHEN DAY(data_hora) BETWEEN 22 AND 31 THEN '4'
      END = '${semana_do_mes}' 
      GROUP BY mes, semana_do_mes
      ORDER BY mes, semana_do_mes;
  `;
  
  const resultado = await database.executar(instrucaoSql);
  return resultado;
}


function cadastrarRanking() {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarRanking():");

  var instrucaoSql = `    
    SELECT 
    a.fk_totem AS totem, 
    t.mac_address AS idTotem, 
    COUNT(*) AS total_alertas
    FROM 
    alerta a
    JOIN 
    totem t ON a.fk_totem = t.id
    WHERE 
    MONTH(a.data_hora) = 11 
    AND WEEK(a.data_hora, 1) - WEEK(DATE_SUB(a.data_hora, INTERVAL DAYOFMONTH(a.data_hora) - 1 DAY), 1) + 1 = 3
    GROUP BY 
    a.fk_totem, t.mac_address
    ORDER BY 
    total_alertas DESC
    LIMIT 5;
`;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarTaxa() {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarTaxa():");

  var instrucaoSql = `
    SELECT 
    DATE(data_hora) AS dia,
    COUNT(*) AS total_alerta,
    ROUND((COUNT(*) / (SELECT COUNT(*) FROM alerta WHERE data_hora >= CURDATE() - INTERVAL 7 DAY) * 100), 2) AS taxa_porcentagem
    FROM alerta
    WHERE data_hora >= CURDATE() - INTERVAL 7 DAY
    GROUP BY dia
    ORDER BY dia limit 7;`;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrarHora() {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarHora():");

  var instrucaoSql = `
    SELECT 
    HOUR(data_hora) AS hora,
    COUNT(*) AS total_alertas
    FROM alerta
    WHERE DATE(data_hora) = '2024-11-09'
    GROUP BY hora
    ORDER BY hora limit 8;  `;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarMesRanking(mes, semana_do_mes) {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarMesRanking():");
  // console.log(mes)
  var instrucaoSql = `
    SELECT 
    a.fk_totem as totem, 
    t.mac_address as idTotem, 
    COUNT(*) AS total_alertas
    FROM alerta a
    JOIN totem t ON a.fk_totem = t.id
    WHERE 
    MONTH(a.data_hora) = ${mes} AND 
    WEEK(a.data_hora, 1) - WEEK(DATE_SUB(a.data_hora, INTERVAL DAYOFMONTH(a.data_hora) - 1 DAY), 1) + 1 = ${semana_do_mes}
    GROUP BY a.fk_totem, t.mac_address
    ORDER BY total_alertas DESC
    LIMIT 5;
 `;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarMesEspecifico(mes, semana_do_mes) {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarMesEspecifico():");

  var instrucaoSql = `
    SELECT 
    HOUR(data_hora) AS hora,
    COUNT(*) AS total_alertas
    FROM alerta
    WHERE 
    MONTH(data_hora) = ${mes} AND 
    WEEK(data_hora, 1) - WEEK(DATE_SUB(data_hora, INTERVAL DAYOFMONTH(data_hora) - 1 DAY), 1) + 1 = ${semana_do_mes}
    GROUP BY hora
    ORDER BY hora
    LIMIT 5;
 `;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarMesTaxa(mes, semana_do_mes) {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarMesTaxa():");

  var instrucaoSql = `
    SELECT 
    DATE(data_hora) AS dia,
    (COUNT(*) * 100.0 / NULLIF(
        (SELECT COUNT(*) 
         FROM alerta 
         WHERE 
            MONTH(data_hora) = ${mes} AND 
            CASE
                WHEN DAY(data_hora) BETWEEN 1 AND 7 THEN 1
                WHEN DAY(data_hora) BETWEEN 8 AND 14 THEN 2
                WHEN DAY(data_hora) BETWEEN 15 AND 21 THEN 3
                ELSE 4
            END = ${semana_do_mes}
        ), 0
    )) AS taxa_porcentagem
    FROM alerta
    WHERE 
    MONTH(data_hora) = ${mes} AND 
    CASE
        WHEN DAY(data_hora) BETWEEN 1 AND 7 THEN 1
        WHEN DAY(data_hora) BETWEEN 8 AND 14 THEN 2
        WHEN DAY(data_hora) BETWEEN 15 AND 21 THEN 3
        ELSE 4
    END = ${semana_do_mes}
    GROUP BY DATE(data_hora)
    ORDER BY dia
    LIMIT 7;
 `;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function maisAlerta() {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function maisAlerta():");

  var instrucaoSql = `
   SELECT 
    HOUR(data_hora) AS hora,
    COUNT(*) AS total_alertas
FROM 
    alerta
WHERE 
    MONTH(data_hora) = 11 
    AND WEEK(data_hora, 1) - WEEK(DATE_SUB(data_hora, INTERVAL DAYOFMONTH(data_hora) - 1 DAY), 1) + 1 = 4
GROUP BY 
    hora
ORDER BY 
    total_alertas DESC
LIMIT 1;
 `;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarMaisAlerta(mes, semana_do_mes) {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarMaisAlerta():");

  var instrucaoSql = `
    SELECT 
    HOUR(data_hora) AS hora,
    COUNT(*) AS total_alertas
    FROM 
    alerta
    WHERE 
    MONTH(data_hora) = ${mes}
    AND WEEK(data_hora, 1) - WEEK(DATE_SUB(data_hora, INTERVAL DAYOFMONTH(data_hora) - 1 DAY), 1) + 1 = ${semana_do_mes}
    GROUP BY 
    hora
    ORDER BY 
    total_alertas DESC
    LIMIT 1;
 `;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function alertaSemana() {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alertaSemana():");

  var instrucaoSql = `
    SELECT 
    DATE_FORMAT(data_hora, '%d/%m') AS dia_mes,
    COUNT(*) AS total_alertas
    FROM 
    alerta
    WHERE 
    MONTH(data_hora) = 11 AND 
    YEAR(data_hora) = 2024 AND 
    WEEK(data_hora, 1) - WEEK(DATE_SUB(data_hora, INTERVAL DAYOFMONTH(data_hora) - 1 DAY), 1) + 1 = 1
    GROUP BY 
    DATE_FORMAT(data_hora, '%d/%m')
    ORDER BY 
    total_alertas DESC
    LIMIT 1;
 `;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarAlertaSemana(mes, semana_do_mes) {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarAlertaSemana():");

  var instrucaoSql = `
    SELECT 
    DATE_FORMAT(data_hora, '%d/%m') AS dia_mes,
    COUNT(*) AS total_alertas
    FROM 
    alerta
    WHERE 
    MONTH(data_hora) = ${mes} AND 
    YEAR(data_hora) = 2024 AND 
    WEEK(data_hora, 1) - WEEK(DATE_SUB(data_hora, INTERVAL DAYOFMONTH(data_hora) - 1 DAY), 1) + 1 = ${semana_do_mes}
    GROUP BY 
    DATE_FORMAT(data_hora, '%d/%m')
    ORDER BY 
    total_alertas DESC
    LIMIT 1;
 `;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function mediaHorario() {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function mediaHorario():");

  var instrucaoSql = `
    SELECT 
    HOUR(data_hora) AS hora_alerta,
    COUNT(*) AS total_alertas
    FROM 
    alerta
    WHERE 
    MONTH(data_hora) = 11
    GROUP BY 
    HOUR(data_hora)
    ORDER BY 
    total_alertas DESC
    LIMIT 1;
 `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function atualizarMediaHorario(mes, semana_do_mes) {
  // console.log("ACESSEI O ESTAÇÂO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizarMediaHorario():");

  var instrucaoSql = `
    SELECT 
    HOUR(data_hora) AS hora_alerta,
    COUNT(*) AS total_alertas
    FROM 
    alerta
    WHERE 
    MONTH(data_hora) = ${mes}
    AND WEEK(data_hora, 1) - WEEK(DATE_SUB(data_hora, INTERVAL DAYOFMONTH(data_hora) - 1 DAY), 1) + 1 = ${semana_do_mes}
    GROUP BY 
    HOUR(data_hora)
    ORDER BY 
    total_alertas DESC
    LIMIT 1;
 `;
  // console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrarMes,
  cadastrarRanking,
  cadastrarTaxa,
  cadastrarHora,
  atualizarMesRanking,
  atualizarMesEspecifico,
  atualizarMesTaxa,
  maisAlerta,
  atualizarMaisAlerta,
  alertaSemana,
  atualizarAlertaSemana,
  mediaHorario,
  atualizarMediaHorario,
};
