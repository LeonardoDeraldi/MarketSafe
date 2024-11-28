// filialModel.js:

// dependências:
//   importa o arquivo `config.js`:
const database = require("../../database/config.js");

// declara a função `estadoFiliais`:
function estadoFiliais(fk_empresa) {
  // declara a variável de instrução sql:
  const instrucao = `select f.status, count(f.id) quantidade from filial_status f where fk_empresa = ${fk_empresa} group by f.status;`;
  // declara a variável de resultado da execução:
  const resultado = database.executar(instrucao);
  // retorna o resultado da execução:
  return resultado;
}

// declara a função `maioresTaxasDeAlerta`:
function maioresTaxasDeAlerta(fk_empresa) {
  // declara a variável de instrução sql:
  const instrucao = `select f.nome, ifnull( sum( if(t.quantidade_alerta, 1, 0) ) / count(t.id), 0 ) taxa_alerta from filial f left join ( select t.*, count(a.id) quantidade_alerta from totem t left join ( select * from alerta a where a.data_hora > date_sub(current_timestamp, interval 5 minute) and a.data_hora <= current_timestamp ) a on t.id = a.fk_totem where t.data_hora <= current_timestamp group by t.id ) t on f.id = t.fk_filial where f.data_hora <= current_timestamp and f.fk_empresa = ${fk_empresa} group by f.id order by taxa_alerta desc limit 5;`;
  // declara a variável de resultado da execução:
  const resultado = database.executar(instrucao);
  // retorna o resultado da execução:
  return resultado;
}

function taxaGeralDeAlertas(fk_empresa) {
  // declara a variável de instrução sql:
  const instrucao = `select ifnull( sum( if(t.quantidade_alerta, 1, 0) ) / count(t.id), 0 ) taxa_geral from filial f left join ( select t.*, count(a.id) quantidade_alerta from totem t left join ( select * from alerta a where a.data_hora > date_sub(current_timestamp, interval 5 minute) and a.data_hora <= current_timestamp ) a on t.id = a.fk_totem where t.data_hora <= current_timestamp group by t.id ) t on f.id = t.fk_filial where f.data_hora <= current_timestamp and f.fk_empresa = ${fk_empresa};`;
  // declara a variável de resultado da execução:
  const resultado = database.executar(instrucao);
  // retorna o resultado da execução:
  return resultado;
}
function totensPorEmpresa(fk_empresa) {
  // declara a variável de instrução sql:
  const instrucao = `select count(t.id) from filial f left join totem t on f.id = t.fk_filial where f.fk_empresa = 1;`;
  // declara a variável de resultado da execução:
  const resultado = database.executar(instrucao);
  // retorna o resultado da execução:
  return resultado;
}
function maiorTaxaDeAlertas(fk_empresa) {
  // declara a variável de instrução sql:
  const instrucao = `select f.nome, ifnull( sum( if(t.quantidade_alerta, 1, 0) ) / count(t.id), 0 ) taxa_alerta from filial f left join ( select t.*, count(a.id) quantidade_alerta from totem t left join ( select * from alerta a where a.data_hora > date_sub(current_timestamp, interval 5 minute) and a.data_hora <= current_timestamp ) a on t.id = a.fk_totem where t.data_hora <= current_timestamp group by t.id ) t on f.id = t.fk_filial where f.data_hora <= current_timestamp and f.fk_empresa = ${fk_empresa} group by f.id order by taxa_alerta desc limit 1;`;
  // declara a variável de resultado da execução:
  const resultado = database.executar(instrucao);
  // retorna o resultado da execução:
  return resultado;
}
function totalDeFiliais(fk_empresa) {
  // declara a variável de instrução sql:
  const instrucao = `select count(f.id) from filial f where f.fk_empresa = 1;`;
  // declara a variável de resultado da execução:
  const resultado = database.executar(instrucao);
  // retorna o resultado da execução:
  return resultado;
}

// exporta as funções do arquivo `filialModel.js`:
module.exports = {
  estadoFiliais,
  maioresTaxasDeAlerta,
  taxaGeralDeAlertas,
  totensPorEmpresa,
  maiorTaxaDeAlertas,
  totalDeFiliais
};
