const entrada = require('readline-sync');

const sensor = entrada.questionFloat("Digite o nivel de vibracao do equipamento em mm/s: ");

if(sensor <= 3) {
    console.log("ESTÁVEL!");
} else if (sensor >= 3 && sensor <= 6) {
    console.log("ATENÇÃO!");
} else {
    console.log("CRÍTICA!");
}

console.log(`Vibração do sensor: ${sensor} mm/s`);