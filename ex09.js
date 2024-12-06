// Criando Instâncias com Constructor

class Pessoa {
    nome;
    cidade;
    idade;

    constructor(nome, cidade, idade) {
        this.nome = nome;
        this.cidade = cidade;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, moro em ${this.cidade} e tenho ${this.idade} anos`);
    }
}

const fabricio = new Pessoa('Fabricio Rostand', 'Brasília', 23);
const elena = new Pessoa('Elena Cordeiro', 'Brasília', 24);

fabricio.descrever();
