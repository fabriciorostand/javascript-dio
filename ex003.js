// Programa para calcular o valor de uma viagem de carro 

const precoGasolina = 6.17;
const precoEtanol = 4.04;
const tipoCombustivel = 'Gasolina';

const kmPorLitros = 12;

const distanciaEmKm = 500;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Gasolina') {
    const valorGasto = precoGasolina * litrosConsumidos;
    console.log('R$ ' + valorGasto.toFixed(2));
} else if (tipoCombustivel === 'Etanol') {
    const valorGasto = precoEtanol * litrosConsumidos;
    console.log('R$ ' + valorGasto.toFixed(2));
} else {
    console.log('Tipo de combustível inválido')
}