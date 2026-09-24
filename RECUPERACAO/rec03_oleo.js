const entrada = require('readline-sync');

const nivel = entrada.questionInt("Qual a temperatura da maquina?: ");

if (nivel <=40) {
    console.log("INSPEÇÃO NECESSÁRIA!");
} else if (nivel >40 && nivel <= 80) {
    console.log("NÍVEL NORMAL!");
} else {
    console.log("INSPEÇÃO NECESSÁRIA!")
}
console.log( nivel, "%")