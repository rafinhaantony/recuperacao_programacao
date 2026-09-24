// Objetivo: Integrar objetos, arrays, repetição e condição.
// Um almoxarifado precisa cadastrar quatro ferramentas. Cada ferramenta possui nome, quantidade
// disponível e quantidade mínima.
// O programa deve:
// ☐ Criar um array vazio para armazenar as ferramentas.
// ☐ Cadastrar 4 ferramentas usando um laço.
// ☐ Criar um objeto para cada ferramenta com nome, quantidade e minimo.
// ☐ Adicionar cada objeto ao array com push().
// ☐ Percorrer o array após o cadastro.
// ☐ Quando quantidade < minimo, exibir "REPOR".
// ☐ Caso contrário, exibir "ESTOQUE SUFICIENTE".
// ☐ Apresentar nome, quantidade, mínimo e situação de cada ferramenta.

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