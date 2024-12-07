/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc () {
        return this.peso / (this.altura * this.altura);
    }
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'obeso';
    } else {
        return 'obsedidade Grave';
    }
}

function main () {
    const fabricio = new Pessoa('Fabricio', 70, 1.90);
    const isabelli = new Pessoa('Isabelli', 80, 1.72);
    const jaqueline = new Pessoa('Jaqueline', 50, 1.70);

    console.log(`${fabricio.nome}: ${fabricio.calcularImc().toFixed(1)} de IMC, ${classificarImc(fabricio.calcularImc())}`);
    console.log(`${isabelli.nome}: ${isabelli.calcularImc().toFixed(1)} de IMC, ${classificarImc(isabelli.calcularImc())}`);
    console.log(`${jaqueline.nome}: ${jaqueline.calcularImc().toFixed(1)} de IMC, ${classificarImc(jaqueline.calcularImc())}`);
}

main();