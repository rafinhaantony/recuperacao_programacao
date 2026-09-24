const entrada = require('readline-sync');

const producaoPorCiclo = entrada .questionInt("Digite a quantidade de produtos produzidos por ciclo: ")

for( let ciclo = 1; ciclo <= 12; ciclo ++) {
    const acumulado = ciclo * producaoPorCiclo;
    console.log(`Ciclo: ${ciclo}: ${acumulado} pecas acumuladas.`);
};