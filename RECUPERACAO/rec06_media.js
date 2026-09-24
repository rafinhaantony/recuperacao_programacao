const entrada = require('readline-sync');

let acumulador = 0;
for (let i = 0; i < 6; i++) {
    const tempo = entrada.questionInt(`Digite o tempo do atendimento ${i + 1}: `);
    acumulador += tempo;
}
const media = acumulador / 6;
console.log(`Soma dos tempos: ${acumulador} minutos`);
console.log(`Média dos tempos: ${media} minutos`);