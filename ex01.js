// Programa para calcular o valor de uma viagem de carro

const precoCombustivel = 5.79;
const distanciaEmKm = 1580;
const kmPorLitros = 12;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

const valorGasto =  litrosConsumidos * precoCombustivel;

console.log("R$ " + valorGasto.toFixed(2));