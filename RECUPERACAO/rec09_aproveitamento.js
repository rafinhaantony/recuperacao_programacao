const entrada = require('readline-sync');

function calcularAproveitamento(util, total) {
    return (util / total) * 100;
}

function classificarAproveitamento(percentual) {
    if (percentual >= 90) {
        return "EXCELENTE!";
    } else if (percentual >= 75) {
        return "ADEQUADO!";
    } else {
        return "REVISAR PROCESSO!";
    }
}

console.log("=== CÁLCULO DE APROVEITAMENTO ===");
const quantidadeUtil = entrada.questionInt("Digite a quantidade util: ");
const quantidadeTotal = entrada.questionInt("Digite a quantidade total: ");

const percentual = calcularAproveitamento(quantidadeUtil, quantidadeTotal);
const classificacao = classificarAproveitamento(percentual);

console.log(`Total: ${quantidadeTotal}`);
console.log(`Util: ${quantidadeUtil}`);
console.log(`Percentual: ${percentual.toFixed(2)}%`);
console.log(`Classificação: ${classificacao}`);