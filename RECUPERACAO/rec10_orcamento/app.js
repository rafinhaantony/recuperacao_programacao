const entrada = require('readline-sync');
const { calcularMaoDeObra, calcularTotal, verificarDesconto } = require('./funcoesOrcamento');

const nomeCliente = entrada.question("Digite o nome do cliente: ");
const valorMateriais = entrada.questionFloat("Digite o valor dos materiais: ");
const horasServico = entrada.questionInt("Digite a quantidade de horas de servico: ");
const maoDeObra = calcularMaoDeObra(horasServico);
const total = calcularTotal(valorMateriais, horasServico);
const desconto = verificarDesconto(total);

console.log("\n=== RELATÓRIO DE ORÇAMENTO ===");
console.log(`Cliente: ${nomeCliente}`);
console.log(`Valor dos Materiais: R$ ${valorMateriais.toFixed(2)}`);
console.log(`Mão de Obra: R$ ${maoDeObra.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Situação do Desconto: ${desconto}`);