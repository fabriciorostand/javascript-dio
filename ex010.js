/* Desafio: Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro {
    nome;
    marca;
    cor;
    kmPorLitros;

    constructor (nome, marca, cor, kmPorLitros) {
        this.nome = nome;
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitros = kmPorLitros; 
    }

    calcularViagem (distanciaEmKm, precoCombustivel) {
        const litrosConsumidos = distanciaEmKm / this.kmPorLitros;
        const valorGasto = precoCombustivel * litrosConsumidos;
        console.log(`O valor do percurso feito pelo ${this.nome} será de R$ ${valorGasto.toFixed(2)}`)
    }
}

const distanciaEmKm = 500;
const precoCombustivel = 6.17;

const hrvDonaJack = new Carro('HRV', 'Hyundai', 'Prata', 12);
const golfudoPotente = new Carro('Golf', 'Volkswagen', 'Prata', 11.7); 

golfudoPotente.calcularViagem(distanciaEmKm, precoCombustivel);