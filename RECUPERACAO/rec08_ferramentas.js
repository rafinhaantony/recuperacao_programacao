const entrada = require('readline-sync');

const ferramentas = [];
for (let i = 0; i < 4; i++) {
    const nome = entrada.question(`Digite o nome da ferramenta ${i + 1}: `);
    const quantidade = entrada.questionInt(`Digite a quantidade disponivel da ferramenta ${i + 1}: `);
    const minimo = entrada.questionInt(`Digite a quantidade minima da ferramenta ${i + 1}: `);
    const ferramenta = { nome, quantidade, minimo };
    ferramentas.push(ferramenta);
}
for (let i = 0; i < ferramentas.length; i++) {
    const { nome, quantidade, minimo } = ferramentas[i];
    if (quantidade < minimo) {
        console.log(`${nome} - REPOR!`);
    } else {
        console.log(`${nome} - ESTOQUE SUFICIENTE!`);
    }
}