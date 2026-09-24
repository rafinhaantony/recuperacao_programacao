const entrada = require("readline-sync");

const nome = entrada.question("Digite o nome da pecas: ");
const qtd = entrada.questionInt("Digite a quantidade de pecas: ");
const preco = entrada.questionFloat("Digite o preco da peca: ");

const total = qtd * preco;

console.log(`Nome da peça: ${nome}`);
console.log(`Quantidade: ${qtd}`);
console.log(`Preço: ${preco}`);
console.log(`Total: R$${total.toFixed(2)}`);